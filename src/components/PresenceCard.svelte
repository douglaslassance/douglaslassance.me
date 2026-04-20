<script lang="ts">
  import { cn } from '$lib/utils.js';

  let { name, icon, url }: {
    name: string;
    icon: string;
    url: string;
  } = $props();

  const iconMaskStyle = $derived(`
    -webkit-mask-image: url(/${icon});
    mask-image: url(/${icon});
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    background-color: hsl(var(--foreground));
  `);
</script>

<a
  href={url}
  class={cn('presence-card group block max-w-40 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-300')}
  target="_blank"
  rel="noopener noreferrer"
>
  <div class="p-3 desktop:p-5 flex flex-col items-start text-left aspect-square justify-between">
    <div class="flex flex-col items-start gap-2 desktop:gap-3 w-full">
      <div
        class="w-8 h-8 desktop:w-12 desktop:h-12 transition-all duration-300 opacity-60 group-hover:opacity-100"
        style={iconMaskStyle}
      ></div>
      <h3 class="text-sm desktop:text-base font-medium text-foreground/70">{name}</h3>
    </div>
  </div>
</a>
