import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

const socials = [
  { icon: <FaFacebookF />, path: "https://www.facebook.com/emam.khalid.jion/" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/emam-khalid-jion/",
  },
  { icon: <FaGithub />, path: "https://github.com/emamjion" },
  { icon: <FaWhatsapp />, path: "https://wa.me/8801518468146" },
];

const Socials = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((icon, index) => (
        <Link href={icon.path}>
          <span>{icon.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
