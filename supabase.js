require('dotenv').config();
const { createClient } = require ('@supabase/supabase-js');

//variaveis de amabiente do arquivo .env
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE-KEY; 

//Alerta visual
if(!supabaseUrl || !supaKey || supabaseUrl.includes('seu-projeto')){
    console.log('\n Atenção: não configurado .env');
    console.log('Abra o arquivo backend/ .env \n');
}
const supabase = createClient(supabaseUrl || '', supabaseKey || '');
module.exports = supabase;
