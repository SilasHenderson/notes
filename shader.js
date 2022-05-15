function Shader(vertex_code, fragment_code) {

    /* Make a WebGL2 Shader

	   Input: vertex and fragment codes, minus the glsl 300 header

	   Output:
	      shader.program = shader program
	      shader.(var)   = shader variable
	      shader.(var)   = shader variable
	      etc.
    */

    let shader = {};
    shader.program = gl.createProgram();

    // build shader program

    let vertex_shader   = gl.createShader(gl.VERTEX_SHADER);    
    let fragment_shader = gl.createShader(gl.FRAGMENT_SHADER);

    vertex_code   = "#version 300 es\n" + vertex_code;
    fragment_code = "#version 300 es\n" + fragment_code;

    gl.shaderSource( vertex_shader,   vertex_code);
    gl.shaderSource( fragment_shader, fragment_code);
    gl.compileShader(vertex_shader);     
    gl.compileShader(fragment_shader);  

    gl.attachShader( shader.program, vertex_shader);
    gl.attachShader( shader.program, fragment_shader);
    gl.linkProgram(  shader.program); 
    gl.useProgram(   shader.program);  

    // retrieve attrib/uniform locations and store as
    // shader.(shader_variable_name)

    let attrib_count = gl.getProgramParameter(prog.program, gl.ACTIVE_ATTRIBUTES); 
    for (let i= 0; i < attrib_count; i++) {
        let attrib_name     = gl.getActiveAttrib(  shader.program, i).name;   
        let attrib_location = gl.getAttribLocation(shader.program, attrib_name);
        gl.enableVertexAttribArray(attrib_location);
        shader[attrib_name] = attrib_location;  
    }

    let uniform_count = gl.getProgramParameter( shader.program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < uniform_count; i++) {  
        let uniform_name     = gl.getActiveUniform(  shader.program, i).name;
        let uniform_location = gl.getUniformLocation(shader.program, uniform_name);
        shader[uniform_name] = uniform_location;
    }

    // log shader info for finding bugs

    console.log(gl.getShaderInfoLog(vertex_shader));
    console.log(gl.getShaderInfoLog(fragment_shader));
    console.log(gl.getProgramInfoLog(prog.program));
    for (let i in shader) console.log(i, shader[i]);

    return prog;
}
