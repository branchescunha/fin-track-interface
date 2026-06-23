const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-4">
      <div className="container-app">
        <p className="text-sm text-gray-400 text-center">
          © {currentYear} Fin Track - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
