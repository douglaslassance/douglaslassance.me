<script lang="ts">
  import { cn } from '$lib/utils.js';

  type ProjectType = 'youtube' | 'instagram' | 'website' | 'github' | 'steam' | 'fab' | 'company' | 'homebrew';

  let { title, category, description, url, image, type = 'website' as ProjectType }: {
    title: string;
    category: string;
    description: string;
    url: string;
    image: string;
    type?: ProjectType;
  } = $props();

  const brandConfig: Record<ProjectType, { color: string; icon: string }> = {
    youtube:   { color: '#ff0000', icon: 'youtube.svg' },
    instagram: { color: '#E4405F', icon: 'instagram.svg' },
    github:    { color: '#6b7280', icon: 'github.svg' },
    steam:     { color: '#1b9fd8', icon: 'steam.svg' },
    fab:       { color: '#00d4aa', icon: 'fab.svg' },
    company:   { color: '#8b5cf6', icon: 'company.svg' },
    homebrew:  { color: '#FBB040', icon: 'homebrew.svg' },
    website:   { color: '#6b7280', icon: 'website.svg' },
  };

  const brand = brandConfig[type];

  const iconMaskStyle = `
    -webkit-mask-image: url(/${brand.icon});
    mask-image: url(/${brand.icon});
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    background-color: ${brand.color};
  `;
</script>

<a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  class={cn('block rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300')}
  style={`background-color: ${brand.color}10;`}
>
  <div class="flex flex-row gap-6 h-full p-3 desktop:p-[13px] aspect-[2/1] desktop:aspect-[2.15/1]">
    <div class="flex-1 flex flex-col justify-between">
      <div>
        <div class="flex items-start gap-2 mb-2">
          <div
            class="w-4 h-4 opacity-60 flex-shrink-0 mt-[0.2375rem]"
            style={iconMaskStyle}
          ></div>
          <h3 class="text-base font-semibold text-foreground/80">{title}</h3>
        </div>
        <span
          class="inline-block px-2 py-1 rounded-full text-xs font-medium text-foreground/70"
          style={`background-color: ${brand.color}20;`}
        >{category}</span>
        <hr class="border-border my-2" />
        <p class="text-sm text-foreground/60">{description}</p>
      </div>
    </div>
    <div class="w-36 desktop:w-[210px] flex-shrink-0 rounded-md overflow-hidden bg-muted">
      <img src={image} alt={title} class="w-full h-full object-cover aspect-video" />
    </div>
  </div>
</a>
