import React from "react";

export const Head = ({ text }: { text: string }) => {
   return <h1 className="text-2xl font-semibold mb-3">{text}</h1>;
};

export const Section = ({ heading, children }: { heading: string; children: React.ReactNode }) => {
   return (
      <div>
         <Head text={heading} />
         <p>{children}</p>
      </div>
   );
};
const page = () => {
   return (
      <div className="space-y-6 mx-4 md:mx-20 my-12">
         <h1 className="text-center text-2xl font-bold">Privacy policy</h1>
         <Section heading="Data Controller">
            <p>
               The data controller for the information you provide or that is collected by Nextgen,
               Ltd. pursuant to this Privacy Notice is: Nextgen, Ltd. London, United Kingdom.
            </p>
         </Section>
         <Section heading="Use of Information Collected by Us">
            <p>
               Nextgen, Ltd. may collect two types of information from users of our Sites: “personal
               information” (such as name, e-mail address, mailing address, phone number, date of
               birth, social media profile, location, etc.) and “aggregate information” (such as
               frequency of visits to any of the Sites, search terms entered, Site pages most
               frequently accessed, browser type, etc.). Nextgen, Ltd. uses collected personal
               information for its themeColor business purpose of providing marketing and
               advertising services, and all related purposes, including web design, branding, web
               development, web hosting, creating accounts and profiles, processing payment, dispute
               resolution, managing customer orders, and communication between users. We also use
               this information in an effort to improve your experience on the Sites and to
               communicate with you about information that you request, to help us target specific
               services or offers to you, to contact you for troubleshooting purposes or support, to
               enforce our Terms of Service or protect our Site(s), for administrative purposes, to
               help us develop and improve our Sites, or to tailor our Sites to your interests.
            </p>
         </Section>
         <Section heading="Collecting and Using Your Personal Information">
            <p>
               Nextgen, Ltd. collects personal information that is voluntarily provided when users
               sign up for Nextgen, Ltd. site or service, fill out a form, or enter a promotion.
               Specifically, when you sign up for our Platform through one of our Sites or interact
               with our widgets (including Nextgen Hosting), we ask you for personal information
               such as your name, address, social media connections, and email address. We may also
               request payment account information (such as PayPal or a credit card) which is
               encrypted and provided to third parties for the purpose of processing payment(s).
               <br />
               <br />
               In addition, Nextgen, Ltd. collects supplemental data from public sites, IP
               addresses, and connected social media channels (via an API for which you can select
               the types of information Nextgen, Ltd. may access), to create a more robust user
               profile and increase the odds that a marketer will locate your profile for content
               opportunities.
               <br />
               <br />
               As an individual agreeing to the Terms of Service and Privacy Notice when creating an
               account on our Site(s), you express consent to the access and collection of data and
               content. You have the option to change these choices made at registration, at any
               time.
               <br />
               <br />
               As a Business or Individual agreeing to the Terms of Service and Privacy Notice when
               creating an account on our Site(s), upon registration you will be asked to provide an
               email address, establish a password, and provide payment account information. This
               data is required in order to make our services available to you.
               <br />
               <br />
               As a user of the Site(s), we may communicate with you using the email address you
               have provided, for purposes such as providing you with Opportunities, delivering
               support to enhance your user experience, communicating news about Nextgen, Ltd. or
               features and functionalities of the Platform, or presenting you with surveys or
               commercial offers you may be interested in. You may control your email preferences
               within your account on the Platform.
               <br />
               <br />
               When you access our Hosting site, we may collect information including your name,
               company name, email address, mailing address, and other information you provide when
               engaging with our services. These interactions are subject to our Privacy Notice. By
               carrying on a conversation with Ticketing system, you consent to receiving
               communications from us and to the processing of your conversation via Hubspot in
               accordance with any terms of use or privacy notice that may apply in connection with
               that platform.
            </p>
         </Section>
         <Section heading="Collecting and Using Your Aggregate Information">
            <p>
               Nextgen, Ltd. also aggregates information that, by itself, does not identify who you
               are, such as frequency of visits to the Sites, search terms entered, browser type,
               etc. Nextgen, Ltd. uses the aggregated information to provide its services and
               remuneration, as well as to determine the use of our Sites and to monitor, audit and
               analyze information pertaining to our business metrics.
            </p>
         </Section>
         <Section heading="Sharing, Selling and Trading of Your Personal Information Collected Online with Third Parties">
            <p>
               Nextgen, Ltd. does not share, rent, sell, or disclose personal information to third
               parties, except as described in this Privacy Notice. Nextgen, Ltd. shares personal
               information with our affiliated entities and subsidiaries, and with third-party
               service providers such as payment processing companies, web hosting companies,
               payment recovery services, data providers, data analytics providers, and
               background-checking services. These Marketers/Partners and third-party service
               providers are not authorized to retain, share, store, or use your personal
               information for any purposes other than the purpose for which it was transferred
               (such as to provide the services for which they have been hired to provide, to offer
               you opportunities within Nextgen, Ltd., or to provide Opportunities outside of the
               Website), without your express consent. In addition, in order to protect against
               potential fraud, we may verify with third parties the personal information you
               provide when you sign up for an account or when you participate in certain features
               or programs offered through our Sites. In the course of such verification, we may
               receive personal information about you, which will be shared with such third parties.
               We do not sell, trade, or otherwise share your personal information with unrelated
               third parties for their own marketing purposes.
            </p>
            <br />
            <br />
            <p>
               In the following circumstances, Nextgen, Ltd. may elect to share or transfer your
               personal information to unrelated third parties: (i) to comply with a legal
               requirement, regulation, judicial proceeding, court order, or legal process served on
               Nextgen, Ltd., (ii) to investigate a possible crime, such as fraud or identity theft;
               (iii) in connection with the sale, purchase, merger, reorganization, liquidation or
               dissolution of Nextgen, Ltd.; (iv) when we believe it is necessary to protect the
               rights, property, or safety of Nextgen, Ltd. or other persons, (v) to enforce your
               agreements with us, including the Terms of Service or Privacy Notice, or to respond
               to claims that your use of the Services violates any third-party rights or applicable
               law; or (vi) as otherwise required or permitted by law.
            </p>
            <br />
            <br />
            <p>
               It should be noted that on some portions of the Sites, users can choose to have their
               personal information displayed. If users choose to have their personal information
               displayed on the Site(s), they will be given a forewarning that the action they are
               about to take will make their personal information publicly available on the Site(s).
            </p>
         </Section>
         <Section heading="Sharing, Selling and Trading Aggregate Information Collected Online with Third Parties">
            <p>
               We may share, sell or trade with third parties aggregated, non-personal information,
               such as the number of users who searched for a particular term, for example, or how
               many users purchased on a particular product/service. As stated earlier, such
               information does not identify you individually.
            </p>
         </Section>
         <Section heading="Affiliate System">
            <p>
               From time to time, we may request information from users of our Sites in connection
               with our affiliate system. Participation in these affiliate systems is completely
               voluntary and the user, therefore, has a choice whether or not to disclose this
               information. Information requested may include contact information and supplementary
               information on your interests, opinions, and preferences. We will use the contact
               information to notify your affiliate commissions.
            </p>
         </Section>
         <Section heading="Cookies">
            <p>
               Cookies are pieces of information that websites transfer to your computer’s web
               browser for storage on your computer’s hard drive. When you visit the Sites, we may
               place one or more cookies on your computer to uniquely identify your browser. We use
               cookies to improve the quality of our service by storing user preferences and
               tracking user trends, such as how people blog. We store minimal personal information
               in cookies and protect this information. We do not store complete records or credit
               card numbers in cookies. You may choose to set your computer to not accept cookies,
               but some features and services on the Sites may not function properly if your cookies
               are disabled. Please refer to our Cookie Policy to learn more about how we use these
               and your choices in relation to these tracking technologies.
            </p>
         </Section>
         <Section heading="Notice to UK Residents">
            <p>
               We collect, use and disclose your personal information with your consent, which may
               be expressed or implied. You may withdraw your consent to the use and disclosure of
               your personal information by us or by third parties for marketing purposes at any
               time by contacting us as specified below under “Contact Us.” If you would like to
               access, update, or ask us to delete your preferences or the personal information we
               have collected about you, please get in touch with us, and we will respond to your
               request within 30 days.
            </p>
         </Section>
         <Section heading="Your Rights">
            <p>
               Depending on the law that applies, you may have a right to access and rectify or
               erase your personal data or receive a copy of your personal data, restrict or object
               to the active processing of your data, ask us to share (port) your personal
               information to another entity, withdraw any consent you provided to us to process
               your data, a right to lodge a complaint with statutory authority and such other
               rights as may be relevant under applicable laws. To exercise these rights, you can
               write to us at nextgeninterface@gmail.com We will respond to your request in
               accordance with applicable law. You may opt out of direct marketing communications or
               the profiling we carry out for marketing purposes by writing to us at
               nextgeninterface@gmail.com Do note that if you do not allow us to collect or process
               the required personal information or withdraw the consent to process the same for the
               required purposes, you may not be able to access or use the services for which your
               information was sought.
            </p>
         </Section>
         <Section heading="Do Not Track Policy">
            <p>
               Our Sites are not designed to respond to “do not track” signals received from
               browsers.
            </p>
         </Section>
         <Section heading="Use of Pixel Tags/Clear GIFs/Web Beacons">
            <p>
               A pixel tag, also known as a clear GIF or web beacon, is an invisible tag placed on
               certain pages of our Sites but not on your computer. When you access these pages,
               pixel tags generate a generic notice of that visit. They usually work in conjunction
               with cookies, registering when a particular computer visits a particular page. If you
               turn off cookies, the pixel tag will simply detect an anonymous website visit.
            </p>
         </Section>
         <Section heading="Retaining and Securing Your Information">
            <p>
               We take reasonable and appropriate security measures designed to protect against
               unauthorized access to or unauthorized alteration, disclosure, or destruction of
               data. These include internal reviews of our data collection, storage, and processing
               practices, and introducing security measures, including physical security measures,
               to guard against unauthorized access to systems where we store personal data.
            </p>
            <br />
            <br />
            We restrict access to personal information to Nextgen, Ltd. employees, service
            providers, and agents who need to know that information in order to operate, develop or
            improve our services. These individuals are bound by confidentiality obligations.
            <br />
            <br />
            However, given the inherent risks, no method of transmission over the Internet, or
            method of electronic storage, is 100% secure. Therefore, while we strive to protect your
            personal information, we cannot guarantee its absolute security, and any information you
            transmit to us is done at your own risk. IN NO EVENT WILL Nextgen, LTD OR ITS
            SUBSIDIARIES, AFFILIATES, OR ANY PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING
            THE SITES BE LIABLE IN ANY MANNER WHATSOEVER FOR ANY INCIDENTAL, CONSEQUENTIAL,
            INDIRECT, SPECIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR ACCESS, USE OR INABILITY TO
            USE THE SITES, OR IN CONNECTION WITH ANY FAILURE OF PERFORMANCE, ERROR, OMISSION,
            INTERRUPTION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER VIRUS OR LINE OR
            SYSTEM FAILURE (INCLUDING LOSS PROFITS, LOSS OF BUSINESS OR DATA, BUSINESS INTERRUPTION,
            AND DAMAGES THAT RESULT FROM INACCURACY OF THE INFORMATION OR INCONVENIENCE, DELAY, OR
            LOSS OF THE USE OF THE SITES). THE FOREGOING LIMITATIONS APPLY WHETHER THE ALLEGED
            LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE STRICT LIABILITY, OR ANY OTHER BASIS,
            EVEN IF Nextgen LTD. OR ITS AFFILIATES OR ANY OTHER PARTY HAS BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES.
            <br />
            <br />
            We will retain your personal information for the period necessary to fulfill the
            purposes outlined in this Privacy Notice or until you request otherwise unless a longer
            retention period is required for record-keeping, reporting, or other legitimate reasons
            like enforcement of legal rights, fraud prevention, or as otherwise permitted by law.
            Residual anonymous information and aggregate information, neither of which identifies
            you (directly or indirectly), may be stored indefinitely.
            <br />
            <br />
            The criteria used to determine our retention periods include:
            <ul>
               <li>
                  The length of time we have an ongoing relationship with you and provide services
                  to you (for example, for as long as you have an account with us or keep using the
                  Sites)
               </li>
               <li>
                  Whether there is a legal obligation to which we are subject (for example, certain
                  laws require us to keep records of your transactions for a certain period of time
                  before we can delete them)
               </li>
               <li>
                  Whether retention is advisable considering our legal position (such as, for
                  statutes of limitations, litigation or regulatory investigations)
               </li>
            </ul>
         </Section>
         <Section heading="Integrity of Your Data">
            <p>
               Nextgen, Ltd. processes personal information only for the purposes for which it was
               collected and in accordance with this Policy. We review our data collection, storage,
               and processing practices to ensure that we only collect, store, and process the
               personal information needed to provide or improve our services. We take reasonable
               steps to ensure that the personal information we process is accurate, complete, and
               current, but we depend on our users to update or correct their personal information
               whenever necessary.
            </p>
         </Section>
         <Section heading="Copyright Infringement/DMCA Notice">
            <p>
               If you are a copyright owner or an agent thereof and believe that any submission on
               the Sites’ message boards or any other content on the Sites infringes upon your
               copyrights, you may submit a notification pursuant to Title 17, United States Code,
               Section 512(c)(3), the Digital Millennium Copyright Act (“DMCA”) by providing our
               designated copyright agent with the following information in writing:
            </p>
            <br />
            <br />
            (i) A physical or electronic signature of a person authorized to act on behalf of the
            owner of an exclusive right that is allegedly infringed;
            <br />
            <br />
            (ii) Identification of the copyrighted work claimed to have been infringed, or, if
            multiple copyrighted works at a single online site are covered by a single notification,
            a representative list of such works at that site;
            <br />
            <br />
            (iii) Identification of the material that is claimed to be infringing or to be the
            subject of infringing activity and that is to be removed or access to which is to be
            disabled and information reasonably sufficient to permit the service provider to locate
            the material;
            <br />
            <br />
            (iv) Information reasonably sufficient to permit the service provider to contact you,
            such as an address, telephone number, and, if available, an electronic mail;
            <br />
            <br />
            (v) A statement that you have a good faith belief that use of the material in the manner
            complained of is not authorized by the copyright owner, its agent, or the law; and
            <br />
            <br />
            (vi) A statement that the information in the notification is accurate, and under penalty
            of perjury, that you are authorized to act on behalf of the owner of an exclusive right
            that is allegedly infringed.
            <br />
            <br />
            Nextgen, Ltd. ‘s designated agent to receive notifications of claimed infringement is
            nextgeninterface@gmail.com DMCA notices should go to the designated copyright agent; any
            other comments, requests, or other communications should be directed to
            nextgeninterface@gmail.com You acknowledge that if you fail to comply with all of the
            requirements of this Section, your DMCA notice may not be valid.
         </Section>
         <Section heading="Children and Privacy">
            <p>
               Our Sites are not directed to children and we will not request personally
               identifiable information from anyone who we know to be under the age of 18 unless we
               have obtained verifiable parental consent from a parent or legal guardian. If we
               become aware that a user under the age of 13 has registered with any of our Sites,
               provided personally identifiable information, and Nextgen, Ltd. has not obtained
               prior verifiable consent from a parent or legal guardian, we will immediately remove
               the user’s personally identifiable information from our files.
            </p>
         </Section>
         <Section heading="Links to Other Websites">
            <p>
               The Sites may contain links to websites operated by other people or companies. Those
               websites may have their own privacy policy (which you are encouraged to review) or no
               privacy policy at all. Nextgen, Ltd. does not have any control over nor
               responsibility for those websites or their content or policies, and we provide the
               links solely for the convenience of our visitors.
            </p>
         </Section>
         <Section heading="Business Transfers">
            <p>
               In the event that Nextgen, Ltd. sells substantially all of its assets, or one of
               Nextgen, Ltd.’s business units are acquired, personally identifiable information of
               visitors to and users of the Sites, and other aggregated information, will likely be
               one of the transferred assets.
            </p>
         </Section>
         <Section heading="Changes to this Policy">
            <p>
               The “Updated” date at the top of this page indicates when this Privacy Notice was
               last revised. We will notify you before any material change takes effect so that you
               have time to review the changes. Any change becomes effective when we post the
               revised Privacy Notice. Your use of the Sites following these changes means that you
               accept the revised Privacy Notice.
            </p>
         </Section>
         <Section heading="Corrections/Information Removal/Opt-Out">
            <p>
               If your name, e-mail or postal address, telephone number or other personal
               information changes, you may update, correct or omit the relevant information by
               contacting us at Nextgen, Ltd. Customer Service, www.nextgeninterface.com and
               submitting a ticket under the “Contact” or “Tickets” option. If you prefer not to
               receive newsletters or other marketing e-mails from Nextgen, Ltd., please let us know
               by clicking on the unsubscribe link within any newsletter or marketing e-mail you
               receive. If you prefer not to receive marketing mail via postal carrier, please let
               us know by sending a request to nextgeninterface@gmail.com Please be sure to include
               in any e-mail or postal mail, your full name, e-mail address, postal address, and any
               message. Please note that such requests may take up to ten (10) days to become
               effective.
            </p>
         </Section>
         <Section heading="Your Choices about Your Personal Information">
            <p>
               If you would like to review, correct, update, suppress, restrict or delete personal
               information that you have previously provided to us, or if you would like to receive
               an electronic copy of your personal information for purposes of transmitting it to
               another company (if this right to data portability is provided to you by law), you
               can contact us at nextgeninterface@gmail.com
            </p>
            <br />
            <br />
            <p>
               In your request, please make clear what personal information you would like to have
               changed, whether you would like to have your personal information suppressed from our
               database, or other limitations you would like to put on our use of your personal
               information. For your protection, we only fulfill requests for the personal
               information associated with the particular email address that you use to send us your
               request, and we may need to verify your identity before fulfilling your request. We
               will try to comply with your request as soon as reasonably practicable.
            </p>
            <br />
            <br />
            Please note that we often need to retain certain data for recordkeeping purposes and/or
            to complete any transaction that you began prior to requesting a change or deletion
            (e.g., when you make a purchase or enter a promotion, you may not be able to change or
            delete the personal information provided until after the completion of such purchase or
            promotion). Our databases and other records may have residual data which will not be
            removed. In addition, we also may not allow you to review certain data for legal,
            security or other reasons.
            <br />
            <br />
            If at any time you believe that the Sites have not adhered to this Privacy Notice,
            please let us know. We will use good faith efforts to determine and correct the problem.
            <br />
            <br />
            If you are an EEA resident, you have the right to lodge a complaint with a data
            protection authority about how we process your personal information.
         </Section>
         <Section heading="Cookies">
            <p>
               Cookies are pieces of information which websites transfer to your computer’s web
               browser for storage on your computer’s hard drive. When you visit the Sites, we may
               place one or more cookies on your computer to uniquely identify your browser. We use
               cookies to improve the quality of our service by storing user preferences and
               tracking user trends, such as how people blog. We store minimal personal information
               in cookies and protect this information. We do not store complete records or credit
               card numbers in cookies. You may choose to set your computer to not accept cookies,
               but some features and services on the Sites may not function properly if your cookies
               are disabled. To learn more about how we use these and your choices in relation to
               these tracking technologies, please refer to our Cookie Policy.
            </p>
         </Section>
         <Section heading="Contact Us">
            <p>
               If you have any questions or concerns about this Notice, please feel free to contact
               us any time through the Sites or at Privacy Notice Concerns Coordinator, c/o Nextgen,
               Ltd., nextgeninterface@gmail.com
            </p>
         </Section>
      </div>
   );
};

export default page;
