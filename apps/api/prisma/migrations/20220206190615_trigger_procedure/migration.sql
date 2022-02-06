CREATE OR REPLACE FUNCTION update_palaced_function()
   RETURNS TRIGGER
   LANGUAGE PLPGSQL
AS $update_placed$
BEGIN
   IF NEW.package > 0 THEN
	 NEW.placed := true;
   END IF;
   RETURN NEW;
END;
$update_placed$;

CREATE OR REPLACE TRIGGER update_placed
BEFORE UPDATE
ON "UserDetails"
FOR EACH ROW
EXECUTE PROCEDURE update_palaced_function();

CREATE OR REPLACE PROCEDURE updatePackage(
    usn VARCHAR,
    ctc DOUBLE PRECISION
)
LANGUAGE PLPGSQL
AS $updatePackage$
BEGIN
    UPDATE "UserDetails"
    SET package = ctc
    WHERE "USN" = usn;

    COMMIT;
END;
$updatePackage$;
