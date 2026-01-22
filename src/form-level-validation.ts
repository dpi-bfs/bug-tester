interface Response {
  setStatusCode(code: number): void;
  setHeader(name: string, value: string): void;
  setPayload(payload: { [key: string]: any }): void;
}

interface Request {
  body: {
    formId: number,
    formsAppId: number,
    submissionId: string,
    isDraft: boolean,
    submissionTimestamp: string,
    externalId: string,
    secret: string,
    submission: object
  },
  headers: {
    host: string,
    [key: string]: string
  },
  method: string,
  route: string,
  url: {
    host: string,
    hostname: string,
    params: any,
    pathname: string,
    protocol: string,
    query: any,
    queryString: string
  }
}

export let post = async function webhook(req: Request, res: Response) {

  console.log("In form-level-validation");
  console.log("req", JSON.stringify(req, null, 2));
  // OneBlinkSdkHelpers.validateWebhook(req, 'FormLevelValidation');

  const submission = req.body.submission as {
    TriggerFormLevelValidation: boolean;
    TriggerPayment: boolean;
  }

  var triggerFormLevelValidation = submission.TriggerFormLevelValidation
  var triggerPayment = submission.TriggerPayment

  console.log("triggerFormLevelValidation", triggerFormLevelValidation);
  console.log("triggerPayment", triggerPayment);

  let isValid = false; 

  try {
    isValid = !triggerFormLevelValidation

    console.log("isValid", isValid);

    if (!isValid) {
      throw new Error(`YYY Form level validation deliberately triggered. triggerFormLevelValidation: ${triggerFormLevelValidation}`);
    }
    
    console.log("About to return from form-level-validation");
    return res.setStatusCode(200)

  } catch (e: any) {
    
    console.error("e.message", e.message);
    res.setStatusCode(400);
    return res.setPayload({
      message: e.message
    })

  }

};
