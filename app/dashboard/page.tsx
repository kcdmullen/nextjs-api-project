import Form from 'next/form';

import styles from './dash.module.css';
import { Input, Select, Button } from '../ui/formElements';
import { getCategories, searchPOs } from '../lib/apiService';

let queryResults: object[];

async function searchPO(params: FormData) {
  'use server';
  if (params.get('department') === 'ALL DEPARTMENTS') {
    params.set('department', '');
  }
  if (params.get('vendor') === 'ALL VENDORS') {
    params.set('vendor', '');
  }
  try {
    queryResults = await searchPOs(params);
    console.log(queryResults);
  } catch (error) {
    console.error(error);
  }
}

function generateYearRanges(start: string, currentDate = new Date()) {
  const result = [''];
  const startYear = Number(start.split('-')[0]);

  const currentYear = currentDate.getFullYear();
  const isAfterJuly = currentDate.getMonth() >= 6; // July is month 6 (zero-based)
  const endYear = isAfterJuly ? currentYear + 1 : currentYear;

  for (let year = startYear; year < endYear; year++) {
    result.push(`${year}-${year + 1}`);
  }
  return result;
}

const start = '2010-2011';
const yearRanges = generateYearRanges(start);

export default async function Page() {
  type ArraysMap = {
    [key: string]: string[];
  };

  const lists: ArraysMap = {
    departments: ['ALL DEPARTMENTS'],
    vendors: ['ALL VENDORS'],
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
        <div className='container'>
          <h1>Purchase Orders</h1>

          <Form action={searchPO}>
            <div className='row'>
              <div className='col'>
                <Select
                  id='fiscal_year'
                  label='Fiscal Year'
                  options={yearRanges}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <Input id='datefrom' label='Date From' type='date' />
              </div>
              <div className='col'>
                <Input id='dateto' label='Date To' type='date' />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <Select
                  id='department'
                  label='Department'
                  options={lists.departments}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <Input id='pricefrom' label='Price From' type='number' />
              </div>
              <div className='col'>
                <Input id='priceto' label='Price To' type='number' />
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <Select
                  id='vendor'
                  label='Choose a Vendor'
                  options={lists.vendors}
                />
              </div>
            </div>
            <div className='row mt-3'>
              <div className='col'>
                <Button
                  label='Search'
                  type='submit'
                  buttonClass='btn-success'
                />
              </div>
            </div>
          </Form>
        </div>
      </main>
    </>
  );
}
