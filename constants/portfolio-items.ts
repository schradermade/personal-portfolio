export type PortfolioProjectProps = {
  title: string;
  siteUrl: string;
  imgPath: string;
  description: string;
  features: string;
};

export const PortfolioProjects: PortfolioProjectProps[] = [
    {
    title: "Professional Dashboard - Single Page App",
    siteUrl:
      "https://my-dashboard-smoky.vercel.app/",
    imgPath: "/images/prof-dashboard.png",
    description:
      "Professional Dashboard SPA, React v18 frontend, SyncFusion UI Component lib, hosted on Vercel.",
    features:
      "Dashboard shows off Syncfusions powerful UI components in a full single page app with BrowserRouter / React Router.",
  },
  {
    title: "Signal Messenger - Single Page App",
    siteUrl:
      "https://signal-jvm5.vercel.app/sign-in?redirect_url=https%3A%2F%2Fsignal-jvm5.vercel.app%2F",
    imgPath: "/images/signal-messenger.png",
    description:
      "Full stack SPA (Single Page Application), Next.js 13 frontend, Next Server actions instead of dedicated API server, Clerk Social Sign-on authentication, MongoDB NoSQL database w/ Mongoose, hosted on Vercel.",
    features:
      "Messenger app allows a user to create account through Social Sign-on. User can create a new thread, other users can reply to that thread, user can reply to other users threads, user can delete thread. User can create Communities and control access to the Community where allowed users can create threads inside that Community space.",
  },
  {
    title: "Space Launch App",
    siteUrl: "http://35.88.147.64:8000/",
    imgPath: "/images/nasa-site.png",
    description:
      "Full stack application, React.js frontend, Node.js API serving frontend, MongoDB NoSQL database w/ Mongoose, containerized with Docker, hosted on AWS EC2 instance.",
    features:
      "User can create a new launch, manage pending launches, view Historical launches, delete pending launch.",
  },
  {
    title: "Cleveland Apartment Brokers",
    siteUrl: "https://clevelandapartmentbrokers.com",
    imgPath: "/images/cleveland-apt-brokers.png",
    description:
      "Website built for commercial real estate broker. React.js, Material-UI, hosted with AWS Amplify.",
    features:
      "User can engage with website, access critical information on the business, send request form to business.",
  },
  {
    title: "Wiki Results",
    siteUrl: "https://main.d1rfafshxnyxgf.amplifyapp.com",
    imgPath: "/images/wiki-results.png",
    description:
      "Next.js 13 frontend implementing Server Side Rendering, App directory, error and loading states. Consuming Wiki API, TailwindCSS for styling, hosted on AWS Amplify.",
    features:
      "User can input a search criteria and recieve back real-time search results from Wiki API.",
  },
  {
    title: "Tualatin Tek Club",
    siteUrl: "https://tualatintekclub.com",
    imgPath: "/images/tualatin-tek-club.png",
    description:
      "Next.js 13 website, reusable components, hosted on AWS Amplify.",
    features: "User can view critical information on the business.",
  },
];
