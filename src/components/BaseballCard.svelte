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
  <Card class="bio-card flex flex-col items-center gap-5 text-center overflow-hidden">
    <div class="w-full aspect-square">
      <img src={avatar} alt={name} class="avatar-default w-full h-full object-cover object-top" />
      <img src="/avatar-tired.png" alt={name} class="avatar-junji w-full h-full object-cover object-top" />
    </div>
    <div class="px-6 pb-6">
      <h1 class="text-2xl font-bold mb-2">{name}</h1>
      <p class="text-sm text-muted-foreground">{bio}</p>
    </div>
  </Card>
{:else}
  <div class="bio-card">
  <Card class="flex flex-col overflow-hidden max-w-sm">
    <div class="w-full aspect-square">
      <img src={avatar} alt={name} class="avatar-default w-full h-full object-cover object-top" />
      <img src="/avatar-tired.png" alt={name} class="avatar-junji w-full h-full object-cover object-top" />
    </div>
    <div class="p-6 space-y-3">
      <h1 class="text-2xl font-bold tracking-tight">{name}</h1>
      <p class="text-sm leading-relaxed text-muted-foreground">{bio}</p>
    </div>
  </Card>
  </div>
{/if}

<style>
  .avatar-junji { display: none; }
  :global(body.junji-on) .avatar-default { display: none; }
  :global(body.junji-on) .avatar-junji { display: block; }
</style>
