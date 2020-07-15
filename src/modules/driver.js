import { REQUEST, SUCCESS, FAILURE } from "./Reduxer";

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

const dummy = [
  {
    id: "KOB209",
    name: "Jonathan Smith",
    phone: "082282817733",
    schedule: days,
    percentage: 63,
  },
  {
    id: "KOB208",
    name: "Robert Kiyosaki",
    phone: "082282811234",
    schedule: days.slice(2),
    percentage: 90,
  },
  {
    id: "KOB207",
    name: "Kawasaki Honda",
    phone: "082282812233",
    schedule: days,
    percentage: 100,
  },
  {
    id: "KOB206",
    name: "Andrew Honeybadger",
    phone: "082282811234",
    schedule: days,
    percentage: 0,
  },
  {
    id: "KOB205",
    name: "Faiz Azmi",
    phone: "082282811234",
    schedule: days,
    percentage: 30,
  }
];

export const initialState = {
  loading: false,
  data: {
    data: [],
    result: [],
  },
};

export function reducer(state, action) {
  const { type, data } = action;
  switch (type) {
    case REQUEST:
      return {
        loading: true,
        data: state.result,
      };
    case SUCCESS:
      return {
        loading: false,
        data: data,
      };
    case FAILURE:
      return {
        loading: false,
        data: data,
        error: true,
      };
    default:
      return state;
  }
}

export const fetchDriver = () => (dispatch) => {
  dispatch({
    type: SUCCESS,
    data: {
      data: dummy,
      result: dummy,
    },
  });
}

export const searchDriver = (searchValue) => (dispatch, state) => {
  const { data: { data } } = state;
  const param = searchValue.toLowerCase();
  const result = data.filter(({ name }) => name.toLowerCase().includes(param));
  dispatch({
    type: SUCCESS,
    data: {
      data: data,
      result: result,
    },
  });
}
