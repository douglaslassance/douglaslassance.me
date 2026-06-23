export type ProjectType = 'youtube' | 'instagram' | 'website' | 'github' | 'steam' | 'fab' | 'company' | 'homebrew';

export interface Project {
  title: string;
  category: string;
  description: string;
  url: string;
  image: string;
  type: ProjectType;
}

export const profileData = {
  name: "Douglas Lassance",
  bio: "Raised in France, maturing in Los Angeles, I juxtapose brush strokes, connect vertices, drop keyframes, and chain instructions. Once in a while, others can enjoy the result.",
  avatar: "/avatar.png",
  online: [
    { name: "Bluesky", icon: "bluesky.svg", url: "https://bsky.app/profile/douglaslassance.bsky.social" },
    { name: "Mastodon", icon: "mastodon.svg", url: "https://mastodon.social/@douglaslassance" },
    { name: "GitHub", icon: "github.svg", url: "https://github.com/douglaslassance" },
    { name: "YouTube", icon: "youtube.svg", url: "https://youtube.com/@douglaslassance" },
    { name: "LinkedIn", icon: "linkedin.svg", url: "https://linkedin.com/in/douglaslassance" },
    { name: "SoundCloud", icon: "soundcloud.svg", url: "https://soundcloud.com/douglaslassance" },
    { name: "Gumroad", icon: "gumroad.svg", url: "https://douglaslassance.gumroad.com" },
    { name: "Fab", icon: "fab.svg", url: "https://www.fab.com/sellers/Douglas%20Lassance" },
    { name: "Midjourney", icon: "midjourney.svg", url: "https://www.midjourney.com/@douglaslassance" },
    { name: "Spotify", icon: "spotify.svg", url: "https://open.spotify.com/user/asterokid" },
    { name: "Steam", icon: "steam.svg", url: "https://steamcommunity.com/id/douglaslassance/" },
    { name: "Pinterest", icon: "pinterest.svg", url: "https://pinterest.com/douglaslassance" },
    { name: "Apple Music", icon: "apple-music.svg", url: "https://music.apple.com/profile/douglaslassance" },
    { name: "Ko-fi", icon: "ko-fi.svg", url: "https://ko-fi.com/douglaslassance" },
    { name: "Medium", icon: "medium.svg", url: "https://medium.com/@douglaslassance" },
    { name: "Product Hunt", icon: "producthunt.svg", url: "https://www.producthunt.com/@douglaslassance" },
    { name: "Monkeytype", icon: "monkeytype.svg", url: "https://monkeytype.com/profile/douglaslassance" },
    { name: "Itch.io", icon: "itch-io.svg", url: "https://douglaslassance.itch.io" },
    { name: "Patreon", icon: "patreon.svg", url: "https://patreon.com/douglaslassance" },
  ],
  personalProjects: [
    { title: "Galactic Mail", category: "Animated Short", description: "Corporate rivalry meets interstellar delivery", url: "https://youtu.be/WacTwZljbKk", image: "https://i.ytimg.com/vi/WacTwZljbKk/mqdefault.jpg", type: "youtube" },
    { title: "Peel", category: "App", description: "Browse different", url: "/peel", image: "/peel/icon.png", type: "website" },
    { title: "Kitsch", category: "SaaS", description: "Text to film", url: "https://kitsch.tv", image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fkitsch.tv/opengraph/", type: "website" },
    { title: "Curiomancer", category: "SaaS", description: "Let your taste guide you", url: "https://curiomancer.com", image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fcuriomancer.com/opengraph/", type: "website" },
    { title: "Mamecase", category: "App", description: "Give MAME a face", url: "/mamecase", image: "/mamecase/icon.png", type: "website" },
    { title: "Gitalong", category: "CLI", description: "Git without conflicts", url: "https://github.com/douglaslassance/gitalong", image: "/code.webp", type: "github" },
    { title: "Greedy Hand", category: "Photo Series", description: "No need own when you can hold", url: "https://www.instagram.com/greedyhand", image: "/greedy-hand.png", type: "instagram" },
    { title: "Trotter", category: "App", description: "Shape your next journey", url: "https://trotter.douglaslassance.me", image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Ftrotter.douglaslassance.me/opengraph/", type: "website" },
    { title: "Ramble", category: "App", description: "Cross-post with ease", url: "https://ramble.douglaslassance.me", image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Framble.douglaslassance.me/opengraph/", type: "website" },
    { title: "Gitoptic", category: "App", description: "Review more than text", url: "https://gitoptic.douglaslassance.me", image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fgitoptic.douglaslassance.me/opengraph/", type: "website" },
    { title: "Rollpaper", category: "App", description: "Put your wallpaper to use", url: "https://rollpaper.douglaslassance.me", image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Frollpaper.douglaslassance.me/opengraph/", type: "website" },
    { title: "Gifted", category: "App", description: "Automated VJing for your next party", url: "https://gifted.douglaslassance.me", image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fgifted.douglaslassance.me/opengraph/", type: "website" },
    { title: "Playsthetic", category: "Game Studio", description: "Game development with attitude ", url: "https://playsthetic.com/", image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fplaysthetic.com%2F/opengraph/", type: "website" },
    { title: "Shaker", category: "Unreal Engine Plugin", description: "Shake anything", url: "https://www.unrealengine.com/marketplace/en-US/product/shaker", image: "https://media.fab.com/image_previews/gallery_images/c7f65c12-0b25-40eb-a365-86b0437751c2/121b8639-fb63-4948-9d67-1866c80fdff8.jpg", type: "fab" },
    { title: "Sigg Jones", category: "Animated Short", description: "A story of brawl and bromance", url: "https://youtu.be/TE86DR8E0LI", image: "https://i.ytimg.com/vi/TE86DR8E0LI/mqdefault.jpg", type: "youtube" },
  ] as Project[],
  professionalProjects: [
    { title: "Villa", category: "SaaS", description: "Game Designer", url: "https://villamoves.com/", image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fvillamoves.com%2F/opengraph/", type: "website" },
    { title: "Spectre Divide", category: "Video Game", description: "Principal Technical Artist", url: "https://store.steampowered.com/app/2641470/Spectre_Divide/", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2641470/header.jpg?t=1745278846", type: "steam" },
    { title: "Marcel Lassance", category: "Website", description: "Developer", url: "https://marcellassance.fr", image: "https://v1.screenshot.11ty.dev/https%3A%2F%2Fmarcellassance.fr/opengraph/", type: "website" },
    { title: "Love, Death & Robots", category: "Animated Series", description: "Previs Supervisor", url: "https://youtu.be/wUFwunMKa4E?si=jrPzF7psHNnH1xRs", image: "https://i.ytimg.com/vi/wUFwunMKa4E/mqdefault.jpg", type: "youtube" },
    { title: "LoL: A New Dawn", category: "Cinematic Trailer", description: "Previs Artist", url: "https://youtu.be/vzHrjOMfHPY?si=NBlwjFsm5u-i0nTC", image: "https://i.ytimg.com/vi/vzHrjOMfHPY/mqdefault.jpg", type: "youtube" },
    { title: "Angel Stone", category: "Cinematic Trailer", description: "Previs Supervisor", url: "https://youtu.be/WDkGCuqY0Xs?si=_YFCeC69LTRFKvjp", image: "https://i.ytimg.com/vi/WDkGCuqY0Xs/mqdefault.jpg", type: "youtube" },
    { title: "Dragon Tattoo", category: "Opening Titles", description: "Previs Artist", url: "https://youtu.be/sY4f_83t_rw?si=ZWX2l3WI9FG-0BXW", image: "https://i.ytimg.com/vi/sY4f_83t_rw/mqdefault.jpg", type: "youtube" },
    { title: "Deadpool", category: "Movie", description: "Previs Artist", url: "https://youtu.be/ONHBaC-pfsk?si=fiiMuGCWSED3F52Z", image: "https://i.ytimg.com/vi/ONHBaC-pfsk/mqdefault.jpg", type: "youtube" },
    { title: "SWTOR: Sacrifice", category: "Cinematic Trailer", description: "Previs Supervisor", url: "https://youtu.be/1udespUmzGY?si=eo6tjNg_PvZWi9xn", image: "https://i.ytimg.com/vi/1udespUmzGY/mqdefault.jpg", type: "youtube" },
    { title: "Dead Rising 3", category: "Launch Trailer", description: "Previs Artist", url: "https://youtu.be/UFXfH-ruLXo?si=ZPNTSnoZE1h3Lt8w", image: "https://i.ytimg.com/vi/UFXfH-ruLXo/mqdefault.jpg", type: "youtube" },
    { title: "Arena of Valor", category: "Cinematic Trailer", description: "Previs Supervisor", url: "https://youtu.be/JM_UdSUW1ao?si=k_aggFSAIzbA36aX", image: "https://i.ytimg.com/vi/JM_UdSUW1ao/mqdefault.jpg", type: "youtube" },
    { title: "Halo Wars 2", category: "Game Cinematics", description: "Previs Supervisor", url: "https://youtu.be/uWk8FRDdvlY?si=8PXGmH7UpL41XnLU", image: "https://i.ytimg.com/vi/uWk8FRDdvlY/mqdefault.jpg", type: "youtube" },
    { title: "cross3d", category: "Python library", description: "Developer", url: "https://github.com/blurstudio/cross3d", image: "/code.webp", type: "github" },
    { title: "Elder Scrolls Online", category: "Cinematic Trailer", description: "Previs Artist", url: "https://youtu.be/195pyutqDA4?si=XsnEVdkvCr0GjXQC", image: "https://i.ytimg.com/vi/195pyutqDA4/mqdefault.jpg", type: "youtube" },
    { title: "Arkham Knight", category: "Cinematic Trailer", description: "Previs Artist", url: "https://youtu.be/6IE3fjbc_wY?si=342LXnV39PUeEA2g", image: "https://i.ytimg.com/vi/6IE3fjbc_wY/mqdefault.jpg", type: "youtube" },
    { title: "Arkham Origins", category: "Cinematic Trailer", description: "Previs Artist", url: "https://youtu.be/9pnK8akbd2M?si=TjEX9LvOmwx_5XQ2", image: "https://i.ytimg.com/vi/9pnK8akbd2M/mqdefault.jpg", type: "youtube" },
    { title: "RE: Raccoon City", category: "Cinematic Trailer", description: "Previs Artist", url: "https://youtu.be/Ar-qKACbnkg?si=WVmcCsfmrPnU4wfG", image: "https://i.ytimg.com/vi/Ar-qKACbnkg/mqdefault.jpg", type: "youtube" },
    { title: "WildStar", category: "Launch Trailer", description: "Previs Artist", url: "https://youtu.be/x-NXdWk9sm8?si=Obz3ZkQMCKfW-Fyb", image: "https://i.ytimg.com/vi/x-NXdWk9sm8/mqdefault.jpg", type: "youtube" },
    { title: "SWTOR", category: "Cinematic Trailer", description: "Previs Artist", url: "https://youtu.be/Pb8M5P1QKX8?si=wX70Up99NIyRid5x", image: "https://i.ytimg.com/vi/Pb8M5P1QKX8/mqdefault.jpg", type: "youtube" },
    { title: "eBoy Peecol'", category: "Toys", description: "Modeler", url: "https://www.eboy.com/search?q=peecol", image: "https://www.eboy.com/cdn/shop/files/eboy-peecol-toy-poster-detail-square.png", type: "website" },
    { title: "Dead Pirates' Wood", category: "Music Video", description: "Rigger", url: "https://youtu.be/cD1Rrfc0y-M?si=lVait8LIEMPVjs5W", image: "https://i.ytimg.com/vi/cD1Rrfc0y-M/mqdefault.jpg", type: "youtube" },
  ] as Project[]
};
