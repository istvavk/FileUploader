<script lang="ts">
    import { Card, Label, Select, Input, Fileupload, Button } from 'flowbite-svelte';

    let selected = "url";
    let jsonData = [
        {value:"url", name: "URL"},
        {value:"f", name: "FILE"},
    ]


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
                <Label for='default-input' class='block mb-2'>Default input</Label>
                <Input id='default-input' placeholder="Paste URL" />
            </div>
        {:else}
            <div class="pb-5">
                <Label class="pb-3" for='default_size' >Default size</Label>
                <Fileupload class="pb-10" id="default_size" />
            </div>
        {/if}
        <div class="flex justify-between pt-5">
            <Button color="red">Delete</Button>
            <Button color="red">Save</Button>
        </div>
    </Card>
</div>