<script lang="ts">
  import { Button } from '$lib/components/ui/button/index.js';
  import { cn } from '$lib/utils.js';

  let { name, icon, url, color, action }: {
    name: string;
    icon: string;
    url: string;
    color: string;
    action: string;
  } = $props();

  const isMonochrome = color === '#000000' || color === '#333333';
  const isYouTube = name === 'YouTube';
  const subscribeUrl = isYouTube ? `${url}?sub_confirmation=1` : url;

  const iconMaskStyle = `
    -webkit-mask-image: url(/${icon});
    mask-image: url(/${icon});
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    background-color: ${isMonochrome ? '#6b7280' : color};
  `;

  function handleSubscribe(e: MouseEvent) {
    e.stopPropagation();
    window.open(subscribeUrl, '_blank');
  }
</script>

<a
  href={url}
  class={cn('group block rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300')}
  style={`background-color: ${color}10;`}
  target="_blank"
  rel="noopener noreferrer"
>
  <div class="p-3 desktop:p-5 flex flex-col items-start text-left aspect-square justify-between">
    <div class="flex flex-col items-start gap-2 desktop:gap-3 w-full">
      <div
        class="w-8 h-8 desktop:w-12 desktop:h-12 transition-all duration-300 opacity-60 group-hover:opacity-100"
        style={iconMaskStyle}
      ></div>
      <h3 class="text-[0.9rem] desktop:text-base font-medium text-foreground/70">{name}</h3>
    </div>
    {#if isYouTube}
      <div class="w-full flex justify-start">
        <Button
          size="xs"
          class="text-white hover:opacity-90 desktop:h-8 desktop:text-sm border-0"
          style="background-color: #ff0000cc;"
          onclick={handleSubscribe}
        >
          {action}
        </Button>
      </div>
    {/if}
  </div>
</a>
