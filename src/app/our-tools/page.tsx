"use client";
import TechStack from "@/components/TechStack";
import MediaQuery from "@/components/utils/MediaQuery";
import { ThemeBackground } from "@/components/utils/ThemeBackground";
import { motion } from "motion/react";
import React from "react";

const page = () => {
   const Heading = ({ text }: { text: string }) => {
      return <h1 className="text-3xl font-bold">{text}</h1>;
   };

   const SubHeading = ({ text }: { text: string }) => {
      return <h1 className="text-2xl font-bold">{text}</h1>;
   };

   return (
      <div className="bg-themeColor text-lg text-white">
         <ThemeBackground heading="our tools">
            <p>
               At <strong>NextGenInterface</strong>, we utilize a powerful set of tools,
               technologies, and platforms to deliver high-quality web development and graphic
               design solutions.
            </p>
         </ThemeBackground>
         <MediaQuery>
            <div className="mb-12 sm:mb-24 w-full sm:w-2/3 mx-auto">
               <TechStack />
            </div>
            <div className="pb-20 ">
               <div className="mt-12 space-y-14">
                  <div className="">
                     <div className="space-y-3">
                        <Heading text="🚀  Web Development Stack" />
                        <p>
                           We specialize in creating fast, interactive, and high-performance web
                           applications using the latest technologies. We build modern,
                           high-performance, and scalable websites and applications using:
                        </p>
                     </div>
                     <div className="mt-6 lg:p-6 space-y-12">
                        <motion.div
                           initial={{ opacity: 0, scale: 0.8, y: 30 }}
                           whileInView={{ opacity: 1, scale: 1, y: 0 }}
                           transition={{
                              duration: 0.4,
                              scale: { type: "tween" },
                              ease: "easeIn",
                           }}
                           className="space-y-4 bg-secondary/10 p-7 rounded-3xl"
                        >
                           <SubHeading text="🖥️ Frontend Development" />
                           <p>
                              The frontend is the face of any digital product. We use cutting-edge
                              technologies to ensure smooth, user-friendly, and visually stunning
                              experiences.
                           </p>
                           <div>
                              <li>
                                 <strong>JavaScript & TypeScript</strong> – The backbone of modern
                                 web applications, ensuring scalability and maintainability.
                              </li>
                              <li>
                                 <strong>Next.js & React</strong> – For fast, SEO-friendly, and
                                 dynamic web apps. Next.js helps in building server-side rendered
                                 (SSR) and static websites, while React provides powerful UI
                                 components.
                              </li>
                              <li>
                                 <strong>Tailwind CSS & Shadcn</strong> – For sleek, responsive, and
                                 highly customizable designs with minimal CSS bloat.
                              </li>
                              <li>
                                 <strong>Framer Motion</strong> – For smooth, eye-catching
                                 animations and interactions that enhance the user experience.
                              </li>
                           </div>
                        </motion.div>

                        <motion.div
                           initial={{ opacity: 0, scale: 0.8, y: 30 }}
                           whileInView={{ opacity: 1, scale: 1, y: 0 }}
                           transition={{
                              duration: 0.4,
                              scale: { type: "tween" },
                              ease: "easeIn",
                           }}
                           className="space-y-4 bg-secondary/10 p-7 rounded-3xl"
                        >
                           <SubHeading text="🌐 Content Management Systems (CMS) & Website Builders 📦 Website Builders & Platforms" />
                           <p>
                              We understand that not every client needs a custom-coded website.
                              That’s why we also work with no-code and low-code platforms, perfect
                              for businesses that need quick, cost-effective, and scalable
                              solutions.
                           </p>
                           <div>
                              <li>
                                 <strong>WordPress</strong> – The most flexible CMS, great for
                                 blogs, business websites, and custom web solutions.
                              </li>
                              <li>
                                 <strong>Webflow</strong> – A powerful visual development tool for
                                 fully custom, interactive, and responsive websites.
                              </li>
                              <li>
                                 <strong>Cargo</strong> – Perfect for portfolio sites with a unique
                                 and creative aesthetic.
                              </li>
                              <li>
                                 <strong>Squarespace</strong> – A great all-in-one website builder
                                 for businesses and creatives.
                              </li>
                              <li>
                                 <strong>Wix</strong> – For businesses looking for easy
                                 drag-and-drop web solutions.
                              </li>
                           </div>
                        </motion.div>

                        <motion.div
                           initial={{ opacity: 0, scale: 0.8, y: 30 }}
                           whileInView={{ opacity: 1, scale: 1, y: 0 }}
                           transition={{
                              duration: 0.4,
                              scale: { type: "tween" },
                              ease: "easeIn",
                           }}
                           className="space-y-4 bg-secondary/10 p-7 rounded-3xl"
                        >
                           <SubHeading text="🛍️ eCommerce Platforms" />
                           <p>
                              We build seamless online stores that convert visitors into customers.
                           </p>
                           <div>
                              <li>
                                 <strong>Shopify</strong> – One of the best platforms for eCommerce
                                 businesses, offering flexibility and a powerful ecosystem.
                              </li>
                              <li>
                                 <strong>WooCommerce</strong> (WordPress) – A great option for
                                 businesses that need both content and commerce in one site.
                              </li>
                              <li>
                                 <strong>BigCommerce</strong> – For enterprise-level eCommerce
                                 stores with advanced customization.
                              </li>
                              <li>
                                 <strong>Square & Stripe </strong> – For payment processing and
                                 point-of-sale solutions.
                              </li>
                           </div>
                           <p>
                              We help businesses choose the best platform based on their goals,
                              ensuring performance, security, and long-term scalability.
                           </p>
                        </motion.div>

                        <motion.div
                           initial={{ opacity: 0, scale: 0.8, y: 30 }}
                           whileInView={{ opacity: 1, scale: 1, y: 0 }}
                           transition={{
                              duration: 0.4,
                              scale: { type: "tween" },
                              ease: "easeIn",
                           }}
                           className="space-y-4 bg-secondary/10 p-7 rounded-3xl"
                        >
                           <SubHeading text="⚙️ Backend Development" />
                           <p>
                              A robust backend ensures that applications run smoothly, handling
                              data, authentication, and business logic effectively.
                           </p>
                           <div className="ul">
                              <li>
                                 <strong>Node.js & Express.js</strong> – For building scalable APIs
                                 and handling server-side logic.
                              </li>
                              <li>
                                 <strong>GraphQL & REST APIs</strong> – For efficient data fetching,
                                 making apps faster and more responsive.
                              </li>
                              <li>
                                 <strong>8base</strong> – A serverless backend-as-a-service (BaaS)
                                 that helps speed up development while maintaining flexibility.
                              </li>
                           </div>
                        </motion.div>
                        <motion.div
                           initial={{ opacity: 0, scale: 0.8, y: 30 }}
                           whileInView={{ opacity: 1, scale: 1, y: 0 }}
                           transition={{
                              duration: 0.4,
                              scale: { type: "tween" },
                              ease: "easeIn",
                           }}
                           className="space-y-4 bg-secondary/10 p-7 rounded-3xl"
                        >
                           <SubHeading text="🗄️ Databases & Storage" />
                           <p>
                              Storing and managing data efficiently is crucial for the smooth
                              operation of web applications.
                           </p>
                           <div className="ul">
                              <li>
                                 <strong>PostgreSQL & MySQL </strong> – Relational databases for
                                 structured, high-performance data management.
                              </li>
                              <li>
                                 <strong>MongoDB</strong> – A NoSQL database that offers flexibility
                                 for dynamic data models.
                              </li>
                              <li>
                                 <strong>Redis </strong> – For caching and improving performance in
                                 high-traffic applications.
                              </li>
                              <li>
                                 <strong>Cloudinary</strong> – For optimized media storage, ensuring
                                 fast image and video delivery.
                              </li>
                           </div>
                        </motion.div>
                        <motion.div
                           initial={{ opacity: 0, scale: 0.8, y: 30 }}
                           whileInView={{ opacity: 1, scale: 1, y: 0 }}
                           transition={{
                              duration: 0.4,
                              scale: { type: "tween" },
                              ease: "easeIn",
                           }}
                           className="space-y-4 bg-secondary/10 p-7 rounded-3xl"
                        >
                           <SubHeading text="🌍 Hosting & Deployment" />
                           <p>
                              We use top-tier cloud services to ensure that websites and
                              applications run smoothly with minimal downtime.
                           </p>
                           <div className="ul">
                              <strong></strong>
                              <li>
                                 <strong>Vercel & Netlify</strong> – Ideal for deploying frontend
                                 applications with serverless functions and built-in CI/CD.
                              </li>
                              <li>
                                 <strong>AWS (Amazon Web Services)</strong> – For high-performance
                                 cloud hosting and scalable infrastructure.
                              </li>
                              <li>
                                 <strong>DigitalOcean & Linode</strong> – Cost-effective solutions
                                 for deploying web applications with full server control.
                              </li>
                              <li>
                                 <strong>Docker & Kubernetes </strong> – For containerization and
                                 scalable application deployment.
                              </li>
                           </div>
                        </motion.div>
                     </div>
                  </div>
                  <div className="">
                     <div className="space-y-3">
                        <Heading text="🔧 Development & Productivity Tools" />
                        <p>
                           Efficiency and collaboration are key to delivering successful projects.
                           We integrate various tools to streamline workflows.
                        </p>
                     </div>
                     <div className="mt-6 lg:p-6 space-y-12">
                        <motion.div
                           initial={{ opacity: 0, scale: 0.8, y: 30 }}
                           whileInView={{ opacity: 1, scale: 1, y: 0 }}
                           transition={{
                              duration: 0.4,
                              scale: { type: "tween" },
                              ease: "easeIn",
                           }}
                           className="space-y-4 bg-secondary/10 p-7 rounded-3xl"
                        >
                           <SubHeading text="📂 Code & Project Management" />
                           <div>
                              <li>
                                 <strong>Git & GitHub</strong> – For version control, collaboration,
                                 and managing codebases efficiently.
                              </li>
                              <li>
                                 <strong>Jira & Trello</strong> – For project management, task
                                 tracking, and agile development.
                              </li>
                              <li>
                                 <strong>Notion</strong> – For organizing ideas, documentation, and
                                 project planning.
                              </li>
                           </div>
                        </motion.div>
                        <motion.div
                           initial={{ opacity: 0, scale: 0.8, y: 30 }}
                           whileInView={{ opacity: 1, scale: 1, y: 0 }}
                           transition={{
                              duration: 0.4,
                              scale: { type: "tween" },
                              ease: "easeIn",
                           }}
                           className="space-y-4 bg-secondary/10 p-7 rounded-3xl"
                        >
                           <SubHeading text="💬 Communication & Collaboration" />
                           <div>
                              <li>
                                 <strong>Slack & Discord</strong> – For team communication and
                                 client interactions.
                              </li>
                              <li>
                                 {" "}
                                 <strong>Google Workspace (Docs, Sheets, Drive) </strong> – For
                                 document collaboration and business management.
                              </li>
                              <li>
                                 <strong>Zoom & Microsoft Teams </strong> – For virtual meetings and
                                 client consultations.
                              </li>
                           </div>
                        </motion.div>
                     </div>
                  </div>

                  {/* GRAPHICS */}
                  <div className="">
                     <div className="space-y-3">
                        <Heading text="🎨 Graphic Design & Branding Tools" />
                        <p>
                           Great design is at the core of a strong brand identity. We use
                           industry-standard tools to create professional, high-quality visuals.
                        </p>
                     </div>
                     <div className="mt-6 lg:p-6 space-y-12">
                        <motion.div
                           initial={{ opacity: 0, scale: 0.8, y: 30 }}
                           whileInView={{ opacity: 1, scale: 1, y: 0 }}
                           transition={{
                              duration: 0.4,
                              scale: { type: "tween" },
                              ease: "easeIn",
                           }}
                           className="space-y-4 bg-secondary/10 p-7 rounded-3xl"
                        >
                           <SubHeading text="🖌️ Design & Illustration" />
                           <div>
                              <li>
                                 <strong>Adobe Photoshop</strong> – For advanced image editing and
                                 digital artwork.
                              </li>
                              <li>
                                 <strong>Adobe Illustrator</strong> – Perfect for logos, branding,
                                 and vector graphics.
                              </li>
                              <li>
                                 <strong>Figma & Adobe XD</strong> – For UI/UX design, wireframing,
                                 and prototyping.
                              </li>
                              <li>
                                 <strong>Procreate</strong> – For digital illustrations, sketches,
                                 and artistic concepts.
                              </li>
                           </div>
                        </motion.div>
                        <motion.div
                           initial={{ opacity: 0, scale: 0.8, y: 30 }}
                           whileInView={{ opacity: 1, scale: 1, y: 0 }}
                           transition={{
                              duration: 0.4,
                              scale: { type: "tween" },
                              ease: "easeIn",
                           }}
                           className="space-y-4 bg-secondary/10 p-7 rounded-3xl"
                        >
                           <SubHeading text="📊 Branding & Marketing" />
                           <div>
                              <li>
                                 {" "}
                                 <strong>CorelDRAW</strong> – A powerful vector design tool.
                              </li>
                              <li>
                                 {" "}
                                 <strong>Canva</strong> – Ideal for creating quick, high-quality
                                 marketing materials.
                              </li>
                              <li>
                                 {" "}
                                 <strong>Sketch</strong> – A great alternative for UI design and
                                 wireframing.
                              </li>
                           </div>
                        </motion.div>
                     </div>
                  </div>

                  <div className="space-y-4 my-12">
                     <Heading text="🔥 Why These Tools?" />
                     <p>
                        Our technology and platform choices are based on efficiency, flexibility,
                        and future-proofing.
                     </p>
                     <p>
                        At <strong>NextGenInterface</strong>, we don’t just build websites and
                        designs—we create powerful digital experiences that help businesses thrive.
                        Whether you need a custom-coded web app, a Shopify store, a Webflow site, or
                        a complete brand identity, we have the tools and expertise to make it
                        happen.
                     </p>

                     <p>🚀 Let’s build something amazing together!</p>
                  </div>
               </div>
            </div>
         </MediaQuery>
      </div>
   );
};

export default page;
