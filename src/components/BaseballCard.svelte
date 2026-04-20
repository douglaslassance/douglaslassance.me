<script lang="ts">
  let { name, bio, avatar, mobile = false }: {
    name: string;
    bio: string;
    avatar: string;
    mobile?: boolean;
  } = $props();
</script>

{#if mobile}
  <div class="flex flex-col items-center gap-4 text-center">
    <div class="w-24 rounded-full overflow-hidden flex-shrink-0">
      <img src={avatar} alt={name} />
    </div>
    <div>
      <h1 class="text-2xl font-bold mb-2">{name}</h1>
      <p class="text-base text-foreground/60">{bio}</p>
    </div>
  </div>
{:else}
  <div class="flex flex-col space-y-8">
    <div class="w-48 rounded-full overflow-hidden flex-shrink-0">
      <img src={avatar} alt={name} />
    </div>
    <div>
      <h1 class="text-4xl font-bold mb-4">{name}</h1>
      <p class="text-lg leading-relaxed text-foreground/60">{bio}</p>
    </div>
  </div>
{/if}
