enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

const englishLoadingState = {
  [LoadingState.beforeLoad]: "Okay",
};

console.log(isLoading(LoadingState.beforeLoad));
