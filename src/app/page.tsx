import { HeroProfile } from "@/components/sections/HeroProfile";
import { GitHubContributions } from "@/components/sections/GitHubContributions";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Projects } from "@/components/sections/Projects";
import { LetsWorkTogether } from "@/components/sections/LetsWorkTogether";

async function getGitHubData() {
  try {
    const res = await fetch('https://api.github.com/users/VoidLakshay', {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
}

export default async function Home() {
  const githubData = await getGitHubData();
  const avatarUrl = githubData?.avatar_url || "";
  const name = githubData?.name || "Lakshay";
  const videoUrl = "https://res.cloudinary.com/dgzd6pzm7/video/upload/v1784987981/Girl_Behind_Curtains_Revamped_2.0___4K___Anime_Mystery_Live_Wallpaper___zenlesszonezero_gaming_2160p60_xl5z99.mp4";

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start bg-background overflow-x-hidden">
      <div className="w-full flex flex-col gap-6 p-4 sm:max-w-2xl md:max-w-5xl lg:max-w-6xl md:py-8 mx-auto">
        <HeroProfile avatarUrl={avatarUrl} name={name} videoUrl={videoUrl} />
        <GitHubContributions username="VoidLakshay" />
        <Projects />
        <TechMarquee />
        <LetsWorkTogether />
      </div>
    </main>
  );
}