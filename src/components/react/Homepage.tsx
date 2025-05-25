import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Homepage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0b0e13]">
      <h1 className="text-white fold-bold text-5xl mb-8">Helo, I'm Hung ✌️</h1>
      <div className="flex w-14 justify-between">
        <a href="https://github.com/hungqt/" target="_blank">
          <GitHubLogoIcon color="white" width={20} height={20} />
        </a>
        <a href="https://www.linkedin.com/in/hungthieu/" target="_blank">
          <LinkedInLogoIcon color="white" width={20} height={20} />
        </a>
      </div>
    </div>
  );
}
