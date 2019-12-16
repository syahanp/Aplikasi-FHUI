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

class formPenelitian extends Component {
    render() { 

        const addBtn = <FontAwesomeIcon icon={['fas', 'plus-circle']}/>

        return (
            <Div>
                <h2 className='font-priamry'>Form BKD Unsur Penelitian</h2>
                <br/>

                <Formik
                    initialValues={{
                        form1 : {
                            monograf_inter : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            monograf_nasional : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            bookChapter_inter : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            bookChapter_nasional : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            bookReferensi_inter : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            bookReferensi_nasional : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            jurnal_interReputed : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            jurnal_inter : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            jurnal_nasionalReputed : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            jurnal_nasional : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            confMakalah_inter : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            confMakalah_nasional : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            confPoster_inter : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            confPoster_nasional : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            Koran : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            unpublished : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ]
                        },
                        form2 : {
                            edar : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ]
                        },
                        form3 : {
                            edar : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ]
                        },
                        form4 : {
                            inter : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            nasional : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ]
                        },
                        form5 : {
                            inter : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            nasional : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            lokal : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                        },
                        form6 : {
                            inter : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            nasional : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ],
                            lokal : [
                                {
                                    id : 1,
                                    peran : '',
                                    beban : '',
                                    karya : ''
                                }
                            ]
                        }
                    }}
                    onSubmit={values => {
                        console.log(values)
                    }}
                    render={({values, handleChange}) => (
                        <Form>
                            <SingleForm title="1. Menghasilkan Karya Ilmiah">
                            
                                <div className='sub-title'>
                                    <h5>Monograf</h5><hr/>
                                </div>
                                <br/>

                                <FieldArray name='form1.monograf_inter'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Monograf internasional
                                                </p>

                                                {values.form1.monograf_inter.map((p, index) => {
                                                    const peran = `form1.monograf_inter[${index}].peran`
                                                    const beban = `form1.monograf_inter[${index}].beban`
                                                    const karya = `form1.monograf_inter[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.monograf_inter.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form1.monograf_nasional'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Monograf nasional
                                                </p>

                                                {values.form1.monograf_nasional.map((p, index) => {
                                                    const peran = `form1.monograf_nasional[${index}].peran`
                                                    const beban = `form1.monograf_nasional[${index}].beban`
                                                    const karya = `form1.monograf_nasional[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.monograf_nasional.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>
                            
                                <div className='sub-title'>
                                    <h5>Book Chapter</h5><hr/>
                                </div>
                                <br/>

                                <FieldArray name='form1.bookChapter_inter'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Book chapter internasional
                                                </p>

                                                {values.form1.bookChapter_inter.map((p, index) => {
                                                    const peran = `form1.bookChapter_inter[${index}].peran`
                                                    const beban = `form1.bookChapter_inter[${index}].beban`
                                                    const karya = `form1.bookChapter_inter[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.bookChapter_inter.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form1.bookChapter_nasional'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Book chapter nasional
                                                </p>

                                                {values.form1.bookChapter_nasional.map((p, index) => {
                                                    const peran = `form1.bookChapter_nasional[${index}].peran`
                                                    const beban = `form1.bookChapter_nasional[${index}].beban`
                                                    const karya = `form1.bookChapter_nasional[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.bookChapter_nasional.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <div className='sub-title'>
                                    <h5>Buku Referensi</h5><hr/>
                                </div>
                                <br/>

                                <FieldArray name='form1.bookReferensi_inter'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Buku referensi internasional
                                                </p>

                                                {values.form1.bookReferensi_inter.map((p, index) => {
                                                    const peran = `form1.bookReferensi_inter[${index}].peran`
                                                    const beban = `form1.bookReferensi_inter[${index}].beban`
                                                    const karya = `form1.bookReferensi_inter[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.bookReferensi_inter.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form1.bookReferensi_nasional'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Buku referensi nasional
                                                </p>

                                                {values.form1.bookReferensi_nasional.map((p, index) => {
                                                    const peran = `form1.bookReferensi_nasional[${index}].peran`
                                                    const beban = `form1.bookReferensi_nasional[${index}].beban`
                                                    const karya = `form1.bookReferensi_nasional[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.bookReferensi_nasional.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <div className='sub-title'>
                                    <h5>Jurnal Ilmiah</h5><hr/>
                                </div>
                                <br/>

                                <FieldArray name='form1.jurnal_interReputed'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Jurnal internasional bereputasi
                                                </p>

                                                {values.form1.jurnal_interReputed.map((p, index) => {
                                                    const peran = `form1.jurnal_interReputed[${index}].peran`
                                                    const beban = `form1.jurnal_interReputed[${index}].beban`
                                                    const karya = `form1.jurnal_interReputed[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.jurnal_interReputed.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form1.jurnal_inter'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Jurnal internasional
                                                </p>

                                                {values.form1.jurnal_inter.map((p, index) => {
                                                    const peran = `form1.jurnal_inter[${index}].peran`
                                                    const beban = `form1.jurnal_inter[${index}].beban`
                                                    const karya = `form1.jurnal_inter[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.jurnal_inter.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form1.jurnal_nasionalReputed'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Jurnal nasional terakreditasi
                                                </p>

                                                {values.form1.jurnal_nasionalReputed.map((p, index) => {
                                                    const peran = `form1.jurnal_nasionalReputed[${index}].peran`
                                                    const beban = `form1.jurnal_nasionalReputed[${index}].beban`
                                                    const karya = `form1.jurnal_nasionalReputed[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.jurnal_nasionalReputed.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form1.jurnal_nasional'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Jurnal nasional
                                                </p>

                                                {values.form1.jurnal_nasional.map((p, index) => {
                                                    const peran = `form1.jurnal_nasional[${index}].peran`
                                                    const beban = `form1.jurnal_nasional[${index}].beban`
                                                    const karya = `form1.jurnal_nasional[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.jurnal_nasional.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <div className='sub-title'>
                                    <h5>Konferensi (Presentasi Makalah)</h5><hr/>
                                </div>
                                <br/>

                                <FieldArray name='form1.confMakalah_inter'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Konferensi internasional
                                                </p>

                                                {values.form1.confMakalah_inter.map((p, index) => {
                                                    const peran = `form1.confMakalah_inter[${index}].peran`
                                                    const beban = `form1.confMakalah_inter[${index}].beban`
                                                    const karya = `form1.confMakalah_inter[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.confMakalah_inter.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form1.confMakalah_nasional'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Konferensi nasional
                                                </p>

                                                {values.form1.confMakalah_nasional.map((p, index) => {
                                                    const peran = `form1.confMakalah_nasional[${index}].peran`
                                                    const beban = `form1.confMakalah_nasional[${index}].beban`
                                                    const karya = `form1.confMakalah_nasional[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.confMakalah_nasional.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <div className='sub-title'>
                                    <h5>Konferensi (Presentasi Poster)</h5><hr/>
                                </div>
                                <br/>

                                <FieldArray name='form1.confPoster_inter'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Konferensi internasional
                                                </p>

                                                {values.form1.confPoster_inter.map((p, index) => {
                                                    const peran = `form1.confPoster_inter[${index}].peran`
                                                    const beban = `form1.confPoster_inter[${index}].beban`
                                                    const karya = `form1.confPoster_inter[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.confPoster_inter.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>
                                
                                <FieldArray name='form1.confPoster_nasional'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Konferensi nasional
                                                </p>

                                                {values.form1.confPoster_nasional.map((p, index) => {
                                                    const peran = `form1.confPoster_nasional[${index}].peran`
                                                    const beban = `form1.confPoster_nasional[${index}].beban`
                                                    const karya = `form1.confPoster_nasional[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.confPoster_nasional.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form1.Koran'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Koran / Majalah Populer / Majalah Umum
                                                </p>

                                                {values.form1.Koran.map((p, index) => {
                                                    const peran = `form1.Koran[${index}].peran`
                                                    const beban = `form1.Koran[${index}].beban`
                                                    const karya = `form1.Koran[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.Koran.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form1.unpublished'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Hasil Penelitian atau pemikiran yang tidak dipublikasikan (tersimpan di perpustakaan)
                                                </p>

                                                {values.form1.unpublished.map((p, index) => {
                                                    const peran = `form1.unpublished[${index}].peran`
                                                    const beban = `form1.unpublished[${index}].beban`
                                                    const karya = `form1.unpublished[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form1.unpublished.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>
                            
                            </SingleForm>

                            <SingleForm title="2. Menerjemahkan / menyadur buku ilmiah">
                                <FieldArray name='form2.edar'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Diterbitkan dan diedarkan secara nasional 
                                                </p>

                                                {values.form2.edar.map((p, index) => {
                                                    const peran = `form2.edar[${index}].peran`
                                                    const beban = `form2.edar[${index}].beban`
                                                    const karya = `form2.edar[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form2.edar.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>


                            </SingleForm>
                            
                            <SingleForm title='3. Mengedit / menyunting buku'>
                                <FieldArray name='form3.edar'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Diterbitkan dan diedarkan secara nasional 
                                                </p>

                                                {values.form3.edar.map((p, index) => {
                                                    const peran = `form3.edar[${index}].peran`
                                                    const beban = `form3.edar[${index}].beban`
                                                    const karya = `form3.edar[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Draf: 20 <br/>
                                                                    Submit: 20 <br/> 
                                                                    Diterima: 20 <br/>
                                                                    Terbit: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form3.edar.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>
                            </SingleForm>
                            
                            <SingleForm title='4. Membuat rencana dan karya teknologi yang dipatenkan'>
                                <FieldArray name='form4.inter'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Internasional
                                                </p>

                                                {values.form4.inter.map((p, index) => {
                                                    const peran = `form4.inter[${index}].peran`
                                                    const beban = `form4.inter[${index}].beban`
                                                    const karya = `form4.inter[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Prototipe / Deskripsi Paten: 40 <br/>
                                                                    Pendaftaran Paten: 20 <br/> 
                                                                    Pemeriksaan Substantif: 20 <br/>
                                                                    Terdaftar: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form4.inter.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form4.nasional'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Nasional
                                                </p>

                                                {values.form4.nasional.map((p, index) => {
                                                    const peran = `form4.nasional[${index}].peran`
                                                    const beban = `form4.nasional[${index}].beban`
                                                    const karya = `form4.nasional[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Prototipe / Deskripsi Paten: 40 <br/>
                                                                    Pendaftaran Paten: 20 <br/> 
                                                                    Pemeriksaan Substantif: 20 <br/>
                                                                    Terdaftar: 40
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form4.nasional.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>
                            </SingleForm>

                            <SingleForm title='5. Membuat rancangan dan karya seni monumental / seni pertunjukan / karya sastra / program komputer / alat peraga / lagu/ karya seni terapan / arsitektur / peta / batik / sinematografi'>
                                <FieldArray name='form5.inter'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Internasional
                                                </p>

                                                {values.form5.inter.map((p, index) => {
                                                    const peran = `form5.inter[${index}].peran`
                                                    const beban = `form5.inter[${index}].beban`
                                                    const karya = `form5.inter[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Hasil Karya : 60 <br/>
                                                                    Pencatatan Hak Cipta: 20 <br/> 
                                                                    Tercatat: 20
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form5.inter.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form5.nasional'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Nasional
                                                </p>

                                                {values.form5.nasional.map((p, index) => {
                                                    const peran = `form5.nasional[${index}].peran`
                                                    const beban = `form5.nasional[${index}].beban`
                                                    const karya = `form5.nasional[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Hasil Karya : 60 <br/>
                                                                    Pencatatan Hak Cipta: 20 <br/> 
                                                                    Tercatat: 20
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form5.nasional.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form5.lokal'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Lokal
                                                </p>

                                                {values.form5.lokal.map((p, index) => {
                                                    const peran = `form5.lokal[${index}].peran`
                                                    const beban = `form5.lokal[${index}].beban`
                                                    const karya = `form5.lokal[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Hasil Karya : 60 <br/>
                                                                    Pencatatan Hak Cipta: 20 <br/> 
                                                                    Tercatat: 20
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form5.lokal.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>
                            </SingleForm>

                            <SingleForm title='6. Kebijakan publik, peraturan dan perundangan'>
                                <FieldArray name='form6.inter'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Internasional
                                                </p>

                                                {values.form6.inter.map((p, index) => {
                                                    const peran = `form6.inter[${index}].peran`
                                                    const beban = `form6.inter[${index}].beban`
                                                    const karya = `form6.inter[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Proposal: 20 <br/>
                                                                    Naskah Akademik: 40 <br/> 
                                                                    Draf Kebijakan: 30 <br/>
                                                                    Expose: 10
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form6.inter.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form6.nasional'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Nasional
                                                </p>

                                                {values.form6.nasional.map((p, index) => {
                                                    const peran = `form6.nasional[${index}].peran`
                                                    const beban = `form6.nasional[${index}].beban`
                                                    const karya = `form6.nasional[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Proposal: 20 <br/>
                                                                    Naskah Akademik: 40 <br/> 
                                                                    Draf Kebijakan: 30 <br/>
                                                                    Expose: 10
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form6.nasional.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form6.lokal'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Lokal
                                                </p>

                                                {values.form6.lokal.map((p, index) => {
                                                    const peran = `form6.lokal[${index}].peran`
                                                    const beban = `form6.lokal[${index}].beban`
                                                    const karya = `form6.lokal[${index}].karya`

                                                    return (
                                                        <div className='wrapper' key={p.id}>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio peran (%) :'
                                                                    type='number'
                                                                    name={peran}
                                                                    value={p.peran}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Mandiri : 100 <br/> 
                                                                    Ketua / Penulis Utama : 60 <br/>
                                                                    Anggota : 40
                                                                </Keterangan>
                                                            </div>
                                                            <div className='input'>
                                                                <Input
                                                                    label='Rasio beban (%) :'
                                                                    type='number'
                                                                    name={beban}
                                                                    value={p.beban}
                                                                    placeholder=''
                                                                    onChange={handleChange}
                                                                />
                                                                <Keterangan>
                                                                    Proposal: 20 <br/>
                                                                    Naskah Akademik: 40 <br/> 
                                                                    Draf Kebijakan: 30 <br/>
                                                                    Expose: 10
                                                                </Keterangan>
                                                            </div>
                                                            <Textarea
                                                                label='Judul luaran & nama jurnal/penerbit :'
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
                                                        push({id : values.form6.lokal.length + 1, peran : '', beban : '', karya : ''})
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
 
export default formPenelitian;

const Div = styled.div`

`