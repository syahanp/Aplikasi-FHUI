import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form, FieldArray } from 'formik';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../../FontAwesome';

import SingleForm from '../SingleForm';
import Input from '../Input';
import Textarea from '../Textarea';
import {Button} from '../../buttons'
import Keterangan from '../Keterangan'

class FormGBLK extends Component {
    render() { 
        
        const addBtn = <FontAwesomeIcon icon={['fas', 'plus-circle']}/>
        
        return (
            <Div>
                <h2 className='font-priamry'>Form BKD Unsur Guru Besar dan Lektor Kepala</h2>
                <br/>

                <Formik
                    initialValues={{
                        guruBesar : {
                            karya_Internasional : [
                                {
                                    id : 1,
                                    tahun : '',
                                    karya : ''
                                }
                            ],
                            karya_Internasional_dll : [
                                {
                                    id : 1,
                                    tahun : '',
                                    karya : ''
                                }
                            ],
                        },
                        lektorKepala : {
                            karya_Internasional : [
                                {
                                    id : 1,
                                    tahun : '',
                                    karya : ''
                                }
                            ],
                            karya_Internasional_dll : [
                                {
                                    id : 1,
                                    tahun : '',
                                    karya : ''
                                }
                            ],
                        }
                    }}
                    onSubmit={values => {
                        console.log(values)
                    }}
                    render={({values, handleChange}) => (
                        <Form>
                            
                            <SingleForm title="Guru Besar/Profesor">
                                
                                <FieldArray name='guruBesar.karya_Internasional'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Menduduki jabatan pimpinan pada lembaga pemerintahan / pejabat negara yang harus dibebaskan dari jabatan organiknya 
                                                </p>

                                                {values.guruBesar.karya_Internasional.map((p, index) => {
                                                    const tahun = `guruBesar.karya_Internasional[${index}].tahun`
                                                    const karya = `guruBesar.karya_Internasional[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Tahun Terbit :'
                                                                    type='number'
                                                                    name={tahun}
                                                                    value={p.tahun}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Periode 3 tahun terakhir
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul Artikel / Nama Jurnal, Volume dan Penerbit :'
                                                                type='text'
                                                                name={karya}
                                                                value={p.karya}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.guruBesar.karya_Internasional.length + 1, tahun : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>
                                
                                <FieldArray name='guruBesar.karya_Internasional_dll'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Menduduki jabatan pimpinan instansi lain untuk dosen yang tidak dibebaskan sementara dari jabatan fungsional
                                                </p>

                                                {values.guruBesar.karya_Internasional_dll.map((p, index) => {
                                                    const tahun = `guruBesar.karya_Internasional_dll[${index}].tahun`
                                                    const karya = `guruBesar.karya_Internasional_dll[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Tahun Terbit :'
                                                                    type='number'
                                                                    name={tahun}
                                                                    value={p.tahun}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    3 tahun terakhir
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul Artikel / Nama Jurnal, Volume dan Penerbit :'
                                                                type='text'
                                                                name={karya}
                                                                value={p.karya}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.guruBesar.karya_Internasional_dll.length + 1, tahun : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                            </SingleForm>

                            <SingleForm title="Lektor Kepala">
                                
                                <FieldArray name='lektorKepala.karya_Internasional'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Melaksanakan karya_Internasional hasil pendidikan dan penelitian yang dapat dimanfaatkan oleh masyarakat 
                                                </p>

                                                {values.lektorKepala.karya_Internasional.map((p, index) => {
                                                    const tahun = `lektorKepala.karya_Internasional[${index}].tahun`
                                                    const karya = `lektorKepala.karya_Internasional[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Tahun Terbit :'
                                                                    type='number'
                                                                    name={tahun}
                                                                    value={p.tahun}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    3 tahun terakhir
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul Artikel / Nama Jurnal, Volume dan Penerbit :'
                                                                type='text'
                                                                name={karya}
                                                                value={p.karya}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.lektorKepala.karya_Internasional.length + 1, tahun : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='lektorKepala.karya_Internasional_dll'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Melaksanakan karya_Internasional_dll hasil pendidikan dan penelitian yang dapat dimanfaatkan oleh masyarakat 
                                                </p>

                                                {values.lektorKepala.karya_Internasional_dll.map((p, index) => {
                                                    const tahun = `lektorKepala.karya_Internasional_dll[${index}].tahun`
                                                    const karya = `lektorKepala.karya_Internasional_dll[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Tahun Terbit :'
                                                                    type='number'
                                                                    name={tahun}
                                                                    value={p.tahun}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    3 tahun terakhir
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul Artikel / Nama Jurnal, Volume dan Penerbit :'
                                                                type='text'
                                                                name={karya}
                                                                value={p.karya}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.lektorKepala.karya_Internasional_dll.length + 1, tahun : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                            </SingleForm>

                            <div>
                                <Button type='submit' set='priamry' size='lg' stacked> Submit Formulir </Button>
                            </div>

                        </Form>
                    )}
                />  

            </Div>
        );
    }
}
 
export default FormGBLK;

const Div = styled.div`

`