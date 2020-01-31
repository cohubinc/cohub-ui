import React from "react";
import { QueryResult } from "react-apollo";
import InfiniteLoader from "react-window-infinite-loader";
import { FixedSizeList } from "react-window";
import { useOnEndReached, IColor, Color } from "@cohubinc/cohub-utils";

interface IQueryResultList<IItem> {
  queryResult: QueryResult<any, any>;
  /** How do we access your data in the query response? */
  dataAccessorKey: string;
  tintColor?: IColor;
}
export default function QueryResultList<IItem>(props: IQueryResultList<IItem>) {
  const {
    queryResult: { fetchMore, variables, data, loading },
    tintColor = Color.green300,
    dataAccessorKey,
    ...rest
  } = props;

  const foo = data;

  const loadNextPage = useOnEndReached({
    key: dataAccessorKey,
    data,
    variables,
    fetchMore
  });

  const payload = data && data[dataAccessorKey];

  const items =
    (payload && payload.edges && payload.edges.map(({ node }: any) => node)) ||
    [];

  const { pageInfo = {}, total_count } = data[dataAccessorKey];

  const { hasNextPage } = pageInfo;

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = (index: number) => !hasNextPage || index < items.length;

  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  const loadMoreItems = () => {
    if (!loading) {
      loadNextPage();
    }
    return null;
  };

  return (
    <InfiniteLoader {...{ isItemLoaded, itemCount, loadMoreItems }}>
      {({ onItemsRendered, ref }) => (
        <FixedSizeList
          {...{ ref, itemCount }}
          onItemsRendered={onItemsRendered}
        >
          {({ index, style }) => {
            let content;
            if (!isItemLoaded(index)) {
              content = "Loading...";
            } else {
              content = items[index].name;
            }

            return <div style={style}>{content}</div>;
          }}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  );
}
