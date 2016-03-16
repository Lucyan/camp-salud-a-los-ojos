<?php namespace App\Http\Controllers;

use App;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MailController extends Controller
{
    public function send(Request $request) {

    	$email = $request->get('email');
    	$calendarioPath = __DIR__ . '/../../../public/pdf/SALUD_a_los_OJOS_2016_-_PISCO–CAMPANARIO.pdf';

    	$mailer = new \PHPMailer();
		$mailer->IsSMTP();
		$mailer->CharSet    = 'UTF-8';
		$mailer->SMTPAuth   = true; 
		$mailer->SMTPSecure = 'tls';
		$mailer->Host       = getenv('MAIL_HOST'); 
		$mailer->Port       = getenv('MAIL_PORT');

		$mailer->Username   = getenv('MAIL_USERNAME');
		$mailer->Password   = getenv('MAIL_PASSWORD');

		$mailer->SetFrom(getenv('MAIL_FROM_ADDRESS'), getenv('MAIL_FROM_NAME'));

		$mailer->AddAddress($email);

		$mailer->isHTML(true);

		$mailer->Subject    = 'Pisco Camapanario - Salúd a los Ojos Calendario 2016';

		$body = '<div>';
		$body .= '<p>Pisco Camapanario - Salúd a los Ojos Calendario 2016</p>';
		$body .= '</div>';

		$mailer->Body = $body;

		$mailer->AddAttachment($calendarioPath, 'SALUD a los OJOS 2016 - PISCO CAMPANARIO.pdf');
		

		$response = [
			'code' => 200,
			'msg' => 'ok'
		];

		if (!$mailer->Send()) {
			$response = [
				'code' => 409,
				'msg' => $mailer->ErrorInfo
			];
		}

    	return response()->json($response, 200);
    }
}
