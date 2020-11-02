import { Link } from 'gatsby';
import React, { useMemo } from 'react';

interface PaginationProps {
  baseUrl: string;
  itemCount: number;
  itemPerPage: number;
  page: number;
}

const sidesNumMd = 2;
const sidesNumSm = 1;

const Pagination: React.FC<PaginationProps> = ({
  baseUrl,
  itemCount,
  itemPerPage,
  page,
}) => {
  const pageCount = useMemo(
    () => Math.floor((itemCount - 1) / itemPerPage) + 1,
    [itemCount, itemPerPage],
  );
  const trimmedbaseUrl = useMemo(() => baseUrl.replace(new RegExp('/$'), ''), [
    baseUrl,
  ]);
  const ellipsisLeftMd = useMemo(() => {
    if (pageCount <= sidesNumMd * 2) {
      return -1;
    }
    if (page <= sidesNumMd + 1) {
      return -1;
    }
    return sidesNumMd + 1;
  }, [page, pageCount]);
  const ellipsisRightMd = useMemo(() => {
    if (pageCount <= sidesNumMd * 2) {
      return -1;
    }
    if (page >= pageCount - sidesNumMd) {
      return -1;
    }
    return pageCount - sidesNumMd;
  }, [page, pageCount]);
  const ellipsisLeftSm = useMemo(() => {
    if (pageCount <= sidesNumSm * 2) {
      return -1;
    }
    if (page <= sidesNumSm + 1) {
      return -1;
    }
    return sidesNumSm + 1;
  }, [page, pageCount]);
  const ellipsisRightSm = useMemo(() => {
    if (pageCount <= sidesNumSm * 2) {
      return -1;
    }
    if (page >= pageCount - sidesNumSm) {
      return -1;
    }
    return pageCount - sidesNumSm;
  }, [page, pageCount]);

  return (
    <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        {page - 1 >= 1 && (
          <Link
            to={
              page - 1 <= 1
                ? `${trimmedbaseUrl}/`
                : `${trimmedbaseUrl}/${page - 1}`
            }
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          >
            前へ
          </Link>
        )}
        {page + 1 <= pageCount && (
          <Link
            to={`${trimmedbaseUrl}/${page + 1}`}
            className="inline-flex items-center ml-auto px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          >
            次へ
          </Link>
        )}
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm leading-5 text-gray-700">
            <span className="font-medium">{itemCount}</span>件中
            <span className="font-medium">{itemPerPage * (page - 1) + 1}</span>
            件から
            <span className="font-medium">
              {Math.min(itemCount, itemPerPage * page)}
            </span>
            件を表示中
          </p>
        </div>
        <div>
          <nav className="z-0 inline-flex shadow-sm">
            {page - 1 >= 1 && (
              <Link
                to={
                  page - 1 <= 1
                    ? `${trimmedbaseUrl}/`
                    : `${trimmedbaseUrl}/${page - 1}`
                }
                className="inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                aria-label="Previous"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            )}
            {[...Array(pageCount)].map((_, i) => {
              const p = i + 1;

              if (p === page) {
                return (
                  <span
                    className="-ml-px inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-200 cursor-not-allowed"
                    key={i}
                  >
                    {p}
                  </span>
                );
              }

              if (p === ellipsisLeftMd || p === ellipsisRightMd) {
                return (
                  <span
                    className="hidden md:inline-flex -ml-px items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700"
                    key={i}
                  >
                    ...
                  </span>
                );
              }

              return (
                <React.Fragment key={i}>
                  {(p === ellipsisLeftSm || p === ellipsisRightSm) && (
                    <span className="md:hidden -ml-px inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700">
                      ...
                    </span>
                  )}
                  {((pageCount >= 3 && p === 2) ||
                    (pageCount >= sidesNumMd * 2 &&
                      p === pageCount - sidesNumMd + 1)) && (
                    <Link
                      to={`${trimmedbaseUrl}/${p}`}
                      className="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                    >
                      {p}
                    </Link>
                  )}
                  {(p < 2 || p > pageCount - sidesNumMd + 1) && (
                    <Link
                      to={
                        p === 1
                          ? `${trimmedbaseUrl}/`
                          : `${trimmedbaseUrl}/${p}`
                      }
                      className="-ml-px inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                    >
                      {p}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
            {page + 1 <= pageCount && (
              <Link
                to={`${trimmedbaseUrl}/${page + 1}`}
                className="-ml-px inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                aria-label="Next"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
