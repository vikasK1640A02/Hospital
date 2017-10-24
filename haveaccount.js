function haveaccount()
{
	 if( document.login.Uname.value == ""  )
   {
     alert( "Please provide your User Name!" );
     document.login.Uname.focus() ;
     return false;
   }
   
   if( document.login.upass.value == "" || document.login.upass.value.length !=8 ||
    document.login.upass.value!= document.logindetail.cpass.value )
   {
     alert( "Please provide your Correct Password!" );
     document.login.upass.focus() ;
     return false;
   }
   return true;
}