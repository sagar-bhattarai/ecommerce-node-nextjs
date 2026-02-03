const zodValidator = (schema) =>  (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            // const formatted = result.error.format();

            const errors = {};

            for (const issue of result.error.issues) {
                const field = issue.path.join(".");

                if (!errors[field]) {
                    errors[field] = issue.message;
                }
            }

            return res.status(400).json({
                success: false,
                // formatted, 
                errors,
            });
        }
        req.body = result.data;
        next();
  }


export default zodValidator;