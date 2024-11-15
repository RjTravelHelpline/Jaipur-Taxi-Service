export const metadata = {
  title: 'About Us - Your Company',
  description: 'Learn more about our company, mission, and values.',
};

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
