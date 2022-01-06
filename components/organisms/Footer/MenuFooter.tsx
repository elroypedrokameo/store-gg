import Link from 'next/link';

interface MenuFooterProps {
  title: string;
}
export default function MenuFooter(Props: MenuFooterProps) {
  const { title } = Props;
  return (
    <ul className="list-unstyled">
      <li className="mb-6">
        <Link href="/#">
          <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
        </Link>
      </li>
    </ul>
  );
}
