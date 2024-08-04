import { socialIcons, infoLinks, categoryLinks, contactInfo } from "./data";
import { InfoLinksProps, ContactInfoProps } from "./types";

const SocialIcons: React.FC = () => (
  <div className="flex items-center">
    {socialIcons.map((icon, index) => (
      <img key={index} src={icon.src} alt={icon.alt} className={icon.className || ''} />
    ))}
  </div>
);

const InfoLinks: React.FC<InfoLinksProps> = ({ title, links }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-lg">{title}</h1>
    {links.map((link, index) => (
      <p key={index} className="py-1.5">{link}</p>
    ))}
  </div>
);

const ContactInfo: React.FC<ContactInfoProps> = ({ title, info }) => (
  <div className="flex flex-col h-[200px]">
    <h1 className="font-bold text-lg">{title}</h1>
    {info.map((item, index) => (
      <p key={index} className="py-1.5 w-[280px]">{item}</p>
    ))}
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white h-[400px]">
      <div className="px-28 relative pt-10">
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex items-center">
                <img src="icon_drip_store_white.svg" alt="Digital Store Logo" />
              </div>
              <div className="flex items-center pl-2">
                <h1 className="text-4xl font-bold">Digital Store</h1>
              </div>
            </div>
            <div className="py-8 w-[310px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </div>
            <SocialIcons />
          </div>
          <div className="flex flex-col pl-[500px]">
            <InfoLinks title="Informação" links={infoLinks} />
          </div>
          <div className="flex flex-col pl-[80px]">
            <InfoLinks title="Categorias" links={categoryLinks} />
          </div>
          <div className="flex flex-col pl-[80px]">
            <ContactInfo title="Contato" info={contactInfo} />
          </div>
        </div>
        <span className="absolute mt-10 h-0.5 bg-white w-10/12"></span>
        <div className="flex justify-center">
          <p className="pt-12">&#64; 2022 Digital College</p>
        </div>
      </div>
    </footer>
  );
}
