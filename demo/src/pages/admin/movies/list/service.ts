import request from '@/utils/request';
import { TableListParams } from './data.d';
import { stringify } from 'qs';

export async function queryMovies(params: TableListParams) {
  const query = stringify(params);
  return request(`/movies?${query}`);
}

export async function removeMovie(params: TableListParams) {
  return request('/movies/remove', {
    method: 'DELETE',
    data: {
      ...params,
    },
  });
}

export async function addMovie(params: TableListParams) {
  return request('/movies', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function updateMovie(params: TableListParams) {
  return request(`/movies/${params.movie.id}`, {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}
