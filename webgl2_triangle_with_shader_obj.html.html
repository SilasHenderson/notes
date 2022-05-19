<canvas id='canvas'> </canvas>

<script>

// Load a drawing context for canvas element
let gl = canvas.getContext('webgl2');

// Vertex Shader: Numbers --> Position
let vertex_code = 
`
in vec2 pos;

void main() 
{
    gl_Position = vec4(pos, 0.0, 1.0);
}`;

// Fragment Shader: Position --> Color
let fragment_code = 
`
out vec4 color;

void main()
{ 
    color = vec4(0.0, 0.0, 0.0, 1.0);
}`;

// Compile the Shader
let shader = Shader(vertex_code, fragment_code);

// Load triangle vertex x,y positions to array buffer
let pos_buffer = Buffer(new Float32Array([-1,-1,  1,-1, 1,1]))

// Point 'in vec2 pos' to bound array buffer      
gl.vertexAttribPointer(shader.pos, 2, gl.FLOAT, false, 4*2, 0);

// Draw a triangle from first 3 vertices
gl.drawArrays(gl.TRIANGLES, 0, 3);

/* ---------------------- Utility Functions ------------------- */

function Buffer(data) {

    /*  Load Array Buffer with Array Data
        
        Input:  typed array
        Output: buffer object
    */

    let buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

    return buffer;
}

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
    fragment_code = "#version 300 es\n precision mediump float;\n" + fragment_code;

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

    let attrib_count = gl.getProgramParameter(shader.program, gl.ACTIVE_ATTRIBUTES); 
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
    console.log(gl.getProgramInfoLog(shader.program));
    for (let i in shader) console.log(i, shader[i]);

    return shader;
}
</script>
