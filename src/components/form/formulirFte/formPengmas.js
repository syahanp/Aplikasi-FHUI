import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form, FieldArray } from 'formik';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../../FontAwesome';

import SingleForm from '../SingleForm';
import Input from '../Input';
// import Textarea from '../Textarea';
import {Button} from '../../buttons'
import Keterangan from '../Keterangan'

class FormPengmas extends Component {
    render() { 
        
        const addBtn = <FontAwesomeIcon icon={['fas', 'plus-circle']}/>
        
        return (
            <Div>
                <h2 className='font-priamry'>Form BKD Unsur Pengabdian Masyarakat</h2>
                <br/>

                <Formik
                    initialValues={{
                        form1 : {
                            lembagaPemerintahan : [
                                {
                                    id : 1,
                                    peran : '',
                                }
                            ],
                            instansiLain : [
                                {
                                    id : 1,
                                    peran : '',
                                }
                            ],
                        },
                        form2 : {
                            pengembangan : [
                                {
                                    id : 1,
                                    peran : '',
                                }
                            ],
                        },
                        form3 : {
                            dalamSemester_inter : [
                                {
                                    id : 1,
                                    peran : '',
                                }
                            ],
                            dalamSemester_nasional : [
                                {
                                    id : 1,
                                    peran : '',
                                }
                            ],
                            dalamSemester_lokal : [
                                {
                                    id : 1,
                                    peran : '',
                                }
                            ],
                            kurangSemester_inter : [
                                {
                                    id : 1,
                                    peran : '',
                                }
                            ],
                            kurangSemester_nasional : [
                                {
                                    id : 1,
                                    peran : '',
                                }
                            ],
                            kurangSemester_lokal : [
                                {
                                    id : 1,
                                    peran : '',
                                }
                            ],
                            insidentil : [
                                {
                                    id : 1,
                                    peran : '',
                                }
                            ]
                        },
                        form4 : {
                            keahlian : [
                                {
                                    id : 1,
                                    peran : '',
                                }
                            ],
                            penugasan : [
                                {
                                    id : 1,
                                    peran : '',
                                }
                            ],
                            FunsiJabatan : [
                                {
                                    id : 1,
                                    peran : '',
                                }
                            ]
                        },
                        form5 : {
                            karyaPengabdian : [
                                {
                                    id : 1,
                                    peran : '',
                                }
                            ]
                        }
                        
                    }}
                    onSubmit={values => {
                        console.log(values)
                    }}
                    render={({values, handleChange}) => (
                        <Form>
                            
                            <SingleForm title="1. Menduduki Jabatan Pimpinan">
                                
                                <FieldArray name='form1.lembagaPemerintahan'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Menduduki jabatan pimpinan pada lembaga pemerintahan / pejabat negara yang harus dibebaskan dari jabatan organiknya 
                                                </p>

                                                {values.form1.lembagaPemerintahan.map((p, index) => {
                                                    const peran = `form1.lembagaPemerintahan[${index}].peran`

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
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.form1.lembagaPemerintahan.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>
                                
                                <FieldArray name='form1.instansiLain'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Menduduki jabatan pimpinan instansi lain untuk dosen yang tidak dibebaskan sementara dari jabatan fungsional
                                                </p>

                                                {values.form1.instansiLain.map((p, index) => {
                                                    const peran = `form1.instansiLain[${index}].peran`

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
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.form1.instansiLain.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                            </SingleForm>

                            <SingleForm title="2. Melaksanakan pengembangan hasil pendidikan dan penelitian">
                                
                                <FieldArray name='form2.pengembangan'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Melaksanakan pengembangan hasil pendidikan dan penelitian yang dapat dimanfaatkan oleh masyarakat 
                                                </p>

                                                {values.form2.pengembangan.map((p, index) => {
                                                    const peran = `form2.pengembangan[${index}].peran`

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
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.form2.pengembangan.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                            </SingleForm>

                            <SingleForm title="3. Memberi latihan / penyuluhan / penataran / ceramah / pada masyarakat">
                                
                                <div className='sub-title'>
                                    <h5>Terjadwal - Dalam Satu Semester atau Lebih</h5><hr/>
                                </div>
                                <br/>

                                <FieldArray name='form3.dalamSemester_inter'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Tingkat internasional
                                                </p>

                                                {values.form3.dalamSemester_inter.map((p, index) => {
                                                    const peran = `form3.dalamSemester_inter[${index}].peran`

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
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.form3.dalamSemester_inter.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>
                                
                                <FieldArray name='form3.dalamSemester_nasional'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Tingkat nasional
                                                </p>

                                                {values.form3.dalamSemester_nasional.map((p, index) => {
                                                    const peran = `form3.dalamSemester_nasional[${index}].peran`

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
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.form3.dalamSemester_nasional.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form3.dalamSemester_lokal'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Tingkat lokal
                                                </p>

                                                {values.form3.dalamSemester_lokal.map((p, index) => {
                                                    const peran = `form3.dalamSemester_lokal[${index}].peran`

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
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.form3.dalamSemester_lokal.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <div className='sub-title'>
                                    <h5>Terjadwal - Kurang Dari Satu Semester dan Minimal 1 Bulan</h5><hr/>
                                </div>
                                <br/>

                                <FieldArray name='form3.kurangSemester_inter'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Tingkat internasional
                                                </p>

                                                {values.form3.kurangSemester_inter.map((p, index) => {
                                                    const peran = `form3.kurangSemester_inter[${index}].peran`

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
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.form3.kurangSemester_inter.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form3.kurangSemester_nasional'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Tingkat nasional
                                                </p>

                                                {values.form3.kurangSemester_nasional.map((p, index) => {
                                                    const peran = `form3.kurangSemester_nasional[${index}].peran`

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
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.form3.kurangSemester_nasional.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form3.kurangSemester_lokal'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Tingkat lokal
                                                </p>

                                                {values.form3.kurangSemester_lokal.map((p, index) => {
                                                    const peran = `form3.kurangSemester_lokal[${index}].peran`

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
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.form3.kurangSemester_lokal.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <div className='sub-title'>
                                    <h5>Insidentil</h5><hr/>
                                </div>
                                <br/>

                                <FieldArray name='form3.insidentil'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Insidentil
                                                </p>

                                                {values.form3.insidentil.map((p, index) => {
                                                    const peran = `form3.insidentil[${index}].peran`

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
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.form3.insidentil.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                            </SingleForm>

                            <SingleForm title='4. Memberi pelayanan kepada masyarakat atau kegiatan lain yang menunjang pelaksanaan tugas umum pemerintah dan pembangunan'>
                                <FieldArray name='form4.keahlian'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Berdasarkan bidang keahlian
                                                </p>

                                                {values.form4.keahlian.map((p, index) => {
                                                    const peran = `form4.keahlian[${index}].peran`

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
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.form4.keahlian.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>

                                <FieldArray name='form4.penugasan'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Berdasarkan penugasan lembaga peruguran tinggi
                                                </p>

                                                {values.form4.penugasan.map((p, index) => {
                                                    const peran = `form4.penugasan[${index}].peran`

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
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.form4.penugasan.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>
                                
                                <FieldArray name='form4.FunsiJabatan'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Berdasarkan fungsi atau jabatan
                                                </p>

                                                {values.form4.FunsiJabatan.map((p, index) => {
                                                    const peran = `form4.FunsiJabatan[${index}].peran`

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
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.form4.FunsiJabatan.length + 1, peran : '', beban : '', karya : ''})
                                                    }
                                                >
                                                    {addBtn} Tambah luaran / karya lainnya
                                                </p>
                                            </div>
                                        ) 
                                    }
                                </FieldArray>
                            </SingleForm>

                            <SingleForm title='5. Membuat / menulis karya pengabdian'>
                                <FieldArray name='form5.karyaPengabdian'>
                                    {
                                        ({push}) => (
                                            <div className='form-group'>
                                                <p>
                                                Membuat / menulis karya pengabdian pada masyarakat yang tidak dipublikasikan
                                                </p>

                                                {values.form5.karyaPengabdian.map((p, index) => {
                                                    const peran = `form5.karyaPengabdian[${index}].peran`

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
                                                        </div>
                                                    );
                                                })}
                                                <p 
                                                    className='addField'
                                                    onClick={ () => 
                                                        push({id : values.form5.karyaPengabdian.length + 1, peran : '', beban : '', karya : ''})
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
 
export default FormPengmas;

const Div = styled.div`

`

/* <SingleForm
    title=" 1. Pendidikan Formal"
>
    <div className='sub-title'>
        <h5>Sebagai Pembimbing Utama</h5><hr/>
    </div>
    <br/>

    <div className='form-group'>
        <p>
        Pada fakultas / sekolah tinggi / Akademik / Politeknik sendiri, pada fakultas lain dalam lingkungan Universitas / Institut sendiri, maupun di luar perguruan tinggi sendiri secara melembaga tiap sks (paling banyak 2 sks) per semester
        </p>
        <div className='wrapper'>
            <Input
                label='Kuantitas :'
                type='number'
                name='qty_1'
                placeholder='misal : 2'
            />
            <Textarea
                label='Keterangan kegiatan (jika ada) :'
                type='text'
                name='ket_1'
            />
        </div>
    </div>
</SingleForm> */