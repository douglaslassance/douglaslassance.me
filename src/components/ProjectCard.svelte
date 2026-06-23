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

  const brandConfig: Record<ProjectType, { icon: string }> = {
    youtube:   { icon: 'youtube.svg' },
    instagram: { icon: 'instagram.svg' },
    github:    { icon: 'github.svg' },
    steam:     { icon: 'steam.svg' },
    fab:       { icon: 'fab.svg' },
    company:   { icon: 'company.svg' },
    homebrew:  { icon: 'homebrew.svg' },
    website:   { icon: 'website.svg' },
  };

  const brand = $derived(brandConfig[type]);
  const isExternal = $derived(/^https?:\/\//i.test(url));

  const iconMaskStyle = $derived(`
    -webkit-mask-image: url(/${brand.icon});
    mask-image: url(/${brand.icon});
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
  target={isExternal ? '_blank' : undefined}
  rel={isExternal ? 'noopener noreferrer' : undefined}
  class={cn('project-card block rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden')}
>
  <div class="flex flex-row h-full aspect-[5/2]">
    <div class="flex-1 flex flex-col justify-between p-4">
      <div>
        <div class="overflow-hidden min-w-0 mb-2">
          <h3 class="card-title whitespace-nowrap text-base font-semibold text-foreground/80">{title}</h3>
        </div>
        <span class="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium text-foreground/70 bg-muted">
          <div class="w-3 h-3 opacity-60 flex-shrink-0" style={iconMaskStyle}></div>
          {category}
        </span>
        <hr class="border-border my-2" />
        <p class="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
    <div class="aspect-square h-full flex-shrink-0">
      <img src={image} alt={title} class="w-full h-full object-cover" />
    </div>
  </div>
</a>
