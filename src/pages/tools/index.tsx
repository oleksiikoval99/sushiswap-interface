import { ArrowRightIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Layout from "../../layouts/DefaultLayout";
import Link from "next/link";
import Typography from "../../components/Typography";

const tools = [
  {
    id: 1,
    name: "MEOWSHI",
    description: "Redonominate xSUSHI into MEOWSHI",
    href: "/tools/meowshi",
  },
  {
    id: 2,
    name: "SAAVE",
    description: "...",
    href: "/tools/saave",
  },
  {
    id: 3,
    name: "LP ZAP",
    description: "Zap into an LP position for any pool using any asset",
    href: "/zap",
  },
];

export default function Tools() {
  return (
    <Layout>
      <Head>
        <title>Tools | Sushi</title>
        <meta name="description" content="SushiSwap tools..." />
      </Head>
      <div className="w-screen max-w-xl space-y-4">
        <Typography variant="h1" component="h1">
          Tools
        </Typography>
        <ul className="space-y-4 divide-y-0">
          {tools.map((tool) => (
            <li
              key={tool.id}
              className="relative w-full p-4 rounded bg-dark-900 hover:bg-dark-800"
            >
              <div className="flex justify-between space-x-4">
                <div className="flex-1 min-w-0">
                  <Link href={tool.href}>
                    <a className="flex items-center justify-between focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <div className="space-y-1">
                        <p className="text-xl font-bold truncate text-primary">
                          {tool.name}
                        </p>
                        <p className="text-sm truncate text-secondary">
                          {tool.description}
                        </p>
                      </div>
                      <ArrowRightIcon
                        width={24}
                        height={24}
                        className="text-high-emphesis"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
