const useAppLogger = () => {
  const appLogger = ({ msg, domain }: { msg: string; domain: string }) =>
    console.info(`[ ${domain.toUpperCase()} ] ===>`, msg);

  return { appLogger };
};

export default useAppLogger;
