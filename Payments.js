function payments()
{
	if( document.paymentdetail.chname.value == "" )
   {
     alert( "Please provide Card Holder Name!" );
     document.paymentdetail.chname.focus() ;
     return false;
   }
   if( document.paymentdetail.Cn.value == "" || document.paymentdetail.Cn.value.length !=16)
   {
     alert( "Please provide Card  number" );
     document.paymentdetail.Cn.focus() ;
     return false;
   }
  
    if ( (paymentdetail.debit[0].checked == false ) && (paymentdetail.debit[1].checked == false ) &&  (paymentdetail.debit[2].checked == false ) )
   {
   alert ( "Please choose your Card" );
   return false;
   } 
   if( document.paymentdetail.cd.value == "-1" )
   {
     alert( "Please Select Payment Options!" );
     document.paymentdetail.cd.focus() ;
     return false;
   }  
   if( document.paymentdetail.mn.value == "" ||  document.paymentdetail.mn.value.length != 10 )
   {
     alert( "Please provide a Mobile No in the format 123." );
     document.paymentdetail.mn.focus() ;
     return false;
   }
    if( document.paymentdetail.cv.value == "" ||  document.paymentdetail.cv.value.length != 6 )
   {
     alert( "Please provide CVV Code in the format ####." );
     document.paymentdetail.cv.focus() ;
     return false;
   }
    if( document.paymentdetail.otp.value == "" ||  document.paymentdetail.otp.value.length != 6 )
   {
     alert( "Please provide OTP Code in the format ####." );
     document.paymentdetail.otp.focus() ;
     return false;
   }
   if( document.paymentdetail.snum.value == "" ||  document.paymentdetail.snum.value.length != 4 )
   {
     alert( "Please provide Security Code in the format ####." );
     document.paymentdetail.snum.focus() ;
     return false;
   }
   return true;
}