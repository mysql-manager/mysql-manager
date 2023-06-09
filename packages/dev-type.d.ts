/**
 * This file is auto generated by scripts/postinstall.js
 * Please do not modify this file directly
 * Please modify the file scripts/postinstall.js
 * and run npm run postinstall
 * to generate this file
 */

declare namespace MySql {
  export interface DataBase {
    database1: {
      table1: Table['database1.table1']
      table2: Table['database1.table2']
    }
    database2: {
      table1: Table['database2.table1']
      table2: Table['database2.table2']
    }
  }
  export interface Table {
    'database1.table1': {
      column1: Column['database1.table1.column1']
      column2: Column['database1.table1.column2']
      column3: Column['database1.table1.column3']
      column4: Column['database1.table1.column4']
      column5: Column['database1.table1.column5']
    }
    'database1.table2': {
      column1: Column['database1.table2.column1']
      column2: Column['database1.table2.column2']
      column3: Column['database1.table2.column3']
    }
    'database2.table1': {
      column1: Column['database2.table1.column1']
      column2: Column['database2.table1.column2']
    }
    'database2.table2': {
      column1: Column['database2.table2.column1']
      column2: Column['database2.table2.column2']
      column3: Column['database2.table2.column3']
    }
  }
  export interface Column {
    'database1.table1.column1': {
      type: number
      readonly: true
      not_null: true
      has_defa: false
    }
    'database1.table1.column2': {
      type: Date
      readonly: true
      not_null: false
      has_defa: true
    }
    'database1.table1.column3': {
      type: number
      readonly: false
      not_null: false
      has_defa: false
    }
    'database1.table1.column4': {
      type: string
      readonly: false
      not_null: true
      has_defa: false
    }
    'database1.table1.column5': {
      type: string
      readonly: false
      not_null: false
      has_defa: true
    }
    'database1.table2.column1': {
      type: 'none' | 'admin' | 'super'
      readonly: false
      not_null: true
      has_defa: false
    }
    'database1.table2.column2': {
      type: { key1: string; key2: number }[]
      readonly: false
      not_null: true
      has_defa: false
    }
    'database1.table2.column3': {
      type: { key1: string; key2: number }
      readonly: false
      not_null: true
      has_defa: false
    }
    'database2.table1.column1': {
      type: string
      readonly: false
      not_null: true
      has_defa: false
    }
    'database2.table1.column2': {
      type: string
      readonly: false
      not_null: false
      has_defa: true
    }
    'database2.table2.column1': {
      type: '0' | '1' | '2' | '3'
      readonly: false
      not_null: true
      has_defa: false
    }
    'database2.table2.column2': {
      type: { key1: string; key2: number }[]
      readonly: false
      not_null: true
      has_defa: false
    }
    'database2.table2.column3': {
      type: { key1: string; key2: number }
      readonly: false
      not_null: true
      has_defa: false
    }
  }
}
