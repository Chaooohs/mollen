import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetSearchGoodsQuery } from "../../redux/goodsAPI";
import debounce from "lodash.debounce";
import qs from "qs";

import Search from "/public/images/svg/search.svg?react";
import styles from "./SearchPage.module.scss";
import { setSearch, setPage, setFilters } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumbs, CloseBtn, PaginationNav } from "../../components";

export const SearchPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef();

  const firstRequest = useRef(false);
  const [skip, setSkip] = useState(true);
  const [goods, setGoods] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const { search, page } = useSelector(state => state.filters);
  const { data: searchGoods } = useGetSearchGoodsQuery(
    { search, page, },
    { skip: search !== "" ? skip : true, }
  );

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      setSearchValue(params.search)
      dispatch(setFilters(params));
      firstRequest.current = true;
    }
  }, []);

  useEffect(() => {
    if (search !== "") {
      const queryString = qs.stringify({
        search,
        page,
      });
      navigate(`/products?${queryString}`);
      setGoods(searchGoods);
    }
  }, [search, searchGoods, page]);

  useEffect(() => {
    if (firstRequest.current) {
      setSkip(false);
    }
    firstRequest.current = true;
  }, [search, page]);

  const searchValueByTimer = useCallback(
    debounce((value) => {
      dispatch(setSearch(value.toLowerCase()));
      dispatch(setPage('1'))
    }, 1000),
    []
  );

  const regSearch = (value) => {
    let rgx = /^[a-zа-я]*$/gi;
    return rgx.test(value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (regSearch(value)) {
      searchValueByTimer(value);
    }
  };

  const handleClickRemove = () => {
    dispatch(setSearch(""));
    setSearchValue("");
    setGoods([]);
    inputRef.current.focus();
    navigate("/products");
  };

  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <div className={styles.icon}>
          <Search fill="#1E1E1E" />
        </div>
        <div className={styles.search}>
          <input
            ref={inputRef}
            name="search"
            placeholder="назв"
            value={searchValue}
            className={styles.input}
            onChange={handleChange}
          />
        </div>
        {searchValue && (
          <CloseBtn onClick={handleClickRemove} />
        )}
      </div>
      <header className={styles.header}>
        <Breadcrumbs current={"пошук"} />
        <h1 className="txt-lg mg-0">Результати пошуку</h1>
        <p className={`txt-md ${styles.request}`}>
          за запитом
          <span className={styles.request}> {search} </span>
          знайдено
          <span className={styles.request}> {goods?.length} </span>
          товарiв
        </p>
      </header>
      <div className={styles.layout}>
        {goods?.map((el) => {
          return (
            <Link to={`/${el.id}`} key={el.id}>
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src={el.preview[0]} />
                </div>
                <h2 className={styles.title}>{el.title}</h2>
              </div>
            </Link>
          );
        })}
      </div>
      <PaginationNav />
    </main>
  );
};
