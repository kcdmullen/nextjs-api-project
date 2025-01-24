import Form from 'next/form';

import styles from './dash.module.css';
import Select from '../ui/form-elements/select';
import Input from '../ui/form-elements/input';
import { getCategories, searchPOs } from '../lib/apiService';

async function searchPO(params: FormData) {
  'use server';
  searchPOs(params);
}

export default async function Page() {
  type ArraysMap = {
    [key: string]: string[];
  };

  const lists: ArraysMap = {
    departments: [],
    vendors: [],
  };

  const type = 'departments';
  const type2 = 'vendors';
  try {
    const res = await getCategories(type);
    const res2 = await getCategories(type2);
    res?.forEach((i) => {
      lists[type].push(i);
    });
    res2?.forEach((i) => {
      lists[type2].push(i);
    });
  } catch (err) {
    console.error(err);
  }

  return (
    <>
      <main className={styles.main}>
        <h1>Dashboard</h1>
        <Form action={searchPO}>
          <Select
            id='department'
            label='Department'
            options={lists.departments}
          />
          <Select id='vendor' label='Choose a Vendor' options={lists.vendors} />
          <Select
            id='fiscal_year'
            label='Fiscal Year'
            options={['2024-2025', '2023-2024', '2022-2023']}
          />
          <Input id='pricefrom' label='Price From' type='number' />
          <Input id='priceto' label='Price To' type='number' />
          <button>Search</button>
        </Form>
      </main>
    </>
  );
}
