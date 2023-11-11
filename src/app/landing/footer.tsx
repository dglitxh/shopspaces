import React from 'react';
import { SITENAME } from '@/utils/data';

interface FooterLink {
  title: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const columns: FooterColumn[] = [
  {
    title: SITENAME,
    links: [
      {
        title: 'Twitter',
        href: '#!',
      },
      {
        title: 'Instagram',
        href: '#!',
      },
    ],
  },
  {
    title: 'Customer Service',
    links: [
      {
        title: 'Contact Us',
        href: '#',
      },
      {
        title: 'FAQ',
        href: '#',
      },
      {
        title: 'Returns & Exchanges',
        href: '#',
      },
      {
        title: 'Shipping Information',
        href: '#',
      },
    ],
  },
  {
    title: 'Company Information',
    links: [
      {
        title: 'About Us',
        href: '#',
      },
      {
        title: 'Careers',
        href: '#',
      },
      {
        title: 'Privacy Policy',
        href: '#',
      },
      {
        title: 'Terms of Service',
        href: '#',
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <div className=" rounded-md shadow-md">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {columns.map((column, index) => (
              <div key={index} className="border-t-2 pt-8 mt-8 sm:mt-0">
                {index === 0 && (
                  <div>
                    <div className="flex items-center mb-4">
                      <img
                        src="/favicon.ico"
                        alt="Logo"
                        className="w-10 h-10 mr-2"
                      />
                      <h2 className="text-xl font-bold logo">{column.title}</h2>
                    </div>
                    <p className=" mb-4">
                      Start a business and design the life you want - all in one
                      place.
                    </p>
                    <p className=" mb-4">
                      &copy; 2023-2030 {SITENAME}
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className=" hover:text-blue-500">
                        Sign Up
                      </a>
                      <span className=""> | </span>
                      <a href="#" className=" hover:text-blue-500">
                        Login
                      </a>
                    </div>
                  </div>
                )}

                {index !== 0 && (
                  <>
                    <h2 className="text-xl font-bold mb-4">{column.title}</h2>
                    {column.links && (
                      <ul className="list-none p-0">
                        {column.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.href}
                              className=" hover:text-blue-500"
                            >
                              {link.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="border-t-2 pt-8 mt-8 sm:mt-0">
            <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
            <div className="flex space-x-4 mb-4">
              <a className="btn m-1" href="#!" role="button">
                <i className="fa fa-instagram text-blue-400">instagram</i>
              </a>
              <a className="btn m-1" href="#!" role="button">
                <i className="fa fa-twitter-square text-blue-400">twitter</i>
              </a>
            </div>
            <p className="mb-4">
              Subscribe to our newsletter for updates and promotions.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
