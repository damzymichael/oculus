function Header() {
  const navTexts = ['Home', 'About Us', 'Variation', 'Users', 'Comment'];
  return (
    <header className='header-oc'>
      <h1 className='font-heading font-[400] text-xl'>-OCULUS X100-</h1>
      <nav className='hidden sm:flex gap-3 font-body'>
        {navTexts.map((nav, i) => (
          <a key={i} href='#'>
            {nav}
          </a>
        ))}
      </nav>
      <div className='menu'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header