import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';

import SingleForm from '../SingleForm';
import Input from '../Input';
import Textarea from '../Textarea';
import {Button} from '../../buttons'
import Keterangan from '../Keterangan'

class FormPendidikan extends Component {
    render() { 
        return (
            <Div>
                <h2 className='font-priamry'>Form BKD Unsur Pendidikan</h2>
                <br/>

                <Formik
                    initialValues={{
                        form1 : {
                            doktor : {
                                qty : '',
                                ket : ''
                            },
                            magister : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form2 : {
                            diklat : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form3 : {
                            pekuliahan : {
                                qty : '',
                                ket : ''
                            },
                            menguji : {
                                qty : '',
                                ket : ''
                            },
                            lab : {
                                qty : '',
                                ket : ''
                            },
                            politeknik : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form4 : {
                            utama_disertasi : {
                                qty : '',
                                ket : ''
                            },
                            utama_tesis : {
                                qty : '',
                                ket : ''
                            },
                            utama_skripsi : {
                                qty : '',
                                ket : ''
                            },
                            utama_laporan : {
                                qty : '',
                                ket : ''
                            },
                            pendamping_disertasi : {
                                qty : '',
                                ket : ''
                            },
                            pendamping_tesis : {
                                qty : '',
                                ket : ''
                            },
                            pendamping_skripsi : {
                                qty : '',
                                ket : ''
                            },
                            pendamping_laporan : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form5 : {
                            ketua : {
                                qty : '',
                                ket : ''
                            },
                            anggota : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form6 : {
                            pembinaan : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form7 : {
                            pengembangan : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form8 : {
                            orasi : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form9 : {
                            rektor : {
                                qty : '',
                                ket : ''
                            },
                            pembantuRektor : {
                                qty : '',
                                ket : ''
                            },
                            pembantuDekan : {
                                qty : '',
                                ket : ''
                            },
                            pembantuKetua : {
                                qty : '',
                                ket : ''
                            },
                            dirAkademi : {
                                qty : '',
                                ket : ''
                            },
                            pembantuDirAkademi : {
                                qty : '',
                                ket : ''
                            },
                            ketuaJurusan : {
                                qty : '',
                                ket : ''
                            },
                            sekretarisJurusan : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form10 : {
                            cangkok : {
                                qty : '',
                                ket : ''
                            },
                            reguler : {
                                qty : '',
                                ket : ''
                            },
                        },
                        form11 : {
                            datasering : {
                                qty : '',
                                ket : ''
                            },
                            cangkok : {
                                qty : '',
                                ket : ''
                            },
                        },
                        form12 : {
                            maks : {
                                qty : '',
                                ket : ''
                            },
                            waktu_960 : {
                                qty : '',
                                ket : ''
                            },
                            waktu_640 : {
                                qty : '',
                                ket : ''
                            },
                            waktu_480 : {
                                qty : '',
                                ket : ''
                            },
                            waktu_160 : {
                                qty : '',
                                ket : ''
                            },
                            waktu_80 : {
                                qty : '',
                                ket : ''
                            },
                            waktu_30 : {
                                qty : '',
                                ket : ''
                            }
                        }
                    }}
                    onSubmit={values => {
                        console.log(values)
                    }}
                    render={({values, handleChange}) => (
                        <Form>
                            
                            <SingleForm title=" 1. Pendidikan Formal">

                                <div className='form-group'>
                                    <p>
                                    Doktor / SP 2
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form1.doktor.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form1.doktor.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Ijazah <br/>
                                                SKS BKD Per Semester : 12
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form1.doktor.ket'
                                            onChange={handleChange}
                                            value={values.form1.doktor.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Magister/SP1 (Untuk FK,FKG dan FIK)
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form1.magister.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form1.magister.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Ijazah <br/>
                                                SKS BKD Per Semester : 12
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form1.magister.ket'
                                            onChange={handleChange}
                                            value={values.form1.magister.ket}
                                        />
                                    </div>
                                </div>

                            </SingleForm>

                            <SingleForm title=" 2. Diklat Pra Jabatan">

                                <div className='form-group'>
                                    <p>
                                    Diklat prajabatan golongan III
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form2.diklat.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form2.diklat.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Sertifikat <br/>
                                                SKS BKD Per Semester : 2
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form2.diklat.ket'
                                            value={values.form2.diklat.ket}
                                        />
                                    </div>
                                </div>
                                
                            </SingleForm>
                            
                            <SingleForm title=" 3. Melaksanakan perkuliahan, Membimbing menguji dan Menyelenggarakan pendidikan">
                                <div className='form-group'>
                                    <p>
                                    Melaksanakan perkuliahan / tutorial
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form3.pekuliahan.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form3.pekuliahan.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil Sesuai Dengan SKS Ekuivalen yang tercantum dalam SIAK NG <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form3.pekuliahan.ket'
                                            value={values.form3.pekuliahan.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Membimbing menguji 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form3.menguji.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form3.menguji.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil Sesuai Dengan SKS Ekuivalen yang tercantum dalam SIAK NG <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form3.menguji.ket'
                                            value={values.form3.menguji.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Menyelenggarakan pendidikan di laboraturium, praktik keguruan bengkel / studio / kebun 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form3.lab.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form3.lab.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil Sesuai Dengan SKS Ekuivalen yang tercantum dalam SIAK NG <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form3.lab.ket'
                                            value={values.form3.lab.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Pada fakultas / sekolah tinggi / Akademik / Politeknik sendiri, pada fakultas lain dalam lingkungan Universitas / Institut sendiri, maupun di luar perguruan tinggi sendiri secara melembaga tiap sks (paling banyak 2 sks) per semester
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form3.politeknik.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form3.politeknik.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil Sesuai Dengan SKS Ekuivalen yang tercantum dalam SIAK NG <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form3.politeknik.ket'
                                            value={values.form3.politeknik.ket}
                                        />
                                    </div>
                                </div>
                            </SingleForm>

                            <SingleForm title=" 4. Membimbing dan ikut membimbing dalam menghasilkan disertasi, tesis, skripsi dan laporan akhir studi ">

                                <div className='sub-title'>
                                    <h5>Sebagai Pembimbing Utama</h5><hr/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <p>
                                    Disertasi
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form4.utama_disertasi.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form4.utama_disertasi.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Mahasiswa <br/>
                                                SKS BKD Per Semester : 5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form4.utama_disertasi.ket'
                                            onChange={handleChange}
                                            value={values.form4.utama_disertasi.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    tesis
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form4.utama_tesis.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form4.utama_tesis.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Mahasiswa <br/>
                                                SKS BKD Per Semester : 3
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form4.utama_tesis.ket'
                                            onChange={handleChange}
                                            value={values.form4.utama_tesis.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Skripsi / Laporan Magang Sebagai Akhir Studi / Karya Akhir
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form4.utama_skripsi.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form4.utama_skripsi.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Mahasiswa <br/>
                                                SKS BKD Per Semester : 2
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form4.utama_skripsi.ket'
                                            onChange={handleChange}
                                            value={values.form4.utama_skripsi.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Laporan Akhir Studi
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form4.utama_laporan.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form4.utama_laporan.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Mahasiswa <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form4.utama_laporan.ket'
                                            onChange={handleChange}
                                            value={values.form4.utama_laporan.ket}
                                        />
                                    </div>
                                </div>

                                <div className='sub-title'>
                                    <h5>Sebagai Pendamping / Pembantu</h5><hr/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <p>
                                    Disertasi
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form4.pendamping_disertasi.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form4.pendamping_disertasi.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Mahasiswa <br/>
                                                SKS BKD Per Semester : 4
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form4.pendamping_disertasi.ket'
                                            onChange={handleChange}
                                            value={values.form4.pendamping_disertasi.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    tesis
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form4.pendamping_tesis.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form4.pendamping_tesis.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Mahasiswa <br/>
                                                SKS BKD Per Semester : 2
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form4.pendamping_tesis.ket'
                                            onChange={handleChange}
                                            value={values.form4.pendamping_tesis.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Skripsi / Laporan Magang Sebagai Akhir Studi / Karya Akhir
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form4.pendamping_skripsi.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form4.pendamping_skripsi.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Mahasiswa <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form4.pendamping_skripsi.ket'
                                            onChange={handleChange}
                                            value={values.form4.pendamping_skripsi.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Laporan Akhir Studi
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form4.pendamping_laporan.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form4.pendamping_laporan.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Mahasiswa <br/>
                                                SKS BKD Per Semester : 0,5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form4.pendamping_laporan.ket'
                                            onChange={handleChange}
                                            value={values.form4.pendamping_laporan.ket}
                                        />
                                    </div>
                                </div>
                            </SingleForm>

                            <SingleForm title=" 5. Bertugas sebagai penguji pada ujian: proposal, hasil akhir, profesi, sertifikasi dan ujian lainnya ">

                                <div className='form-group'>
                                    <p>
                                    Sebagai ketua penguji
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form5.ketua.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form5.ketua.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Mahasiswa <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form5.ketua.ket'
                                            onChange={handleChange}
                                            value={values.form5.ketua.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Sebagai anggota penguji
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form5.anggota.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form5.anggota.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Mahasiswa <br/>
                                                SKS BKD Per Semester : 0,5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form5.anggota.ket'
                                            onChange={handleChange}
                                            value={values.form5.anggota.ket}
                                        />
                                    </div>
                                </div>
                            </SingleForm>

                            <SingleForm title=" 6. Membina Kegiatan Manusia">
                                <div className='form-group'>
                                    <p>
                                    Melakukan pembinaan kegiatan mahasiswa di bidang akademik dan kemahasiswaan 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form6.pembinaan.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form6.pembinaan.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Mahasiswa <br/>
                                                SKS BKD Per Semester : 2
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form6.pembinaan.ket'
                                            onChange={handleChange}
                                            value={values.form6.pembinaan.ket}
                                        />
                                    </div>
                                </div>
                            </SingleForm>

                            <SingleForm title=" 7. Mengembangkan Program Kuliah ">
                                <div className='form-group'>
                                    <p>
                                    Melakukan kegiatan pengembangan program kuliah yang dapat berupa BRP dan SAP
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form7.pengembangan.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form7.pengembangan.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Mata Kuliah <br/>
                                                SKS BKD Per Semester : 2
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form7.pengembangan.ket'
                                            onChange={handleChange}
                                            value={values.form7.pengembangan.ket}
                                        />
                                    </div>
                                </div>
                            </SingleForm>

                            <SingleForm title=" 8. Menyampaikan Orasi Ilmiah">
                                <div className='form-group'>
                                    <p>
                                    Melakukan kegiatan orasi ilmiah pada perguruan tinggi tiap tahun 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form8.orasi.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form8.orasi.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Orasi <br/>
                                                SKS BKD Per Semester : 2
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form8.orasi.ket'
                                            onChange={handleChange}
                                            value={values.form8.orasi.ket}
                                        />
                                    </div>
                                </div>
                            </SingleForm>

                            <SingleForm title=" 9. Menduduki Jabatan Pimpinan Perguruan Tertinggi ">
                                <div className='form-group'>
                                    <p>
                                    Rektor
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form9.rektor.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form9.rektor.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 6
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form9.rektor.ket'
                                            onChange={handleChange}
                                            value={values.form9.rektor.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Pembantu rektor / dekan / direktur program pascasarjana 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form9.pembantuRektor.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form9.pembantuRektor.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form9.pembantuRektor.ket'
                                            onChange={handleChange}
                                            value={values.form9.pembantuRektor.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Ketua sekolah tinggi / pembantu dekan / asisten direktur program pascasarjana / direktur politeknik 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form9.pembantuDekan.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form9.pembantuDekan.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 4
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form9.pembantuDekan.ket'
                                            onChange={handleChange}
                                            value={values.form9.pembantuDekan.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Pembantu ketua sekolah tinggi / pembantu direktur politeknik 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form9.pembantuKetua.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form9.pembantuKetua.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 4
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form9.pembantuKetua.ket'
                                            onChange={handleChange}
                                            value={values.form9.pembantuKetua.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Direktur akademi
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form9.dirAkademi.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form9.dirAkademi.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 4
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form9.dirAkademi.ket'
                                            onChange={handleChange}
                                            value={values.form9.dirAkademi.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Pembantu direktur akademi / ketua jurusan / bagian pada Universitas / institut / sekolah tinggi 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form9.pembantuDirAkademi.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form9.pembantuDirAkademi.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 3
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form9.pembantuDirAkademi.ket'
                                            onChange={handleChange}
                                            value={values.form9.pembantuDirAkademi.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Ketua jurusan pada politeknik / akademi / sekretaris jurusan / bagian pada Universitas / institut / sekolah tinggi 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form9.ketuaJurusan.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form9.ketuaJurusan.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 3
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form9.ketuaJurusan.ket'
                                            onChange={handleChange}
                                            value={values.form9.ketuaJurusan.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Sekretaris jurusan pada politeknik / akademi dan kepala laboratorium Universitas / institut / sekolah tinggi / politeknik / akademi 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form9.sekretarisJurusan.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form9.sekretarisJurusan.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 3
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form9.sekretarisJurusan.ket'
                                            onChange={handleChange}
                                            value={values.form9.sekretarisJurusan.ket}
                                        />
                                    </div>
                                </div>
                            </SingleForm>
                            
                            <SingleForm title=" 10. Membimbing Akademik Dosen Yang Lebih Rendah Jabatannya">
                                <div className='form-group'>
                                    <p>
                                    Pembimbing pencangkokan
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form10.cangkok.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form10.cangkok.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 2
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form10.cangkok.ket'
                                            onChange={handleChange}
                                            value={values.form10.cangkok.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Reguler
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form10.reguler.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form10.reguler.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form10.reguler.ket'
                                            onChange={handleChange}
                                            value={values.form10.reguler.ket}
                                        />
                                    </div>
                                </div>
                            </SingleForm>

                            <SingleForm title=" 11. Melaksanakan Kegiatan Datasaring dan Pencangkokan Akademik Dosen ">
                                <div className='form-group'>
                                    <p>
                                    Datasering
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form11.datasering.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form11.datasering.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 3
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form11.datasering.ket'
                                            onChange={handleChange}
                                            value={values.form11.datasering.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Pencangkokan
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form11.cangkok.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form11.cangkok.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 2
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form11.cangkok.ket'
                                            onChange={handleChange}
                                            value={values.form11.cangkok.ket}
                                        />
                                    </div>
                                </div>
                            </SingleForm>

                            <SingleForm title=" 12. Melakukan Kegiatan Pengembangan Diri Untuk Meningkatkan Kompetensi ">
                                <div className='form-group'>
                                    <p>
                                    Lamanya lebih dari 960 jam
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form12.maks.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form12.maks.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Sertifikat <br/>
                                                SKS BKD Per Semester : 6
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form12.maks.ket'
                                            onChange={handleChange}
                                            value={values.form12.maks.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Lamanya 641 - 960 jam 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form12.waktu_960.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form12.waktu_960.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Sertifikat <br/>
                                                SKS BKD Per Semester : 5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form12.waktu_960.ket'
                                            onChange={handleChange}
                                            value={values.form12.waktu_960.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Lamanya 481 - 640 jam 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form12.waktu_640.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form12.waktu_640.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Sertifikat <br/>
                                                SKS BKD Per Semester : 4
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form12.waktu_640.ket'
                                            onChange={handleChange}
                                            value={values.form12.waktu_640.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Lamanya 161 - 480 jam 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form12.waktu_480.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form12.waktu_480.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Sertifikat <br/>
                                                SKS BKD Per Semester : 3
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form12.waktu_480.ket'
                                            onChange={handleChange}
                                            value={values.form12.waktu_480.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Lamanya 81 - 160 jam 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form12.waktu_160.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form12.waktu_160.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Sertifikat <br/>
                                                SKS BKD Per Semester : 2
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form12.waktu_160.ket'
                                            onChange={handleChange}
                                            value={values.form12.waktu_160.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Lamanya 31 - 80 jam 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form12.waktu_80.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form12.waktu_80.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Sertifikat <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form12.waktu_80.ket'
                                            onChange={handleChange}
                                            value={values.form12.waktu_80.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Lamanya 10 - 30 jam 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form12.waktu_30.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form12.waktu_30.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Sertifikat <br/>
                                                SKS BKD Per Semester : 0,5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form12.waktu_30.ket'
                                            onChange={handleChange}
                                            value={values.form12.waktu_30.ket}
                                        />
                                    </div>
                                </div>
                            </SingleForm>

                            <SingleForm title=" 13. Membimbing Kuliah Kerja Nyata, Praktik Kerja Nyata, Praktik Kerja Lapangan ">
                                <div className='form-group'>
                                    <p>
                                    Membimbing mahasiswa kuliah kerja nyata, praktik kerja nyata, praktik kerja lapangan
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 2
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='ket'
                                            onChange={handleChange}
                                            value={values.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Membimbing mahasiswa di wahana praktik 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 6
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='ket'
                                            onChange={handleChange}
                                            value={values.ket_2}
                                        />
                                    </div>
                                </div>
                            </SingleForm>

                            <SingleForm title=" 14. Mengembangkan Bahan Kuliah">
                                <div className='form-group'>
                                    <p>
                                    Buku Ajar
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Ijazah <br/>
                                                SKS BKD Per Semester : 12
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='ket'
                                            onChange={handleChange}
                                            value={values.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Diktat, modul, petunjuk, praktikum, model, alat bantu, audio visual, naskah tutorial
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Ijazah <br/>
                                                SKS BKD Per Semester : 12
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='ket_2'
                                            onChange={handleChange}
                                            value={values.ket_2}
                                        />
                                    </div>
                                </div>
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
 
export default FormPendidikan;

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
                name='qty'
                placeholder='misal : 2'
            />
            <Textarea
                label='Keterangan kegiatan (jika ada) :'
                type='text'
                name='ket'
            />
        </div>
    </div>
</SingleForm> */