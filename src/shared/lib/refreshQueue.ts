let _refreshPromise: Promise<string> | null = null;
//and this

export const refreshQueue = {
  getOrRefresh(doRefresh: () => Promise<string>): Promise<string> {
    if (_refreshPromise) return _refreshPromise;

    _refreshPromise = (async () => {
      try {
        return await doRefresh();
      } finally {
        _refreshPromise = null;
      }
    })();

    return _refreshPromise;
  },

  clear(): void {
    _refreshPromise = null;
  },
};
