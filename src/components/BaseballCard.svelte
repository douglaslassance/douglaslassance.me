<script lang="ts">
  import Card from '$lib/components/ui/card/card.svelte';

  let { name, bio, avatar, mobile = false }: {
    name: string;
    bio: string;
    avatar: string;
    mobile?: boolean;
  } = $props();
</script>

{#if mobile}
  <Card class="flex flex-col items-center gap-5 text-center overflow-hidden">
    <div class="w-full aspect-square">
      <img src={avatar} alt={name} class="w-full h-full object-cover object-top" />
    </div>
    <div class="px-6 pb-6">
      <h1 class="text-2xl font-bold mb-2">{name}</h1>
      <p class="text-sm text-foreground/60">{bio}</p>
    </div>
  </Card>
{:else}
  <Card class="flex flex-col overflow-hidden max-w-sm">
    <div class="w-full aspect-square">
      <img src={avatar} alt={name} class="w-full h-full object-cover object-top" />
    </div>
    <div class="p-6 space-y-3">
      <h1 class="text-2xl font-bold tracking-tight">{name}</h1>
      <p class="text-sm leading-relaxed text-foreground/60">{bio}</p>
    </div>
  </Card>
{/if}
