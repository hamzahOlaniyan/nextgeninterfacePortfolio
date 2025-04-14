import Button from "@/components/utils/Button";
import { FaCircleDot } from "react-icons/fa6";
import Image from 'next/image'
import { services_provided } from "@/components/panel/servicesProvided";
import { ThemeBackground } from "@/components/utils/ThemeBackground";
import { Label } from "@/components/utils/Label";
import MediaQuery from "@/components/utils/MediaQuery";
import { FadeUpAnimation } from "@/lib/aos/Animation";

export function generateStaticParams() {
    return [
        { title: "branding-graphics-design" },
        { title: "web-design-development" },
        { title: "domain-hosting" },
        { title: "search-engine-optimization" },
    ]
}
export default function Page({ params }: { params: { title: string } }) {

    const name = params.title.slice(0, 3);

    function restoreUrl(formattedStr: string) {
        return formattedStr
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())
        // .replace(/\bAnd\b/gi, "&"); // Restore "&" if needed
    }
    const service = services_provided.find(s => s.title.includes(restoreUrl(name)))

    return (
        <div>
            <ThemeBackground heading={service?.title} image={service?.mascot}>
                <p>{service?.subtitle}</p>
            </ThemeBackground>

            <div className="bg-themeColor">
                        {service?.service_page?.map((i: any) => (
                            <div key={i} className="space-y-20 relative bg-secondary/10 pt-8 text-white">
                                <MediaQuery>
                                    <div className=" space-y-6 mb-14">
                                        <h1 className='text-[clamp(1rem,10vw,3rem)] leading-10 md:leading-normal font-black py-2 font-mitr'>{i.header}</h1>
                                        <p className="text-lg font-medium">{i?.paragraph}</p>
                                    </div>
                                    <div className=" md:grid grid-cols-[2fr_1fr] lg:gap-10 items-center my-6">
                                        <div className={`mb-6 lg:mb-0 ${i.image.length < 2 ? 'grid-cols-1' : 'grid grid-cols-2'}  rounded-lg overflow-hidden`}>
                                            {i.image?.map((pic: string) => (
                                                <div key={pic} className={`${i.image.length < 2 ? 'h-96' : 'h-56 '} h-56 w-full relative`}>
                                                    <Image src={pic} alt='img' fill={true} priority className='h-full w-full object-cover object-center ' />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="space-y-4">
                                            <Label text="how we can help"/>
                                            <p className="text-lg font-medium">{i.help?.sub}</p>
                                            <ul>
                                                {i.help?.list?.map((item: [], idx: number) => (
                                                    <li key={idx} className='flex gap-2 items-center text-4 font-bold'><FaCircleDot className="text-dirtyOrange text-md" />
                                                        {item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                 </MediaQuery>
                                <div className="space-y-6 bg-white py-12">
                                    <MediaQuery>
                                        <h1 className='text-5xl text-blue font-black py-2 font-mitr'>Our Approach</h1>
                                        <p className="text-lg font-medium"></p>
                                        <div className="flex flex-col gap-4 lg:grid grid-cols-3 lg:gap-6 my-12">
                                            {i.approach?.list?.map((item: any) => (
                                                <article key={item}
                                                    data-aos='fade-up'
                                                    data-aos-duration='400'
                                                    data-aos-offset='0'
                                                    data-aos-easing='ease-in-sine'
                                                    className="rounded-lg p-7 space-y-3  bg-panel1 first:bg-panel2 first:text-white even:text-blue last:text-white last:bg-panel2 ">
                                                    <h1 className='text-4xl font-bold'>
                                                        {item?.title}</h1>
                                                    <p className="font-medium">{item.description}</p>
                                                </article>
                                            ))}
                                        </div>
                                        <div className="bg-blue text-white w-full left-0 flex items-center justify-center p-12 rounded-3xl">
                                            <div className="flex flex-col items-center justify-center space-y-6 text-center">
                                                <p className="font-semibold text-lg">Lets Get Started</p>
                                                <h1 className="text-[clamp(2rem,3vw,7rem)] font-mitr font-black uppercase">
                                                    {i.banner}
                                                </h1>
                                                <Button title='get a quote' link='/contact' />
                                            </div>
                                        </div>
                                    </MediaQuery>
                                </div>
                            </div>
                        ))}
                    </div>
        </div>
    )
}