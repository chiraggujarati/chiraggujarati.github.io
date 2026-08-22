export default (pageContext) => {
  const is404 = pageContext.is404 ?? pageContext.abortStatusCode === 404;
  return is404 ? 'Page not found - CG' : 'Error - CG';
};
