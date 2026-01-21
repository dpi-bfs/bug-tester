For experimenting with OB SDK using the "Bug Tester" Form;

* DEV: https://nswfoodauthority-dpi-forms-dev.cdn.oneblink.io/forms/18174
* TEST: https://forms-test.bfs.dpi.nsw.gov.au/forms/18182
* TRAIN: https://forms-train.bfs.dpi.nsw.gov.au/forms/18183
* PROD: https://forms.bfs.dpi.nsw.gov.au/forms/18184

Currently demo's form level validation.

1. Surf to the form
2. (Optionally) "Trigger payment" switch to off
3. "Trigger form level validation" switch to on (the default)
4. Submit
5. Observe message

> We could not submit your form
> Form level validation deliberately triggered. triggerFormLevelValidation: true

For general info about coding against the OB SDK see https://github.com/dpi-bfs/oneblink-info