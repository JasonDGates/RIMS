const sessionOptions = {
  secret: 'jason the dev',
  saveUnitialized: false,
  resave: false,
  cookie: {
    maxAge: 60000 * 60,
  },
};

export default sessionOptions;
