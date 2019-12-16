import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';

import SingleForm from '../SingleForm';
import Input from '../Input';
import Textarea from '../Textarea';
import {Button} from '../../buttons'
import Keterangan from '../Keterangan'

class FormPenunjang extends Component {
    render() { 
        return (
            <Div>
                <h2 className='font-priamry'>Form BKD Unsur Penunjang Akademik</h2>
                <br/>

                <Formik
                    initialValues={{
                        form1 : {
                            ketua : {
                                qty : '',
                                ket : ''
                            },
                            anggota : {
                                qty : '',
                                ket : ''
                            },
                        },
                        form2 : {
                            pusat_ketua : {
                                qty : '',
                                ket : ''
                            },
                            pusat_anggota : {
                                qty : '',
                                ket : ''
                            },
                            daerah_ketua : {
                                qty : '',
                                ket : ''
                            },
                            daerah_anggota : {
                                qty : '',
                                ket : ''
                            },
                        },
                        form3 : {
                            inter_pengurus : {
                                qty : '',
                                ket : ''
                            },
                            inter_anggotaPermintaan : {
                                qty : '',
                                ket : ''
                            },
                            inter_anggota : {
                                qty : '',
                                ket : ''
                            },
                            nasional_pengurus : {
                                qty : '',
                                ket : ''
                            },
                            nasional_anggotaPermintaan : {
                                qty : '',
                                ket : ''
                            },
                            nasional_anggota : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form4 : {
                            perguruanTinggi : {
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
                            },
                        },
                        form6 : {
                            inter_ketua : {
                                qty : '',
                                ket : ''
                            },
                            inter_anggota : {
                                qty : '',
                                ket : ''
                            },
                            pt_ketua : {
                                qty : '',
                                ket : ''
                            },
                            pt_anggota : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form7 : {
                            satya_30 : {
                                qty : '',
                                ket : ''
                            },
                            satya_20 : {
                                qty : '',
                                ket : ''
                            },
                            satya_10 : {
                                qty : '',
                                ket : ''
                            },
                            lain_inter: {
                                qty : '',
                                ket : ''
                            },
                            lain_nasional : {
                                qty : '',
                                ket : ''
                            },
                            lain_provinsi : {
                                qty : '',
                                ket : ''
                            },
                        },
                        form8 : {
                            slta : {
                                qty : '',
                                ket : ''
                            },
                            sltp : {
                                qty : '',
                                ket : ''
                            },
                            sd : {
                                qty : '',
                                ket : ''
                            },
                        },
                        form9 : {
                            inter : {
                                qty : '',
                                ket : ''
                            },
                            nasional : {
                                qty : '',
                                ket : ''
                            },
                            lokal : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form10 : {
                            nasional_pengurus : {
                                qty : '',
                                ket : ''
                            },
                            nasional_anggota : {
                                qty : '',
                                ket : ''
                            },
                            provinsi_pengurus : {
                                qty : '',
                                ket : ''
                            },
                            provinsi_anggota : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form11 : {
                            timPenilai : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form12 : {
                            inter : {
                                qty : '',
                                ket : ''
                            },
                            nasional : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form13 : {
                            inter : {
                                qty : '',
                                ket : ''
                            },
                            nasional : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form14 : {
                            peer : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form15 : {
                            inter : {
                                qty : '',
                                ket : ''
                            },
                            nasional : {
                                qty : '',
                                ket : ''
                            }
                        },
                        form16 : {
                            kontribusi : {
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
                            
                            <SingleForm title="1. Menjadi anggota dalam suatu panitia / badan pada perguruan tinggi">

                                <div className='form-group'>
                                    <p>
                                    Sebagai ketua / wakil ketua merangkap anggota
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form1.ketua.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form1.ketua.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Tahun <br/>
                                                SKS BKD Per Semester : 1,5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form1.ketua.ket'
                                            onChange={handleChange}
                                            value={values.form1.ketua.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Sebagai anggota
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form1.anggota.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form1.anggota.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Tahun <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form1.anggota.ket'
                                            onChange={handleChange}
                                            value={values.form1.anggota.ket}
                                        />
                                    </div>
                                </div>

                            </SingleForm>

                            <SingleForm title="2. Menjadi anggota panitia / badan pada lembaga pemerintah ">

                                <div className='sub-title'>
                                    <h5>Panitia Pusat</h5><hr/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <p>
                                    Ketua / wakil ketua
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form2.pusat_ketua.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form2.pusat_ketua.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Kepanitiaan <br/>
                                                SKS BKD Per Semester : 2
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form2.pusat_ketua.ket'
                                            onChange={handleChange}
                                            value={values.form2.pusat_ketua.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Anggota
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form2.pusat_anggota.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form2.pusat_anggota.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Kepanitiaan <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form2.pusat_anggota.ket'
                                            onChange={handleChange}
                                            value={values.form2.pusat_anggota.ket}
                                        />
                                    </div>
                                </div>

                                <div className='sub-title'>
                                    <h5>Panitia Daerah</h5><hr/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <p>
                                    Sebagai ketua / wakil ketua merangkap anggota
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form2.daerah_ketua.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form2.daerah_ketua.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Kepanitiaan <br/>
                                                SKS BKD Per Semester : 1,5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form2.daerah_ketua.ket'
                                            onChange={handleChange}
                                            value={values.form2.daerah_ketua.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Sebagai anggota
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form2.daerah_anggota.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form2.daerah_anggota.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Kepanitiaan <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form2.daerah_anggota.ket'
                                            onChange={handleChange}
                                            value={values.form2.daerah_anggota.ket}
                                        />
                                    </div>
                                </div>

                            </SingleForm>

                            <SingleForm title="3. Menjadi anggota profesi dosen ">

                                <div className='sub-title'>
                                    <h5>Tingkat Internasional</h5><hr/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <p>
                                    Pengurus
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form3.inter_pengurus.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form3.inter_pengurus.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Periode Jabatan <br/>
                                                SKS BKD Per Semester : 2
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form3.inter_pengurus.ket'
                                            onChange={handleChange}
                                            value={values.form3.inter_pengurus.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Periode atas permintaan
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form3.inter_anggotaPermintaan.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form3.inter_anggotaPermintaan.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Periode Jabatan <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form3.inter_anggotaPermintaan.ket'
                                            onChange={handleChange}
                                            value={values.form3.inter_anggotaPermintaan.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Anggota
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form3.inter_anggota.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form3.inter_anggota.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Periode Jabatan <br/>
                                                SKS BKD Per Semester : 0,5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form3.inter_anggota.ket'
                                            onChange={handleChange}
                                            value={values.form3.inter_anggota.ket}
                                        />
                                    </div>
                                </div>

                                <div className='sub-title'>
                                    <h5>Tingkat Nasional</h5><hr/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <p>
                                    Pengurus
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form3.nasional_pengurus.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form3.nasional_pengurus.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Periode Jabatan <br/>
                                                SKS BKD Per Semester : 1,5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form3.nasional_pengurus.ket'
                                            onChange={handleChange}
                                            value={values.form3.nasional_pengurus.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Anggota atas permintaan
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form3.nasional_anggotaPermintaan.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form3.nasional_anggotaPermintaan.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Periode Jabatan <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form3.nasional_anggotaPermintaan.ket'
                                            onChange={handleChange}
                                            value={values.form3.nasional_anggotaPermintaan.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Anggota
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form3.nasional_anggota.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form3.nasional_anggota.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Periode Jabatan <br/>
                                                SKS BKD Per Semester : 1,5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form3.nasional_anggota.ket'
                                            onChange={handleChange}
                                            value={values.form3.nasional_anggota.ket}
                                        />
                                    </div>
                                </div>

                            </SingleForm>

                            <SingleForm title="4. Mewakili perguruan tinggi / lembaga pemerintah ">

                                <div className='form-group'>
                                    <p>
                                    Mewakili perguruan tinggi / lembaga pemerintah duduk dalam panitia antar lembaga
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form4.perguruanTinggi.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form4.perguruanTinggi.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Kepanitiaan <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form4.perguruanTinggi.ket'
                                            onChange={handleChange}
                                            value={values.form4.perguruanTinggi.ket}
                                        />
                                    </div>
                                </div>

                            </SingleForm>

                            <SingleForm title="5. Menjadi anggota delegasi nasional ke pertemuan internasional ">

                                <div className='form-group'>
                                    <p>
                                    Sebagai ketua delegasi
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
                                                Satuan Hasil : Kegiatan <br/>
                                                SKS BKD Per Semester : 2
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
                                    Sebagai anggota delegasi
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
                                                Satuan Hasil : Kegiatan <br/>
                                                SKS BKD Per Semester : 1
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

                            <SingleForm title="6. Berperan Serta aktif dalam pertemuan ilmiah">

                                <div className='sub-title'>
                                    <h5>Tingkat internasional / nasional / regional</h5><hr/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <p>
                                    Sebagai Ketua
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form6.inter_ketua.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form6.inter_ketua.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Kegiatan <br/>
                                                SKS BKD Per Semester : 2
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form6.inter_ketua.ket'
                                            onChange={handleChange}
                                            value={values.form6.inter_ketua.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Sebagai anggota
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form6.inter_anggotaqty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form6.inter_anggota.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Kegiatan <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form6.inter_anggota.ket'
                                            onChange={handleChange}
                                            value={values.form6.inter_anggota.ket}
                                        />
                                    </div>
                                </div>

                                <div className='sub-title'>
                                    <h5>Di Lingkungan Perguruan Tinggi </h5><hr/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <p>
                                    Sebagai Ketua
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form6.pt_ketua.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form6.pt_ketua.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Kegiatan <br/>
                                                SKS BKD Per Semester : 1,5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form6.pt_ketua.ket'
                                            onChange={handleChange}
                                            value={values.form6.pt_ketua.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Sebagai anggota
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form6.pt_anggota.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form6.pt_anggota.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Kegiatan <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form6.pt_anggota.ket'
                                            onChange={handleChange}
                                            value={values.form6.pt_anggota.ket}
                                        />
                                    </div>
                                </div>

                            </SingleForm>

                            <SingleForm title="7. Mendapatkan penghargaan atau tanda jasa">

                                <div className='sub-title'>
                                    <h5>Penghargaan atau tanda jasa Satya Lencana Karya Satya</h5><hr/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <p>
                                    30 Tahun
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form7.satya_30.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form7.satya_30.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Tanda Jasa <br/>
                                                SKS BKD Per Semester : 3
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form7.satya_30.ket'
                                            onChange={handleChange}
                                            value={values.form7.satya_30.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    20 Tahun
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form7.satya_20.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form7.satya_20.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Tanda Jasa <br/>
                                                SKS BKD Per Semester : 2
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form7.satya_20.ket'
                                            onChange={handleChange}
                                            value={values.form7.satya_20.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    10 Tahun
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form7.satya_10.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form7.satya_10.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Tanda Jasa <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form7.satya_10.ket'
                                            onChange={handleChange}
                                            value={values.form7.satya_10.ket}
                                        />
                                    </div>
                                </div>

                                <div className='sub-title'>
                                    <h5>Memperoleh penghargaan lainnya</h5><hr/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <p>
                                    Tingkat internasional
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form7.lain_inter.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form7.lain_inter.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Tanda Jasa <br/>
                                                SKS BKD Per Semester : 5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form7.lain_inter.ket'
                                            onChange={handleChange}
                                            value={values.form7.lain_inter.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Tingkat nasional
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form7.lain_nasional.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form7.lain_nasional.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Tanda Jasa <br/>
                                                SKS BKD Per Semester : 3
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form7.lain_nasional.ket'
                                            onChange={handleChange}
                                            value={values.form7.lain_nasional.ket}
                                        />
                                    </div>
                                </div>
                                
                                <div className='form-group'>
                                    <p>
                                    Tingkat provinsi
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form7.lain_provinsi.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form7.lain_provinsi.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Tanda Jasa <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form7.lain_provinsi.ket'
                                            onChange={handleChange}
                                            value={values.form7.lain_provinsi.ket}
                                        />
                                    </div>
                                </div>

                            </SingleForm>

                            <SingleForm title="8. Menulis buku pelajaran SLTA ke bawah yang diterbitkan dan diedarkan secara nasional">

                                <div className='form-group'>
                                    <p>
                                    Buku SLTA atau setingkat
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form8.slta.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form8.slta.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Buku <br/>
                                                SKS BKD Per Semester : 3
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form8.slta.ket'
                                            onChange={handleChange}
                                            value={values.form8.slta.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Buku SLTP atau setingkat
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form8.sltp.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form8.sltp.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Buku <br/>
                                                SKS BKD Per Semester : 3
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form8.sltp.ket'
                                            onChange={handleChange}
                                            value={values.form8.sltp.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Buku SD atau setingkat
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form8.sd.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form8.sd.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Buku <br/>
                                                SKS BKD Per Semester : 3
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form8.sd.ket'
                                            onChange={handleChange}
                                            value={values.form8.sd.ket}
                                        />
                                    </div>
                                </div>

                            </SingleForm>

                            <SingleForm title="9. Mempunyai prestasi di bidang olahraga dan humaniora">

                                <div className='form-group'>
                                    <p>
                                    Tingkat internasional
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form9.inter.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form9.inter.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Medal / Piagam <br/>
                                                SKS BKD Per Semester : 3
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form9.inter.ket'
                                            onChange={handleChange}
                                            value={values.form9.inter.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Tingkat nasional
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form9.nasional.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form9.nasional.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Medal / Piagam <br/>
                                                SKS BKD Per Semester : 2
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form9.nasional.ket'
                                            onChange={handleChange}
                                            value={values.form9.nasional.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Tingkat daerah atau lokal
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form9.lokal.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form9.lokal.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Medal / Piagam <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form9.lokal.ket'
                                            onChange={handleChange}
                                            value={values.form9.lokal.ket}
                                        />
                                    </div>
                                </div>

                            </SingleForm>

                            <SingleForm title="10. Keanggotaan dalam organisasi profesi dosen">

                                <div className='sub-title'>
                                    <h5>Tingkat Nasional</h5><hr/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <p>
                                    Sebagai pengurus aktif
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form10.nasional_pengurus.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form10.nasional_pengurus.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Tahun <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form10.nasional_pengurus.ket'
                                            onChange={handleChange}
                                            value={values.form10.nasional_pengurus.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Sebagai anggota aktif
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form10.nasional_anggota.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form10.nasional_anggota.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Tahun <br/>
                                                SKS BKD Per Semester : 0,75
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form10.nasional_anggota.ket'
                                            onChange={handleChange}
                                            value={values.form10.nasional_anggota.ket}
                                        />
                                    </div>
                                </div>

                                <div className='sub-title'>
                                    <h5>Tingkat Provinsi </h5><hr/>
                                </div>
                                <br/>

                                <div className='form-group'>
                                    <p>
                                    Sebagai pengurus aktif
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form10.provinsi_pengurus.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form10.provinsi_pengurus.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Tahun <br/>
                                                SKS BKD Per Semester : 0,5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form10.provinsi_pengurus.ket'
                                            onChange={handleChange}
                                            value={values.form10.provinsi_pengurus.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Sebagai anggota aktif
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form10.provinsi_anggota.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form10.provinsi_anggota.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Tahun <br/>
                                                SKS BKD Per Semester : 0,25
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form10.provinsi_anggota.ket'
                                            onChange={handleChange}
                                            value={values.form10.provinsi_anggota.ket}
                                        />
                                    </div>
                                </div>

                            </SingleForm>

                            <SingleForm title="11. Keanggotaan dalam tim penilai">

                                <div className='form-group'>
                                    <p>
                                    Menjadi anggota tim penilai jabatan akademik dosen 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form11.timPenilai.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form11.timPenilai.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 0,5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form11.timPenilai.ket'
                                            onChange={handleChange}
                                            value={values.form11.timPenilai.ket}
                                        />
                                    </div>
                                </div>

                            </SingleForm>

                            <SingleForm title="12. Reviewer artikel jurnal">

                                <div className='form-group'>
                                    <p>
                                    Tingat internasional
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form12.inter.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form12.inter.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Jurnal <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form12.inter.ket'
                                            onChange={handleChange}
                                            value={values.form12.inter.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Tingat nasional
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form12.nasional.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form12.nasional.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Jurnal <br/>
                                                SKS BKD Per Semester : 0,5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form12.nasional.ket'
                                            onChange={handleChange}
                                            value={values.form12.nasional.ket}
                                        />
                                    </div>
                                </div>

                            </SingleForm>

                            <SingleForm title="13. Reviewer artikel konferensi">

                                <div className='form-group'>
                                    <p>
                                    Tingat internasional
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form13.inter.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form13.inter.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Kegiatan <br/>
                                                SKS BKD Per Semester : 1
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form13.inter.ket'
                                            onChange={handleChange}
                                            value={values.form13.inter.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Tingat nasional
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form13.nasional.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form13.nasional.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Kegiatan <br/>
                                                SKS BKD Per Semester : 0,5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form13.nasional.ket'
                                            onChange={handleChange}
                                            value={values.form13.nasional.ket}
                                        />
                                    </div>
                                </div>

                            </SingleForm>

                            <SingleForm title="14. Peer Review">

                                <div className='form-group'>
                                    <p>
                                    Melakukan peer review untuk jurnal atau prosiding 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form14.peer.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form14.peer.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 0,5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form14.peer.ket'
                                            onChange={handleChange}
                                            value={values.form14.peer.ket}
                                        />
                                    </div>
                                </div>

                            </SingleForm>

                            <SingleForm title="15. Menjadi editor jurnal">

                                <div className='form-group'>
                                    <p>
                                    Tingat internasional
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form15.inter.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form15.inter.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Per Artikel <br/>
                                                SKS BKD Per Semester : 0,25
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form15.inter.ket'
                                            onChange={handleChange}
                                            value={values.form15.inter.ket}
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <p>
                                    Tingat nasional
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form15.nasional.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form15.nasional.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Per Artikel <br/>
                                                SKS BKD Per Semester : 0,25
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form15.nasional.ket'
                                            onChange={handleChange}
                                            value={values.form15.nasional.ket}
                                        />
                                    </div>
                                </div>

                            </SingleForm>

                            <SingleForm title="16. Melakukan penulisan kata pengantar">

                                <div className='form-group'>
                                    <p>
                                    Membuat kontribusi penulisan kata pengantar 
                                    </p>
                                    <div className='wrapper'>
                                        <div className='input'>
                                            <Input
                                                label='Kuantitas :'
                                                type='number'
                                                name='form16.kontribusi.qty'
                                                placeholder='misal : 2'
                                                onChange={handleChange}
                                                value={values.form16.kontribusi.qty}
                                            />
                                            <Keterangan>
                                                Satuan Hasil : Semester <br/>
                                                SKS BKD Per Semester : 0,5
                                            </Keterangan>
                                        </div>
                                        <Textarea
                                            label='Keterangan kegiatan (jika ada) :'
                                            type='text'
                                            name='form16.kontribusi.ket'
                                            onChange={handleChange}
                                            value={values.form16.kontribusi.ket}
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
 
export default FormPenunjang;

const Div = styled.div`

`