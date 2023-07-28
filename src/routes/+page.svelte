<script lang="ts">
    import { Card, Label, Select, Input, Fileupload, Button } from 'flowbite-svelte';
    import { db } from '$lib/firebase';
    import { storage } from '$lib/firebase';

    let selected = "url";
    let jsonData = [
        {value:"url", name: "URL"},
        {value:"f", name: "FILE"},
    ];
    let url;
    let files;


    function handleDelete () {
        if (url) {
            url = '';
        }
    }
    async function handleSave () {
        if (selected === "url") {
            await db
                .collection('urls')
                .add({
                    url
                });
        } else {
            await storage
                .ref()
                .child('files/' + files[0].name).put(files[0]);
        }
    }

</script>

<svelte:head>
    <title>FileUploader</title>
</svelte:head>

<div class="flex justify-center items-center w-full h-[100vh]">
    <Card class="h-3/6 w-3/5">
        <h5 class="font-sans text-lg font-medium text-zinc-950 text-center pb-3">Upload your json file</h5>
        <hr class="pb-3">
        <Label class="pb-6">Select an option
            <Select class="mt-2" items={jsonData} bind:value={selected} />
        </Label>
        {#if selected === "url"}
            <div class='mb-6'>
                <Label for='default-input' class='block mb-2'>Url</Label>
                <Input name="url" id='default-input' type="text" bind:value={url} placeholder="Paste URL" />
            </div>
        {:else}
            <div class="pb-5">
                <Label class="pb-3" for='default_size' >File</Label>
                <Fileupload type="file" bind:files={files} class="pb-10" id="default_size" />
            </div>
        {/if}
        <div class="flex justify-between pt-5">
            <Button color="red" on:click={() => handleDelete()}>Delete</Button>
            <Button color="red" on:click={() => handleSave()}>Save</Button>
        </div>
    </Card>
</div>




```