var VG=Object.create;var{getPrototypeOf:LG,defineProperty:y7,getOwnPropertyNames:rK,getOwnPropertyDescriptor:BG}=Object,tK=Object.prototype.hasOwnProperty;var h5=(J,Q,Z)=>{Z=J!=null?VG(LG(J)):{};let $=Q||!J||!J.__esModule?y7(Z,"default",{value:J,enumerable:!0}):Z;for(let W of rK(J))if(!tK.call($,W))y7($,W,{get:()=>J[W],enumerable:!0});return $},aK=/*@__PURE__*/new WeakMap,x5=(J)=>{var Q=aK.get(J),Z;if(Q)return Q;if(Q=y7({},"__esModule",{value:!0}),J&&typeof J==="object"||typeof J==="function")rK(J).map(($)=>!tK.call(Q,$)&&y7(Q,$,{get:()=>J[$],enumerable:!(Z=BG(J,$))||Z.enumerable}));return aK.set(J,Q),Q},g5=(J,Q)=>()=>(Q||J((Q={exports:{}}).exports,Q),Q.exports);var zG=(J,Q)=>{for(var Z in Q)y7(J,Z,{get:Q[Z],enumerable:!0,configurable:!0,set:($)=>Q[Z]=()=>$})};var p5=(J,Q)=>()=>(J&&(Q=J(J=0)),Q);var m5=/*@__PURE__*/((J)=>typeof require!=="undefined"?require:typeof Proxy!=="undefined"?new Proxy(J,{get:(Q,Z)=>(typeof require!=="undefined"?require:Q)[Z]}):J)(function(J){if(typeof require!=="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+J+'" is not supported')});var dK={};zG(dK,{createCanvasElement:()=>PH,ZeroStencilOp:()=>bX,ZeroSlopeEnding:()=>CX,ZeroFactor:()=>TW,ZeroCurvatureEnding:()=>_X,WrapAroundEnding:()=>wX,WireframeGeometry:()=>aZ,WebXRController:()=>V7,WebGPUCoordinateSystem:()=>XU,WebGLUtils:()=>GG,WebGLRenderer:()=>qG,WebGLRenderTarget:()=>Z8,WebGLCubeRenderTarget:()=>yZ,WebGLCoordinateSystem:()=>CH,WebGLArrayRenderTarget:()=>TH,WebGL3DRenderTarget:()=>SH,VideoTexture:()=>lZ,VideoFrameTexture:()=>pH,VectorKeyframeTrack:()=>k9,Vector4:()=>eJ,Vector3:()=>A,Vector2:()=>i,VSMShadowMap:()=>G8,UnsignedShortType:()=>N7,UnsignedShort5551Type:()=>tQ,UnsignedShort4444Type:()=>rQ,UnsignedIntType:()=>C9,UnsignedInt5999Type:()=>YH,UnsignedInt248Type:()=>w9,UnsignedByteType:()=>y8,UniformsUtils:()=>gH,UniformsLib:()=>XJ,UniformsGroup:()=>NK,Uniform:()=>_$,Uint8ClampedBufferAttribute:()=>vH,Uint8BufferAttribute:()=>yH,Uint32BufferAttribute:()=>F6,Uint16BufferAttribute:()=>R6,UVMapping:()=>qX,TubeGeometry:()=>m6,TrianglesDrawMode:()=>TX,TriangleStripDrawMode:()=>SX,TriangleFanDrawMode:()=>jX,Triangle:()=>x0,TorusKnotGeometry:()=>p6,TorusGeometry:()=>g6,TimestampQuery:()=>UU,TextureUtils:()=>TU,TextureLoader:()=>tH,Texture:()=>E0,TetrahedronGeometry:()=>x6,TangentSpaceNormalMap:()=>RH,TOUCH:()=>XX,SubtractiveBlending:()=>iQ,SubtractEquation:()=>CW,StringKeyframeTrack:()=>h8,StreamReadUsage:()=>$U,StreamDrawUsage:()=>JU,StreamCopyUsage:()=>KU,StereoCamera:()=>ZK,StaticReadUsage:()=>QU,StaticDrawUsage:()=>tX,StaticCopyUsage:()=>WU,SrcColorFactor:()=>jW,SrcAlphaSaturateFactor:()=>pW,SrcAlphaFactor:()=>vW,SpriteMaterial:()=>V6,Sprite:()=>fZ,SpotLightHelper:()=>VK,SpotLight:()=>E$,SplineCurve:()=>P6,SphericalHarmonics3:()=>R$,Spherical:()=>RK,SphereGeometry:()=>C7,Sphere:()=>z0,Source:()=>P8,SkinnedMesh:()=>hZ,SkeletonHelper:()=>LK,Skeleton:()=>B6,ShortType:()=>KH,ShapeUtils:()=>X8,ShapePath:()=>yK,ShapeGeometry:()=>h6,Shape:()=>S8,ShadowMaterial:()=>rZ,ShaderMaterial:()=>i0,ShaderLib:()=>q8,ShaderChunk:()=>cJ,Scene:()=>vZ,SRGBTransfer:()=>Y0,SRGBColorSpace:()=>kH,SIGNED_RED_RGTC1_Format:()=>_Z,SIGNED_RED_GREEN_RGTC2_Format:()=>wZ,RingGeometry:()=>b6,ReverseSubtractEquation:()=>wW,ReplaceStencilOp:()=>xX,RepeatWrapping:()=>QH,RenderTargetArray:()=>EK,RenderTarget3D:()=>GK,RenderTarget:()=>R7,ReinhardToneMapping:()=>oW,RedIntegerFormat:()=>eQ,RedFormat:()=>NH,RectAreaLight:()=>O$,Raycaster:()=>OK,Ray:()=>r8,RawShaderMaterial:()=>tZ,RGIntegerFormat:()=>JZ,RGFormat:()=>qH,RGDepthPacking:()=>fX,RGB_S3TC_DXT1_Format:()=>E6,RGB_PVRTC_4BPPV1_Format:()=>ZZ,RGB_PVRTC_2BPPV1_Format:()=>$Z,RGB_ETC2_Format:()=>YZ,RGB_ETC1_Format:()=>KZ,RGB_BPTC_UNSIGNED_Format:()=>IZ,RGB_BPTC_SIGNED_Format:()=>zZ,RGBIntegerFormat:()=>kX,RGBFormat:()=>UH,RGBDepthPacking:()=>vX,RGBA_S3TC_DXT5_Format:()=>D6,RGBA_S3TC_DXT3_Format:()=>q6,RGBA_S3TC_DXT1_Format:()=>N6,RGBA_PVRTC_4BPPV1_Format:()=>WZ,RGBA_PVRTC_2BPPV1_Format:()=>HZ,RGBA_ETC2_EAC_Format:()=>XZ,RGBA_BPTC_Format:()=>O6,RGBA_ASTC_8x8_Format:()=>RZ,RGBA_ASTC_8x6_Format:()=>OZ,RGBA_ASTC_8x5_Format:()=>DZ,RGBA_ASTC_6x6_Format:()=>qZ,RGBA_ASTC_6x5_Format:()=>NZ,RGBA_ASTC_5x5_Format:()=>EZ,RGBA_ASTC_5x4_Format:()=>GZ,RGBA_ASTC_4x4_Format:()=>UZ,RGBA_ASTC_12x12_Format:()=>BZ,RGBA_ASTC_12x10_Format:()=>LZ,RGBA_ASTC_10x8_Format:()=>MZ,RGBA_ASTC_10x6_Format:()=>kZ,RGBA_ASTC_10x5_Format:()=>FZ,RGBA_ASTC_10x10_Format:()=>VZ,RGBAIntegerFormat:()=>QZ,RGBAFormat:()=>N8,RGBADepthPacking:()=>OH,REVISION:()=>LW,RED_RGTC1_Format:()=>DH,RED_GREEN_RGTC2_Format:()=>CZ,QuaternionLinearInterpolant:()=>X$,QuaternionKeyframeTrack:()=>b9,Quaternion:()=>j0,QuadraticBezierCurve3:()=>A6,QuadraticBezierCurve:()=>w6,PropertyMixer:()=>z$,PropertyBinding:()=>tJ,PositionalAudio:()=>WK,PolyhedronGeometry:()=>f8,PolarGridHelper:()=>_K,PointsMaterial:()=>z6,Points:()=>mZ,PointLightHelper:()=>BK,PointLight:()=>N$,PlaneHelper:()=>TK,PlaneGeometry:()=>v9,Plane:()=>O8,PerspectiveCamera:()=>M0,Path:()=>O9,PMREMGenerator:()=>S$,PCFSoftShadowMap:()=>IW,PCFShadowMap:()=>nQ,OrthographicCamera:()=>w7,OneMinusSrcColorFactor:()=>yW,OneMinusSrcAlphaFactor:()=>fW,OneMinusDstColorFactor:()=>gW,OneMinusDstAlphaFactor:()=>hW,OneMinusConstantColorFactor:()=>lW,OneMinusConstantAlphaFactor:()=>uW,OneFactor:()=>SW,OctahedronGeometry:()=>_7,ObjectSpaceNormalMap:()=>FH,ObjectLoader:()=>eH,Object3D:()=>J0,NumberKeyframeTrack:()=>F9,NotEqualStencilFunc:()=>oX,NotEqualDepth:()=>K6,NotEqualCompare:()=>zH,NormalBlending:()=>X7,NormalAnimationBlendMode:()=>AX,NoToneMapping:()=>k8,NoColorSpace:()=>a8,NoBlending:()=>j8,NeverStencilFunc:()=>uX,NeverDepth:()=>J6,NeverCompare:()=>MH,NeutralToneMapping:()=>JH,NearestMipmapNearestFilter:()=>WH,NearestMipmapLinearFilter:()=>E7,NearestMipMapNearestFilter:()=>DX,NearestMipMapLinearFilter:()=>OX,NearestFilter:()=>I9,MultiplyOperation:()=>cW,MultiplyBlending:()=>oQ,MixOperation:()=>nW,MirroredRepeatWrapping:()=>$H,MinEquation:()=>AW,MeshToonMaterial:()=>Q$,MeshStandardMaterial:()=>l6,MeshPhysicalMaterial:()=>eZ,MeshPhongMaterial:()=>J$,MeshNormalMaterial:()=>Z$,MeshMatcapMaterial:()=>W$,MeshLambertMaterial:()=>$$,MeshDistanceMaterial:()=>u6,MeshDepthMaterial:()=>d6,MeshBasicMaterial:()=>M8,Mesh:()=>O0,MaxEquation:()=>PW,Matrix4:()=>jJ,Matrix3:()=>pJ,Matrix2:()=>C$,MathUtils:()=>GU,MaterialLoader:()=>i6,Material:()=>I0,MOUSE:()=>YX,LuminanceFormat:()=>GH,LuminanceAlphaFormat:()=>EH,LoopRepeat:()=>VX,LoopPingPong:()=>LX,LoopOnce:()=>MX,LoadingManager:()=>s6,LoaderUtils:()=>e7,Loader:()=>v0,LinearTransfer:()=>AZ,LinearToneMapping:()=>iW,LinearSRGBColorSpace:()=>O7,LinearMipmapNearestFilter:()=>U6,LinearMipmapLinearFilter:()=>_9,LinearMipMapNearestFilter:()=>RX,LinearMipMapLinearFilter:()=>FX,LinearInterpolant:()=>c6,LinearFilter:()=>o8,LineSegments:()=>$8,LineLoop:()=>pZ,LineDashedMaterial:()=>H$,LineCurve3:()=>nZ,LineCurve:()=>C6,LineBasicMaterial:()=>A0,Line3:()=>MK,Line:()=>F8,LightProbe:()=>F$,Light:()=>V8,LessStencilFunc:()=>cX,LessEqualStencilFunc:()=>sX,LessEqualDepth:()=>U7,LessEqualCompare:()=>PZ,LessDepth:()=>Z6,LessCompare:()=>VH,Layers:()=>k7,LatheGeometry:()=>I7,LOD:()=>bZ,KeyframeTrack:()=>a0,KeepStencilOp:()=>hX,InvertStencilOp:()=>dX,InterpolateSmooth:()=>IX,InterpolateLinear:()=>zX,InterpolateDiscrete:()=>BX,Interpolant:()=>f9,InterleavedBufferAttribute:()=>n8,InterleavedBuffer:()=>L7,IntType:()=>aQ,Int8BufferAttribute:()=>jH,Int32BufferAttribute:()=>bH,Int16BufferAttribute:()=>fH,InstancedMesh:()=>xZ,InstancedInterleavedBuffer:()=>qK,InstancedBufferGeometry:()=>k$,InstancedBufferAttribute:()=>s8,IncrementWrapStencilOp:()=>mX,IncrementStencilOp:()=>gX,ImageUtils:()=>SZ,ImageLoader:()=>V9,ImageBitmapLoader:()=>JK,IcosahedronGeometry:()=>f6,HemisphereLightHelper:()=>zK,HemisphereLight:()=>U$,HalfFloatType:()=>q7,Group:()=>c8,GridHelper:()=>IK,GreaterStencilFunc:()=>iX,GreaterEqualStencilFunc:()=>aX,GreaterEqualDepth:()=>W6,GreaterEqualCompare:()=>IH,GreaterDepth:()=>H6,GreaterCompare:()=>BH,GLSL3:()=>TZ,GLSL1:()=>YU,GLBufferAttribute:()=>DK,Frustum:()=>j9,FrontSide:()=>L9,FramebufferTexture:()=>mH,FogExp2:()=>k6,Fog:()=>M6,FloatType:()=>v8,Float32BufferAttribute:()=>BJ,Float16BufferAttribute:()=>hH,FileLoader:()=>U8,ExtrudeGeometry:()=>v6,EventDispatcher:()=>Q8,Euler:()=>l0,EquirectangularRefractionMapping:()=>X6,EquirectangularReflectionMapping:()=>Y6,EqualStencilFunc:()=>nX,EqualDepth:()=>$6,EqualCompare:()=>LH,EllipseCurve:()=>z7,EdgesGeometry:()=>iZ,DynamicReadUsage:()=>ZU,DynamicDrawUsage:()=>eX,DynamicCopyUsage:()=>HU,DstColorFactor:()=>xW,DstAlphaFactor:()=>bW,DoubleSide:()=>E8,DodecahedronGeometry:()=>y6,DiscreteInterpolant:()=>Y$,DirectionalLightHelper:()=>CK,DirectionalLight:()=>q$,DetachedBindMode:()=>NX,DepthTexture:()=>I6,DepthStencilFormat:()=>D7,DepthFormat:()=>G6,DefaultLoadingManager:()=>sH,DecrementWrapStencilOp:()=>lX,DecrementStencilOp:()=>pX,DataUtils:()=>OU,DataTextureLoader:()=>rH,DataTexture:()=>J8,DataArrayTexture:()=>P9,Data3DTexture:()=>F7,Cylindrical:()=>FK,CylinderGeometry:()=>y9,CustomToneMapping:()=>tW,CustomBlending:()=>_W,CurvePath:()=>sZ,Curve:()=>o0,CullFaceNone:()=>BW,CullFaceFrontBack:()=>UX,CullFaceFront:()=>zW,CullFaceBack:()=>cQ,CubicInterpolant:()=>K$,CubicBezierCurve3:()=>cZ,CubicBezierCurve:()=>_6,CubeUVReflectionMapping:()=>G7,CubeTextureLoader:()=>aH,CubeTexture:()=>S9,CubeRefractionMapping:()=>i8,CubeReflectionMapping:()=>z9,CubeCamera:()=>jZ,Controls:()=>vK,ConstantColorFactor:()=>mW,ConstantAlphaFactor:()=>dW,ConeGeometry:()=>j6,CompressedTextureLoader:()=>oH,CompressedTexture:()=>B7,CompressedCubeTexture:()=>dH,CompressedArrayTexture:()=>lH,ColorManagement:()=>rJ,ColorKeyframeTrack:()=>n6,Color:()=>qJ,Clock:()=>L$,ClampToEdgeWrapping:()=>ZH,CircleGeometry:()=>S6,CineonToneMapping:()=>aW,CatmullRomCurve3:()=>uZ,CapsuleGeometry:()=>T6,CanvasTexture:()=>uH,CameraHelper:()=>wK,Camera:()=>M7,Cache:()=>R8,ByteType:()=>HH,BufferGeometryLoader:()=>M$,BufferGeometry:()=>dJ,BufferAttribute:()=>K0,BoxHelper:()=>AK,BoxGeometry:()=>t8,Box3Helper:()=>PK,Box3:()=>w0,Box2:()=>kK,BooleanKeyframeTrack:()=>b8,Bone:()=>L6,BatchedMesh:()=>gZ,BasicShadowMap:()=>GX,BasicDepthPacking:()=>yX,BackSide:()=>d0,AxesHelper:()=>jK,AudioLoader:()=>QK,AudioListener:()=>$K,AudioContext:()=>o6,AudioAnalyser:()=>HK,Audio:()=>B$,AttachedBindMode:()=>EX,ArrowHelper:()=>SK,ArrayCamera:()=>V$,ArcCurve:()=>dZ,AnimationUtils:()=>zU,AnimationObjectGroup:()=>XK,AnimationMixer:()=>UK,AnimationLoader:()=>iH,AnimationClip:()=>M9,AnimationAction:()=>I$,AmbientLight:()=>D$,AlwaysStencilFunc:()=>rX,AlwaysDepth:()=>Q6,AlwaysCompare:()=>_H,AlphaFormat:()=>XH,AgXToneMapping:()=>eW,AdditiveBlending:()=>sQ,AdditiveAnimationBlendMode:()=>PX,AddOperation:()=>sW,AddEquation:()=>B9,ACESFilmicToneMapping:()=>rW});var LW="173",YX={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},XX={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},BW=0,cQ=1,zW=2,UX=3,GX=0,nQ=1,IW=2,G8=3,L9=0,d0=1,E8=2,j8=0,X7=1,sQ=2,iQ=3,oQ=4,_W=5,B9=100,CW=101,wW=102,AW=103,PW=104,TW=200,SW=201,jW=202,yW=203,vW=204,fW=205,bW=206,hW=207,xW=208,gW=209,pW=210,mW=211,lW=212,dW=213,uW=214,J6=0,Q6=1,Z6=2,U7=3,$6=4,W6=5,H6=6,K6=7,cW=0,nW=1,sW=2,k8=0,iW=1,oW=2,aW=3,rW=4,tW=5,eW=6,JH=7,EX="attached",NX="detached",qX=300,z9=301,i8=302,Y6=303,X6=304,G7=306,QH=1000,ZH=1001,$H=1002,I9=1003,WH=1004,DX=1004,E7=1005,OX=1005,o8=1006,U6=1007,RX=1007,_9=1008,FX=1008,y8=1009,HH=1010,KH=1011,N7=1012,aQ=1013,C9=1014,v8=1015,q7=1016,rQ=1017,tQ=1018,w9=1020,YH=35902,XH=1021,UH=1022,N8=1023,GH=1024,EH=1025,G6=1026,D7=1027,NH=1028,eQ=1029,qH=1030,JZ=1031,kX=1032,QZ=1033,E6=33776,N6=33777,q6=33778,D6=33779,ZZ=35840,$Z=35841,WZ=35842,HZ=35843,KZ=36196,YZ=37492,XZ=37496,UZ=37808,GZ=37809,EZ=37810,NZ=37811,qZ=37812,DZ=37813,OZ=37814,RZ=37815,FZ=37816,kZ=37817,MZ=37818,VZ=37819,LZ=37820,BZ=37821,O6=36492,zZ=36494,IZ=36495,DH=36283,_Z=36284,CZ=36285,wZ=36286,MX=2200,VX=2201,LX=2202,BX=2300,zX=2301,IX=2302,_X=2400,CX=2401,wX=2402,AX=2500,PX=2501,TX=0,SX=1,jX=2,yX=3200,OH=3201,vX=3202,fX=3203,RH=0,FH=1,a8="",kH="srgb",O7="srgb-linear",AZ="linear",Y0="srgb",bX=0,hX=7680,xX=7681,gX=7682,pX=7683,mX=34055,lX=34056,dX=5386,uX=512,cX=513,nX=514,sX=515,iX=516,oX=517,aX=518,rX=519,MH=512,VH=513,LH=514,PZ=515,BH=516,zH=517,IH=518,_H=519,tX=35044,eX=35048,JU=35040,QU=35045,ZU=35049,$U=35041,WU=35046,HU=35050,KU=35042,YU="100",TZ="300 es",CH=2000,XU=2001,UU={COMPUTE:"compute",RENDER:"render"};class Q8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(Q)===-1)Z[J].push(Q)}hasEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(Q)!==-1}removeEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return;let $=Z[J];if($!==void 0){let W=$.indexOf(Q);if(W!==-1)$.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J.type];if(Z!==void 0){J.target=this;let $=Z.slice(0);for(let W=0,H=$.length;W<H;W++)$[W].call(this,J);J.target=null}}}var P0=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eK=1234567,q9=Math.PI/180,D9=180/Math.PI;function s0(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,$=Math.random()*4294967295|0;return(P0[J&255]+P0[J>>8&255]+P0[J>>16&255]+P0[J>>24&255]+"-"+P0[Q&255]+P0[Q>>8&255]+"-"+P0[Q>>16&15|64]+P0[Q>>24&255]+"-"+P0[Z&63|128]+P0[Z>>8&255]+"-"+P0[Z>>16&255]+P0[Z>>24&255]+P0[$&255]+P0[$>>8&255]+P0[$>>16&255]+P0[$>>24&255]).toLowerCase()}function gJ(J,Q,Z){return Math.max(Q,Math.min(Z,J))}function wH(J,Q){return(J%Q+Q)%Q}function IG(J,Q,Z,$,W){return $+(J-Q)*(W-$)/(Z-Q)}function _G(J,Q,Z){if(J!==Q)return(Z-J)/(Q-J);else return 0}function s7(J,Q,Z){return(1-Z)*J+Z*Q}function CG(J,Q,Z,$){return s7(J,Q,1-Math.exp(-Z*$))}function wG(J,Q=1){return Q-Math.abs(wH(J,Q*2)-Q)}function AG(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*(3-2*J)}function PG(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*J*(J*(J*6-15)+10)}function TG(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function SG(J,Q){return J+Math.random()*(Q-J)}function jG(J){return J*(0.5-Math.random())}function yG(J){if(J!==void 0)eK=J;let Q=eK+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function vG(J){return J*q9}function fG(J){return J*D9}function bG(J){return(J&J-1)===0&&J!==0}function hG(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function xG(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function gG(J,Q,Z,$,W){let{cos:H,sin:K}=Math,Y=H(Z/2),X=K(Z/2),U=H((Q+$)/2),G=K((Q+$)/2),E=H((Q-$)/2),N=K((Q-$)/2),q=H(($-Q)/2),R=K(($-Q)/2);switch(W){case"XYX":J.set(Y*G,X*E,X*N,Y*U);break;case"YZY":J.set(X*N,Y*G,X*E,Y*U);break;case"ZXZ":J.set(X*E,X*N,Y*G,Y*U);break;case"XZX":J.set(Y*G,X*R,X*q,Y*U);break;case"YXY":J.set(X*q,Y*G,X*R,Y*U);break;case"ZYZ":J.set(X*R,X*q,Y*G,Y*U);break;default:}}function h0(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw new Error("Invalid component type.")}}function lJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw new Error("Invalid component type.")}}var GU={DEG2RAD:q9,RAD2DEG:D9,generateUUID:s0,clamp:gJ,euclideanModulo:wH,mapLinear:IG,inverseLerp:_G,lerp:s7,damp:CG,pingpong:wG,smoothstep:AG,smootherstep:PG,randInt:TG,randFloat:SG,randFloatSpread:jG,seededRandom:yG,degToRad:vG,radToDeg:fG,isPowerOfTwo:bG,ceilPowerOfTwo:hG,floorPowerOfTwo:xG,setQuaternionFromProperEuler:gG,normalize:lJ,denormalize:h0};class i{constructor(J=0,Q=0){i.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,Z=this.y,$=J.elements;return this.x=$[0]*Q+$[3]*Z+$[6],this.y=$[1]*Q+$[4]*Z+$[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=gJ(this.x,J.x,Q.x),this.y=gJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=gJ(this.x,J,Q),this.y=gJ(this.y,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(gJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(gJ(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y;return Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let Z=Math.cos(Q),$=Math.sin(Q),W=this.x-J.x,H=this.y-J.y;return this.x=W*Z-H*$+J.x,this.y=W*$+H*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pJ{constructor(J,Q,Z,$,W,H,K,Y,X){if(pJ.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,Z,$,W,H,K,Y,X)}set(J,Q,Z,$,W,H,K,Y,X){let U=this.elements;return U[0]=J,U[1]=$,U[2]=K,U[3]=Q,U[4]=W,U[5]=Y,U[6]=Z,U[7]=H,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],this}extractBasis(J,Q,Z){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,$=Q.elements,W=this.elements,H=Z[0],K=Z[3],Y=Z[6],X=Z[1],U=Z[4],G=Z[7],E=Z[2],N=Z[5],q=Z[8],R=$[0],F=$[3],O=$[6],D=$[1],M=$[4],k=$[7],I=$[2],P=$[5],_=$[8];return W[0]=H*R+K*D+Y*I,W[3]=H*F+K*M+Y*P,W[6]=H*O+K*k+Y*_,W[1]=X*R+U*D+G*I,W[4]=X*F+U*M+G*P,W[7]=X*O+U*k+G*_,W[2]=E*R+N*D+q*I,W[5]=E*F+N*M+q*P,W[8]=E*O+N*k+q*_,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],H=J[4],K=J[5],Y=J[6],X=J[7],U=J[8];return Q*H*U-Q*K*X-Z*W*U+Z*K*Y+$*W*X-$*H*Y}invert(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],H=J[4],K=J[5],Y=J[6],X=J[7],U=J[8],G=U*H-K*X,E=K*Y-U*W,N=X*W-H*Y,q=Q*G+Z*E+$*N;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/q;return J[0]=G*R,J[1]=($*X-U*Z)*R,J[2]=(K*Z-$*H)*R,J[3]=E*R,J[4]=(U*Q-$*Y)*R,J[5]=($*W-K*Q)*R,J[6]=N*R,J[7]=(Z*Y-X*Q)*R,J[8]=(H*Q-Z*W)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,Z,$,W,H,K){let Y=Math.cos(W),X=Math.sin(W);return this.set(Z*Y,Z*X,-Z*(Y*H+X*K)+H+J,-$*X,$*Y,-$*(-X*H+Y*K)+K+Q,0,0,1),this}scale(J,Q){return this.premultiply(f$.makeScale(J,Q)),this}rotate(J){return this.premultiply(f$.makeRotation(-J)),this}translate(J,Q){return this.premultiply(f$.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,Z,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,Z=J.elements;for(let $=0;$<9;$++)if(Q[$]!==Z[$])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var f$=/*@__PURE__*/new pJ;function AH(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}var pG={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function W7(J,Q){return new pG[J](Q)}function Y7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function PH(){let J=Y7("canvas");return J.style.display="block",J}var JY={};function A9(J){if(J in JY)return;JY[J]=!0}function EU(J,Q,Z){return new Promise(function($,W){function H(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(H,Z);break;default:$()}}setTimeout(H,Z)})}function NU(J){let Q=J.elements;Q[2]=0.5*Q[2]+0.5*Q[3],Q[6]=0.5*Q[6]+0.5*Q[7],Q[10]=0.5*Q[10]+0.5*Q[11],Q[14]=0.5*Q[14]+0.5*Q[15]}function qU(J){let Q=J.elements;if(Q[11]===-1)Q[10]=-Q[10]-1,Q[14]=-Q[14];else Q[10]=-Q[10],Q[14]=-Q[14]+1}var QY=/*@__PURE__*/new pJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),ZY=/*@__PURE__*/new pJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function mG(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,H,K){if(this.enabled===!1||H===K||!H||!K)return W;if(this.spaces[H].transfer==="srgb")W.r=T8(W.r),W.g=T8(W.g),W.b=T8(W.b);if(this.spaces[H].primaries!==this.spaces[K].primaries)W.applyMatrix3(this.spaces[H].toXYZ),W.applyMatrix3(this.spaces[K].fromXYZ);if(this.spaces[K].transfer==="srgb")W.r=K7(W.r),W.g=K7(W.g),W.b=K7(W.b);return W},fromWorkingColorSpace:function(W,H){return this.convert(W,this.workingColorSpace,H)},toWorkingColorSpace:function(W,H){return this.convert(W,H,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getLuminanceCoefficients:function(W,H=this.workingColorSpace){return W.fromArray(this.spaces[H].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,H,K){return W.copy(this.spaces[H].toXYZ).multiply(this.spaces[K].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],$=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:$,transfer:"linear",toXYZ:QY,fromXYZ:ZY,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:$,transfer:"srgb",toXYZ:QY,fromXYZ:ZY,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var rJ=/*@__PURE__*/mG();function T8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function K7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var m9;class SZ{static getDataURL(J){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement==="undefined")return J.src;let Q;if(J instanceof HTMLCanvasElement)Q=J;else{if(m9===void 0)m9=Y7("canvas");m9.width=J.width,m9.height=J.height;let Z=m9.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);Q=m9}return Q.toDataURL("image/png")}static sRGBToLinear(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){let Q=Y7("canvas");Q.width=J.width,Q.height=J.height;let Z=Q.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let $=Z.getImageData(0,0,J.width,J.height),W=$.data;for(let H=0;H<W.length;H++)W[H]=T8(W[H]/255)*255;return Z.putImageData($,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let Z=0;Z<Q.length;Z++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[Z]=Math.floor(T8(Q[Z]/255)*255);else Q[Z]=T8(Q[Z]);return{data:Q,width:J.width,height:J.height}}else return J}}var lG=0;class P8{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lG++}),this.uuid=s0(),this.data=J,this.dataReady=!0,this.version=0}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},$=this.data;if($!==null){let W;if(Array.isArray($)){W=[];for(let H=0,K=$.length;H<K;H++)if($[H].isDataTexture)W.push(b$($[H].image));else W.push(b$($[H]))}else W=b$($);Z.url=W}if(!Q)J.images[this.uuid]=Z;return Z}}function b$(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap)return SZ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return{}}var dG=0;class E0 extends Q8{constructor(J=E0.DEFAULT_IMAGE,Q=E0.DEFAULT_MAPPING,Z=1001,$=1001,W=1006,H=1008,K=1023,Y=1009,X=E0.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:dG++}),this.uuid=s0(),this.name="",this.source=new P8(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=Z,this.wrapT=$,this.magFilter=W,this.minFilter=H,this.anisotropy=X,this.format=K,this.internalFormat=null,this.type=Y,this.offset=new i(0,0),this.repeat=new i(1,1),this.center=new i(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!Q)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}E0.DEFAULT_IMAGE=null;E0.DEFAULT_MAPPING=300;E0.DEFAULT_ANISOTROPY=1;class eJ{constructor(J=0,Q=0,Z=0,$=1){eJ.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=Z,this.w=$}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,Z,$){return this.x=J,this.y=Q,this.z=Z,this.w=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,Z=this.y,$=this.z,W=this.w,H=J.elements;return this.x=H[0]*Q+H[4]*Z+H[8]*$+H[12]*W,this.y=H[1]*Q+H[5]*Z+H[9]*$+H[13]*W,this.z=H[2]*Q+H[6]*Z+H[10]*$+H[14]*W,this.w=H[3]*Q+H[7]*Z+H[11]*$+H[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,Z,$,W,H=0.01,K=0.1,Y=J.elements,X=Y[0],U=Y[4],G=Y[8],E=Y[1],N=Y[5],q=Y[9],R=Y[2],F=Y[6],O=Y[10];if(Math.abs(U-E)<0.01&&Math.abs(G-R)<0.01&&Math.abs(q-F)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+R)<0.1&&Math.abs(q+F)<0.1&&Math.abs(X+N+O-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let M=(X+1)/2,k=(N+1)/2,I=(O+1)/2,P=(U+E)/4,_=(G+R)/4,w=(q+F)/4;if(M>k&&M>I)if(M<0.01)Z=0,$=0.707106781,W=0.707106781;else Z=Math.sqrt(M),$=P/Z,W=_/Z;else if(k>I)if(k<0.01)Z=0.707106781,$=0,W=0.707106781;else $=Math.sqrt(k),Z=P/$,W=w/$;else if(I<0.01)Z=0.707106781,$=0.707106781,W=0;else W=Math.sqrt(I),Z=_/W,$=w/W;return this.set(Z,$,W,Q),this}let D=Math.sqrt((F-q)*(F-q)+(G-R)*(G-R)+(E-U)*(E-U));if(Math.abs(D)<0.001)D=1;return this.x=(F-q)/D,this.y=(G-R)/D,this.z=(E-U)/D,this.w=Math.acos((X+N+O-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=gJ(this.x,J.x,Q.x),this.y=gJ(this.y,J.y,Q.y),this.z=gJ(this.z,J.z,Q.z),this.w=gJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=gJ(this.x,J,Q),this.y=gJ(this.y,J,Q),this.z=gJ(this.z,J,Q),this.w=gJ(this.w,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(gJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this.w=J.w+(Q.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R7 extends Q8{constructor(J=1,Q=1,Z={}){super();this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=1,this.scissor=new eJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new eJ(0,0,J,Q);let $={width:J,height:Q,depth:1};Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},Z);let W=new E0($,Z.mapping,Z.wrapS,Z.wrapT,Z.magFilter,Z.minFilter,Z.format,Z.type,Z.anisotropy,Z.colorSpace);W.flipY=!1,W.generateMipmaps=Z.generateMipmaps,W.internalFormat=Z.internalFormat,this.textures=[];let H=Z.count;for(let K=0;K<H;K++)this.textures[K]=W.clone(),this.textures[K].isRenderTargetTexture=!0,this.textures[K].renderTarget=this;this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,Z=1){if(this.width!==J||this.height!==Q||this.depth!==Z){this.width=J,this.height=Q,this.depth=Z;for(let $=0,W=this.textures.length;$<W;$++)this.textures[$].image.width=J,this.textures[$].image.height=Q,this.textures[$].image.depth=Z;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Z=0,$=J.textures.length;Z<$;Z++)this.textures[Z]=J.textures[Z].clone(),this.textures[Z].isRenderTargetTexture=!0,this.textures[Z].renderTarget=this;let Q=Object.assign({},J.texture.image);if(this.texture.source=new P8(Q),this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Z8 extends R7{constructor(J=1,Q=1,Z={}){super(J,Q,Z);this.isWebGLRenderTarget=!0}}class P9 extends E0{constructor(J=null,Q=1,Z=1,$=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:Z,depth:$},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=/*@__PURE__*/new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class TH extends Z8{constructor(J=1,Q=1,Z=1,$={}){super(J,Q,$);this.isWebGLArrayRenderTarget=!0,this.depth=Z,this.texture=new P9(null,J,Q,Z),this.texture.isRenderTargetTexture=!0}}class F7 extends E0{constructor(J=null,Q=1,Z=1,$=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:Z,depth:$},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class SH extends Z8{constructor(J=1,Q=1,Z=1,$={}){super(J,Q,$);this.isWebGL3DRenderTarget=!0,this.depth=Z,this.texture=new F7(null,J,Q,Z),this.texture.isRenderTargetTexture=!0}}class j0{constructor(J=0,Q=0,Z=0,$=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=Z,this._w=$}static slerpFlat(J,Q,Z,$,W,H,K){let Y=Z[$+0],X=Z[$+1],U=Z[$+2],G=Z[$+3],E=W[H+0],N=W[H+1],q=W[H+2],R=W[H+3];if(K===0){J[Q+0]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G;return}if(K===1){J[Q+0]=E,J[Q+1]=N,J[Q+2]=q,J[Q+3]=R;return}if(G!==R||Y!==E||X!==N||U!==q){let F=1-K,O=Y*E+X*N+U*q+G*R,D=O>=0?1:-1,M=1-O*O;if(M>Number.EPSILON){let I=Math.sqrt(M),P=Math.atan2(I,O*D);F=Math.sin(F*P)/I,K=Math.sin(K*P)/I}let k=K*D;if(Y=Y*F+E*k,X=X*F+N*k,U=U*F+q*k,G=G*F+R*k,F===1-K){let I=1/Math.sqrt(Y*Y+X*X+U*U+G*G);Y*=I,X*=I,U*=I,G*=I}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,Z,$,W,H){let K=Z[$],Y=Z[$+1],X=Z[$+2],U=Z[$+3],G=W[H],E=W[H+1],N=W[H+2],q=W[H+3];return J[Q]=K*q+U*G+Y*N-X*E,J[Q+1]=Y*q+U*E+X*G-K*N,J[Q+2]=X*q+U*N+K*E-Y*G,J[Q+3]=U*q-K*G-Y*E-X*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,Z,$){return this._x=J,this._y=Q,this._z=Z,this._w=$,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:Z,_y:$,_z:W,_order:H}=J,K=Math.cos,Y=Math.sin,X=K(Z/2),U=K($/2),G=K(W/2),E=Y(Z/2),N=Y($/2),q=Y(W/2);switch(H){case"XYZ":this._x=E*U*G+X*N*q,this._y=X*N*G-E*U*q,this._z=X*U*q+E*N*G,this._w=X*U*G-E*N*q;break;case"YXZ":this._x=E*U*G+X*N*q,this._y=X*N*G-E*U*q,this._z=X*U*q-E*N*G,this._w=X*U*G+E*N*q;break;case"ZXY":this._x=E*U*G-X*N*q,this._y=X*N*G+E*U*q,this._z=X*U*q+E*N*G,this._w=X*U*G-E*N*q;break;case"ZYX":this._x=E*U*G-X*N*q,this._y=X*N*G+E*U*q,this._z=X*U*q-E*N*G,this._w=X*U*G+E*N*q;break;case"YZX":this._x=E*U*G+X*N*q,this._y=X*N*G+E*U*q,this._z=X*U*q-E*N*G,this._w=X*U*G-E*N*q;break;case"XZY":this._x=E*U*G-X*N*q,this._y=X*N*G-E*U*q,this._z=X*U*q+E*N*G,this._w=X*U*G+E*N*q;break;default:}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let Z=Q/2,$=Math.sin(Z);return this._x=J.x*$,this._y=J.y*$,this._z=J.z*$,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,Z=Q[0],$=Q[4],W=Q[8],H=Q[1],K=Q[5],Y=Q[9],X=Q[2],U=Q[6],G=Q[10],E=Z+K+G;if(E>0){let N=0.5/Math.sqrt(E+1);this._w=0.25/N,this._x=(U-Y)*N,this._y=(W-X)*N,this._z=(H-$)*N}else if(Z>K&&Z>G){let N=2*Math.sqrt(1+Z-K-G);this._w=(U-Y)/N,this._x=0.25*N,this._y=($+H)/N,this._z=(W+X)/N}else if(K>G){let N=2*Math.sqrt(1+K-Z-G);this._w=(W-X)/N,this._x=($+H)/N,this._y=0.25*N,this._z=(Y+U)/N}else{let N=2*Math.sqrt(1+G-Z-K);this._w=(H-$)/N,this._x=(W+X)/N,this._y=(Y+U)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let Z=J.dot(Q)+1;if(Z<Number.EPSILON)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(gJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let Z=this.angleTo(J);if(Z===0)return this;let $=Math.min(1,Q/Z);return this.slerp(J,$),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:Z,_y:$,_z:W,_w:H}=J,K=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=Z*U+H*K+$*X-W*Y,this._y=$*U+H*Y+W*K-Z*X,this._z=W*U+H*X+Z*Y-$*K,this._w=H*U-Z*K-$*Y-W*X,this._onChangeCallback(),this}slerp(J,Q){if(Q===0)return this;if(Q===1)return this.copy(J);let Z=this._x,$=this._y,W=this._z,H=this._w,K=H*J._w+Z*J._x+$*J._y+W*J._z;if(K<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,K=-K;else this.copy(J);if(K>=1)return this._w=H,this._x=Z,this._y=$,this._z=W,this;let Y=1-K*K;if(Y<=Number.EPSILON){let N=1-Q;return this._w=N*H+Q*this._w,this._x=N*Z+Q*this._x,this._y=N*$+Q*this._y,this._z=N*W+Q*this._z,this.normalize(),this}let X=Math.sqrt(Y),U=Math.atan2(X,K),G=Math.sin((1-Q)*U)/X,E=Math.sin(Q*U)/X;return this._w=H*G+this._w*E,this._x=Z*G+this._x*E,this._y=$*G+this._y*E,this._z=W*G+this._z*E,this._onChangeCallback(),this}slerpQuaternions(J,Q,Z){return this.copy(J).slerp(Q,Z)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),Z=Math.random(),$=Math.sqrt(1-Z),W=Math.sqrt(Z);return this.set($*Math.sin(J),$*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(J=0,Q=0,Z=0){A.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=Z}set(J,Q,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=Q,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion($Y.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion($Y.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*Z+W[6]*$,this.y=W[1]*Q+W[4]*Z+W[7]*$,this.z=W[2]*Q+W[5]*Z+W[8]*$,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements,H=1/(W[3]*Q+W[7]*Z+W[11]*$+W[15]);return this.x=(W[0]*Q+W[4]*Z+W[8]*$+W[12])*H,this.y=(W[1]*Q+W[5]*Z+W[9]*$+W[13])*H,this.z=(W[2]*Q+W[6]*Z+W[10]*$+W[14])*H,this}applyQuaternion(J){let Q=this.x,Z=this.y,$=this.z,W=J.x,H=J.y,K=J.z,Y=J.w,X=2*(H*$-K*Z),U=2*(K*Q-W*$),G=2*(W*Z-H*Q);return this.x=Q+Y*X+H*G-K*U,this.y=Z+Y*U+K*X-W*G,this.z=$+Y*G+W*U-H*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*Z+W[8]*$,this.y=W[1]*Q+W[5]*Z+W[9]*$,this.z=W[2]*Q+W[6]*Z+W[10]*$,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=gJ(this.x,J.x,Q.x),this.y=gJ(this.y,J.y,Q.y),this.z=gJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=gJ(this.x,J,Q),this.y=gJ(this.y,J,Q),this.z=gJ(this.z,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(gJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:Z,y:$,z:W}=J,H=Q.x,K=Q.y,Y=Q.z;return this.x=$*Y-W*K,this.y=W*H-Z*Y,this.z=Z*K-$*H,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let Z=J.dot(this)/Q;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return h$.copy(this).projectOnVector(J),this.sub(h$)}reflect(J){return this.sub(h$.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(gJ(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y,$=this.z-J.z;return Q*Q+Z*Z+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,Z){let $=Math.sin(Q)*J;return this.x=$*Math.sin(Z),this.y=Math.cos(Q)*J,this.z=$*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,Z){return this.x=J*Math.sin(Q),this.y=Z,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),$=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=Z,this.z=$,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,Z=Math.sqrt(1-Q*Q);return this.x=Z*Math.cos(J),this.y=Q,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var h$=/*@__PURE__*/new A,$Y=/*@__PURE__*/new j0;class w0{constructor(J=new A(1/0,1/0,1/0),Q=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q+=3)this.expandByPoint(H8.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,Z=J.count;Q<Z;Q++)this.expandByPoint(H8.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=H8.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let W=Z.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let H=0,K=W.count;H<K;H++){if(J.isMesh===!0)J.getVertexPosition(H,H8);else H8.fromBufferAttribute(W,H);H8.applyMatrix4(J.matrixWorld),this.expandByPoint(H8)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();JQ.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();JQ.copy(Z.boundingBox)}JQ.applyMatrix4(J.matrixWorld),this.union(JQ)}}let $=J.children;for(let W=0,H=$.length;W<H;W++)this.expandByObject($[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,H8),H8.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,Z;if(J.normal.x>0)Q=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return Q<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(v7),QQ.subVectors(this.max,v7),l9.subVectors(J.a,v7),d9.subVectors(J.b,v7),u9.subVectors(J.c,v7),x8.subVectors(d9,l9),g8.subVectors(u9,d9),Q9.subVectors(l9,u9);let Q=[0,-x8.z,x8.y,0,-g8.z,g8.y,0,-Q9.z,Q9.y,x8.z,0,-x8.x,g8.z,0,-g8.x,Q9.z,0,-Q9.x,-x8.y,x8.x,0,-g8.y,g8.x,0,-Q9.y,Q9.x,0];if(!x$(Q,l9,d9,u9,QQ))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!x$(Q,l9,d9,u9,QQ))return!1;return ZQ.crossVectors(x8,g8),Q=[ZQ.x,ZQ.y,ZQ.z],x$(Q,l9,d9,u9,QQ)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,H8).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(H8).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return B8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),B8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),B8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),B8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),B8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),B8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),B8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),B8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(B8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var B8=[/*@__PURE__*/new A,/*@__PURE__*/new A,/*@__PURE__*/new A,/*@__PURE__*/new A,/*@__PURE__*/new A,/*@__PURE__*/new A,/*@__PURE__*/new A,/*@__PURE__*/new A],H8=/*@__PURE__*/new A,JQ=/*@__PURE__*/new w0,l9=/*@__PURE__*/new A,d9=/*@__PURE__*/new A,u9=/*@__PURE__*/new A,x8=/*@__PURE__*/new A,g8=/*@__PURE__*/new A,Q9=/*@__PURE__*/new A,v7=/*@__PURE__*/new A,QQ=/*@__PURE__*/new A,ZQ=/*@__PURE__*/new A,Z9=/*@__PURE__*/new A;function x$(J,Q,Z,$,W){for(let H=0,K=J.length-3;H<=K;H+=3){Z9.fromArray(J,H);let Y=W.x*Math.abs(Z9.x)+W.y*Math.abs(Z9.y)+W.z*Math.abs(Z9.z),X=Q.dot(Z9),U=Z.dot(Z9),G=$.dot(Z9);if(Math.max(-Math.max(X,U,G),Math.min(X,U,G))>Y)return!1}return!0}var uG=/*@__PURE__*/new w0,f7=/*@__PURE__*/new A,g$=/*@__PURE__*/new A;class z0{constructor(J=new A,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let Z=this.center;if(Q!==void 0)Z.copy(Q);else uG.setFromPoints(J).getCenter(Z);let $=0;for(let W=0,H=J.length;W<H;W++)$=Math.max($,Z.distanceToSquared(J[W]));return this.radius=Math.sqrt($),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let Z=this.center.distanceToSquared(J);if(Q.copy(J),Z>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;f7.subVectors(J,this.center);let Q=f7.lengthSq();if(Q>this.radius*this.radius){let Z=Math.sqrt(Q),$=(Z-this.radius)*0.5;this.center.addScaledVector(f7,$/Z),this.radius+=$}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else g$.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(f7.copy(J.center).add(g$)),this.expandByPoint(f7.copy(J.center).sub(g$));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}}var z8=/*@__PURE__*/new A,p$=/*@__PURE__*/new A,$Q=/*@__PURE__*/new A,p8=/*@__PURE__*/new A,m$=/*@__PURE__*/new A,WQ=/*@__PURE__*/new A,l$=/*@__PURE__*/new A;class r8{constructor(J=new A,Q=new A(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,z8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let Z=Q.dot(this.direction);if(Z<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=z8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return z8.copy(this.origin).addScaledVector(this.direction,Q),z8.distanceToSquared(J)}distanceSqToSegment(J,Q,Z,$){p$.copy(J).add(Q).multiplyScalar(0.5),$Q.copy(Q).sub(J).normalize(),p8.copy(this.origin).sub(p$);let W=J.distanceTo(Q)*0.5,H=-this.direction.dot($Q),K=p8.dot(this.direction),Y=-p8.dot($Q),X=p8.lengthSq(),U=Math.abs(1-H*H),G,E,N,q;if(U>0)if(G=H*Y-K,E=H*K-Y,q=W*U,G>=0)if(E>=-q)if(E<=q){let R=1/U;G*=R,E*=R,N=G*(G+H*E+2*K)+E*(H*G+E+2*Y)+X}else E=W,G=Math.max(0,-(H*E+K)),N=-G*G+E*(E+2*Y)+X;else E=-W,G=Math.max(0,-(H*E+K)),N=-G*G+E*(E+2*Y)+X;else if(E<=-q)G=Math.max(0,-(-H*W+K)),E=G>0?-W:Math.min(Math.max(-W,-Y),W),N=-G*G+E*(E+2*Y)+X;else if(E<=q)G=0,E=Math.min(Math.max(-W,-Y),W),N=E*(E+2*Y)+X;else G=Math.max(0,-(H*W+K)),E=G>0?W:Math.min(Math.max(-W,-Y),W),N=-G*G+E*(E+2*Y)+X;else E=H>0?-W:W,G=Math.max(0,-(H*E+K)),N=-G*G+E*(E+2*Y)+X;if(Z)Z.copy(this.origin).addScaledVector(this.direction,G);if($)$.copy(p$).addScaledVector($Q,E);return N}intersectSphere(J,Q){z8.subVectors(J.center,this.origin);let Z=z8.dot(this.direction),$=z8.dot(z8)-Z*Z,W=J.radius*J.radius;if($>W)return null;let H=Math.sqrt(W-$),K=Z-H,Y=Z+H;if(Y<0)return null;if(K<0)return this.at(Y,Q);return this.at(K,Q)}intersectsSphere(J){return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/Q;return Z>=0?Z:null}intersectPlane(J,Q){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let Z,$,W,H,K,Y,X=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(X>=0)Z=(J.min.x-E.x)*X,$=(J.max.x-E.x)*X;else Z=(J.max.x-E.x)*X,$=(J.min.x-E.x)*X;if(U>=0)W=(J.min.y-E.y)*U,H=(J.max.y-E.y)*U;else W=(J.max.y-E.y)*U,H=(J.min.y-E.y)*U;if(Z>H||W>$)return null;if(W>Z||isNaN(Z))Z=W;if(H<$||isNaN($))$=H;if(G>=0)K=(J.min.z-E.z)*G,Y=(J.max.z-E.z)*G;else K=(J.max.z-E.z)*G,Y=(J.min.z-E.z)*G;if(Z>Y||K>$)return null;if(K>Z||Z!==Z)Z=K;if(Y<$||$!==$)$=Y;if($<0)return null;return this.at(Z>=0?Z:$,Q)}intersectsBox(J){return this.intersectBox(J,z8)!==null}intersectTriangle(J,Q,Z,$,W){m$.subVectors(Q,J),WQ.subVectors(Z,J),l$.crossVectors(m$,WQ);let H=this.direction.dot(l$),K;if(H>0){if($)return null;K=1}else if(H<0)K=-1,H=-H;else return null;p8.subVectors(this.origin,J);let Y=K*this.direction.dot(WQ.crossVectors(p8,WQ));if(Y<0)return null;let X=K*this.direction.dot(m$.cross(p8));if(X<0)return null;if(Y+X>H)return null;let U=-K*p8.dot(l$);if(U<0)return null;return this.at(U/H,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jJ{constructor(J,Q,Z,$,W,H,K,Y,X,U,G,E,N,q,R,F){if(jJ.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,Z,$,W,H,K,Y,X,U,G,E,N,q,R,F)}set(J,Q,Z,$,W,H,K,Y,X,U,G,E,N,q,R,F){let O=this.elements;return O[0]=J,O[4]=Q,O[8]=Z,O[12]=$,O[1]=W,O[5]=H,O[9]=K,O[13]=Y,O[2]=X,O[6]=U,O[10]=G,O[14]=E,O[3]=N,O[7]=q,O[11]=R,O[15]=F,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jJ().fromArray(this.elements)}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],Q[9]=Z[9],Q[10]=Z[10],Q[11]=Z[11],Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],Q[15]=Z[15],this}copyPosition(J){let Q=this.elements,Z=J.elements;return Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,Z){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,Q,Z){return this.set(J.x,Q.x,Z.x,0,J.y,Q.y,Z.y,0,J.z,Q.z,Z.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,Z=J.elements,$=1/c9.setFromMatrixColumn(J,0).length(),W=1/c9.setFromMatrixColumn(J,1).length(),H=1/c9.setFromMatrixColumn(J,2).length();return Q[0]=Z[0]*$,Q[1]=Z[1]*$,Q[2]=Z[2]*$,Q[3]=0,Q[4]=Z[4]*W,Q[5]=Z[5]*W,Q[6]=Z[6]*W,Q[7]=0,Q[8]=Z[8]*H,Q[9]=Z[9]*H,Q[10]=Z[10]*H,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,Z=J.x,$=J.y,W=J.z,H=Math.cos(Z),K=Math.sin(Z),Y=Math.cos($),X=Math.sin($),U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let E=H*U,N=H*G,q=K*U,R=K*G;Q[0]=Y*U,Q[4]=-Y*G,Q[8]=X,Q[1]=N+q*X,Q[5]=E-R*X,Q[9]=-K*Y,Q[2]=R-E*X,Q[6]=q+N*X,Q[10]=H*Y}else if(J.order==="YXZ"){let E=Y*U,N=Y*G,q=X*U,R=X*G;Q[0]=E+R*K,Q[4]=q*K-N,Q[8]=H*X,Q[1]=H*G,Q[5]=H*U,Q[9]=-K,Q[2]=N*K-q,Q[6]=R+E*K,Q[10]=H*Y}else if(J.order==="ZXY"){let E=Y*U,N=Y*G,q=X*U,R=X*G;Q[0]=E-R*K,Q[4]=-H*G,Q[8]=q+N*K,Q[1]=N+q*K,Q[5]=H*U,Q[9]=R-E*K,Q[2]=-H*X,Q[6]=K,Q[10]=H*Y}else if(J.order==="ZYX"){let E=H*U,N=H*G,q=K*U,R=K*G;Q[0]=Y*U,Q[4]=q*X-N,Q[8]=E*X+R,Q[1]=Y*G,Q[5]=R*X+E,Q[9]=N*X-q,Q[2]=-X,Q[6]=K*Y,Q[10]=H*Y}else if(J.order==="YZX"){let E=H*Y,N=H*X,q=K*Y,R=K*X;Q[0]=Y*U,Q[4]=R-E*G,Q[8]=q*G+N,Q[1]=G,Q[5]=H*U,Q[9]=-K*U,Q[2]=-X*U,Q[6]=N*G+q,Q[10]=E-R*G}else if(J.order==="XZY"){let E=H*Y,N=H*X,q=K*Y,R=K*X;Q[0]=Y*U,Q[4]=-G,Q[8]=X*U,Q[1]=E*G+R,Q[5]=H*U,Q[9]=N*G-q,Q[2]=q*G-N,Q[6]=K*U,Q[10]=R*G+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(cG,J,nG)}lookAt(J,Q,Z){let $=this.elements;if(c0.subVectors(J,Q),c0.lengthSq()===0)c0.z=1;if(c0.normalize(),m8.crossVectors(Z,c0),m8.lengthSq()===0){if(Math.abs(Z.z)===1)c0.x+=0.0001;else c0.z+=0.0001;c0.normalize(),m8.crossVectors(Z,c0)}return m8.normalize(),HQ.crossVectors(c0,m8),$[0]=m8.x,$[4]=HQ.x,$[8]=c0.x,$[1]=m8.y,$[5]=HQ.y,$[9]=c0.y,$[2]=m8.z,$[6]=HQ.z,$[10]=c0.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,$=Q.elements,W=this.elements,H=Z[0],K=Z[4],Y=Z[8],X=Z[12],U=Z[1],G=Z[5],E=Z[9],N=Z[13],q=Z[2],R=Z[6],F=Z[10],O=Z[14],D=Z[3],M=Z[7],k=Z[11],I=Z[15],P=$[0],_=$[4],w=$[8],y=$[12],L=$[1],z=$[5],S=$[9],g=$[13],p=$[2],l=$[6],s=$[10],d=$[14],ZJ=$[3],m=$[7],EJ=$[11],UJ=$[15];return W[0]=H*P+K*L+Y*p+X*ZJ,W[4]=H*_+K*z+Y*l+X*m,W[8]=H*w+K*S+Y*s+X*EJ,W[12]=H*y+K*g+Y*d+X*UJ,W[1]=U*P+G*L+E*p+N*ZJ,W[5]=U*_+G*z+E*l+N*m,W[9]=U*w+G*S+E*s+N*EJ,W[13]=U*y+G*g+E*d+N*UJ,W[2]=q*P+R*L+F*p+O*ZJ,W[6]=q*_+R*z+F*l+O*m,W[10]=q*w+R*S+F*s+O*EJ,W[14]=q*y+R*g+F*d+O*UJ,W[3]=D*P+M*L+k*p+I*ZJ,W[7]=D*_+M*z+k*l+I*m,W[11]=D*w+M*S+k*s+I*EJ,W[15]=D*y+M*g+k*d+I*UJ,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[4],$=J[8],W=J[12],H=J[1],K=J[5],Y=J[9],X=J[13],U=J[2],G=J[6],E=J[10],N=J[14],q=J[3],R=J[7],F=J[11],O=J[15];return q*(+W*Y*G-$*X*G-W*K*E+Z*X*E+$*K*N-Z*Y*N)+R*(+Q*Y*N-Q*X*E+W*H*E-$*H*N+$*X*U-W*Y*U)+F*(+Q*X*G-Q*K*N-W*H*G+Z*H*N+W*K*U-Z*X*U)+O*(-$*K*U-Q*Y*G+Q*K*E+$*H*G-Z*H*E+Z*Y*U)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,Z){let $=this.elements;if(J.isVector3)$[12]=J.x,$[13]=J.y,$[14]=J.z;else $[12]=J,$[13]=Q,$[14]=Z;return this}invert(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],H=J[4],K=J[5],Y=J[6],X=J[7],U=J[8],G=J[9],E=J[10],N=J[11],q=J[12],R=J[13],F=J[14],O=J[15],D=G*F*X-R*E*X+R*Y*N-K*F*N-G*Y*O+K*E*O,M=q*E*X-U*F*X-q*Y*N+H*F*N+U*Y*O-H*E*O,k=U*R*X-q*G*X+q*K*N-H*R*N-U*K*O+H*G*O,I=q*G*Y-U*R*Y-q*K*E+H*R*E+U*K*F-H*G*F,P=Q*D+Z*M+$*k+W*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/P;return J[0]=D*_,J[1]=(R*E*W-G*F*W-R*$*N+Z*F*N+G*$*O-Z*E*O)*_,J[2]=(K*F*W-R*Y*W+R*$*X-Z*F*X-K*$*O+Z*Y*O)*_,J[3]=(G*Y*W-K*E*W-G*$*X+Z*E*X+K*$*N-Z*Y*N)*_,J[4]=M*_,J[5]=(U*F*W-q*E*W+q*$*N-Q*F*N-U*$*O+Q*E*O)*_,J[6]=(q*Y*W-H*F*W-q*$*X+Q*F*X+H*$*O-Q*Y*O)*_,J[7]=(H*E*W-U*Y*W+U*$*X-Q*E*X-H*$*N+Q*Y*N)*_,J[8]=k*_,J[9]=(q*G*W-U*R*W-q*Z*N+Q*R*N+U*Z*O-Q*G*O)*_,J[10]=(H*R*W-q*K*W+q*Z*X-Q*R*X-H*Z*O+Q*K*O)*_,J[11]=(U*K*W-H*G*W-U*Z*X+Q*G*X+H*Z*N-Q*K*N)*_,J[12]=I*_,J[13]=(U*R*$-q*G*$+q*Z*E-Q*R*E-U*Z*F+Q*G*F)*_,J[14]=(q*K*$-H*R*$-q*Z*Y+Q*R*Y+H*Z*F-Q*K*F)*_,J[15]=(H*G*$-U*K*$+U*Z*Y-Q*G*Y-H*Z*E+Q*K*E)*_,this}scale(J){let Q=this.elements,Z=J.x,$=J.y,W=J.z;return Q[0]*=Z,Q[4]*=$,Q[8]*=W,Q[1]*=Z,Q[5]*=$,Q[9]*=W,Q[2]*=Z,Q[6]*=$,Q[10]*=W,Q[3]*=Z,Q[7]*=$,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],$=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,Z,$))}makeTranslation(J,Q,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,Q,-Z,0,0,Z,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,0,Z,0,0,1,0,0,-Z,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,0,Z,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let Z=Math.cos(Q),$=Math.sin(Q),W=1-Z,H=J.x,K=J.y,Y=J.z,X=W*H,U=W*K;return this.set(X*H+Z,X*K-$*Y,X*Y+$*K,0,X*K+$*Y,U*K+Z,U*Y-$*H,0,X*Y-$*K,U*Y+$*H,W*Y*Y+Z,0,0,0,0,1),this}makeScale(J,Q,Z){return this.set(J,0,0,0,0,Q,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,Q,Z,$,W,H){return this.set(1,Z,W,0,J,1,H,0,Q,$,1,0,0,0,0,1),this}compose(J,Q,Z){let $=this.elements,W=Q._x,H=Q._y,K=Q._z,Y=Q._w,X=W+W,U=H+H,G=K+K,E=W*X,N=W*U,q=W*G,R=H*U,F=H*G,O=K*G,D=Y*X,M=Y*U,k=Y*G,I=Z.x,P=Z.y,_=Z.z;return $[0]=(1-(R+O))*I,$[1]=(N+k)*I,$[2]=(q-M)*I,$[3]=0,$[4]=(N-k)*P,$[5]=(1-(E+O))*P,$[6]=(F+D)*P,$[7]=0,$[8]=(q+M)*_,$[9]=(F-D)*_,$[10]=(1-(E+R))*_,$[11]=0,$[12]=J.x,$[13]=J.y,$[14]=J.z,$[15]=1,this}decompose(J,Q,Z){let $=this.elements,W=c9.set($[0],$[1],$[2]).length(),H=c9.set($[4],$[5],$[6]).length(),K=c9.set($[8],$[9],$[10]).length();if(this.determinant()<0)W=-W;J.x=$[12],J.y=$[13],J.z=$[14],K8.copy(this);let X=1/W,U=1/H,G=1/K;return K8.elements[0]*=X,K8.elements[1]*=X,K8.elements[2]*=X,K8.elements[4]*=U,K8.elements[5]*=U,K8.elements[6]*=U,K8.elements[8]*=G,K8.elements[9]*=G,K8.elements[10]*=G,Q.setFromRotationMatrix(K8),Z.x=W,Z.y=H,Z.z=K,this}makePerspective(J,Q,Z,$,W,H,K=2000){let Y=this.elements,X=2*W/(Q-J),U=2*W/(Z-$),G=(Q+J)/(Q-J),E=(Z+$)/(Z-$),N,q;if(K===2000)N=-(H+W)/(H-W),q=-2*H*W/(H-W);else if(K===2001)N=-H/(H-W),q=-H*W/(H-W);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+K);return Y[0]=X,Y[4]=0,Y[8]=G,Y[12]=0,Y[1]=0,Y[5]=U,Y[9]=E,Y[13]=0,Y[2]=0,Y[6]=0,Y[10]=N,Y[14]=q,Y[3]=0,Y[7]=0,Y[11]=-1,Y[15]=0,this}makeOrthographic(J,Q,Z,$,W,H,K=2000){let Y=this.elements,X=1/(Q-J),U=1/(Z-$),G=1/(H-W),E=(Q+J)*X,N=(Z+$)*U,q,R;if(K===2000)q=(H+W)*G,R=-2*G;else if(K===2001)q=W*G,R=-1*G;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+K);return Y[0]=2*X,Y[4]=0,Y[8]=0,Y[12]=-E,Y[1]=0,Y[5]=2*U,Y[9]=0,Y[13]=-N,Y[2]=0,Y[6]=0,Y[10]=R,Y[14]=-q,Y[3]=0,Y[7]=0,Y[11]=0,Y[15]=1,this}equals(J){let Q=this.elements,Z=J.elements;for(let $=0;$<16;$++)if(Q[$]!==Z[$])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J[Q+9]=Z[9],J[Q+10]=Z[10],J[Q+11]=Z[11],J[Q+12]=Z[12],J[Q+13]=Z[13],J[Q+14]=Z[14],J[Q+15]=Z[15],J}}var c9=/*@__PURE__*/new A,K8=/*@__PURE__*/new jJ,cG=/*@__PURE__*/new A(0,0,0),nG=/*@__PURE__*/new A(1,1,1),m8=/*@__PURE__*/new A,HQ=/*@__PURE__*/new A,c0=/*@__PURE__*/new A,WY=/*@__PURE__*/new jJ,HY=/*@__PURE__*/new j0;class l0{constructor(J=0,Q=0,Z=0,$=l0.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=Z,this._order=$}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,Z,$=this._order){return this._x=J,this._y=Q,this._z=Z,this._order=$,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,Z=!0){let $=J.elements,W=$[0],H=$[4],K=$[8],Y=$[1],X=$[5],U=$[9],G=$[2],E=$[6],N=$[10];switch(Q){case"XYZ":if(this._y=Math.asin(gJ(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(-U,N),this._z=Math.atan2(-H,W);else this._x=Math.atan2(E,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-gJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(K,N),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(gJ(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,N),this._z=Math.atan2(-H,X);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-gJ(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,N),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-H,X);break;case"YZX":if(this._z=Math.asin(gJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(K,N);break;case"XZY":if(this._z=Math.asin(-gJ(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(E,X),this._y=Math.atan2(K,W);else this._x=Math.atan2(-U,N),this._y=0;break;default:}if(this._order=Q,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,Z){return WY.makeRotationFromQuaternion(J),this.setFromRotationMatrix(WY,Q,Z)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return HY.setFromEuler(this),this.setFromQuaternion(HY,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}l0.DEFAULT_ORDER="XYZ";class k7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var sG=0,KY=/*@__PURE__*/new A,n9=/*@__PURE__*/new j0,I8=/*@__PURE__*/new jJ,KQ=/*@__PURE__*/new A,b7=/*@__PURE__*/new A,iG=/*@__PURE__*/new A,oG=/*@__PURE__*/new j0,YY=/*@__PURE__*/new A(1,0,0),XY=/*@__PURE__*/new A(0,1,0),UY=/*@__PURE__*/new A(0,0,1),GY={type:"added"},aG={type:"removed"},s9={type:"childadded",child:null},d$={type:"childremoved",child:null};class J0 extends Q8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:sG++}),this.uuid=s0(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=J0.DEFAULT_UP.clone();let J=new A,Q=new l0,Z=new j0,$=new A(1,1,1);function W(){Z.setFromEuler(Q,!1)}function H(){Q.setFromQuaternion(Z,void 0,!1)}Q._onChange(W),Z._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:$},modelViewMatrix:{value:new jJ},normalMatrix:{value:new pJ}}),this.matrix=new jJ,this.matrixWorld=new jJ,this.matrixAutoUpdate=J0.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=J0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return n9.setFromAxisAngle(J,Q),this.quaternion.multiply(n9),this}rotateOnWorldAxis(J,Q){return n9.setFromAxisAngle(J,Q),this.quaternion.premultiply(n9),this}rotateX(J){return this.rotateOnAxis(YY,J)}rotateY(J){return this.rotateOnAxis(XY,J)}rotateZ(J){return this.rotateOnAxis(UY,J)}translateOnAxis(J,Q){return KY.copy(J).applyQuaternion(this.quaternion),this.position.add(KY.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(YY,J)}translateY(J){return this.translateOnAxis(XY,J)}translateZ(J){return this.translateOnAxis(UY,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(I8.copy(this.matrixWorld).invert())}lookAt(J,Q,Z){if(J.isVector3)KQ.copy(J);else KQ.set(J,Q,Z);let $=this.parent;if(this.updateWorldMatrix(!0,!1),b7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)I8.lookAt(b7,KQ,this.up);else I8.lookAt(KQ,b7,this.up);if(this.quaternion.setFromRotationMatrix(I8),$)I8.extractRotation($.matrixWorld),n9.setFromRotationMatrix(I8),this.quaternion.premultiply(n9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(GY),s9.child=J,this.dispatchEvent(s9),s9.child=null;return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(aG),d$.child=J,this.dispatchEvent(d$),d$.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),I8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),I8.multiply(J.parent.matrixWorld);return J.applyMatrix4(I8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(GY),s9.child=J,this.dispatchEvent(s9),s9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let Z=0,$=this.children.length;Z<$;Z++){let H=this.children[Z].getObjectByProperty(J,Q);if(H!==void 0)return H}return}getObjectsByProperty(J,Q,Z=[]){if(this[J]===Q)Z.push(this);let $=this.children;for(let W=0,H=$.length;W<H;W++)$[W].getObjectsByProperty(J,Q,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(b7,J,iG),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(b7,oG,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let $=this.children;for(let W=0,H=$.length;W<H;W++)$[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",Z={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let $={};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.castShadow===!0)$.castShadow=!0;if(this.receiveShadow===!0)$.receiveShadow=!0;if(this.visible===!1)$.visible=!1;if(this.frustumCulled===!1)$.frustumCulled=!1;if(this.renderOrder!==0)$.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)$.userData=this.userData;if($.layers=this.layers.mask,$.matrix=this.matrix.toArray(),$.up=this.up.toArray(),this.matrixAutoUpdate===!1)$.matrixAutoUpdate=!1;if(this.isInstancedMesh){if($.type="InstancedMesh",$.count=this.count,$.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)$.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if($.type="BatchedMesh",$.perObjectFrustumCulled=this.perObjectFrustumCulled,$.sortObjects=this.sortObjects,$.drawRanges=this._drawRanges,$.reservedRanges=this._reservedRanges,$.visibility=this._visibility,$.active=this._active,$.bounds=this._bounds.map((K)=>({boxInitialized:K.boxInitialized,boxMin:K.box.min.toArray(),boxMax:K.box.max.toArray(),sphereInitialized:K.sphereInitialized,sphereRadius:K.sphere.radius,sphereCenter:K.sphere.center.toArray()})),$.maxInstanceCount=this._maxInstanceCount,$.maxVertexCount=this._maxVertexCount,$.maxIndexCount=this._maxIndexCount,$.geometryInitialized=this._geometryInitialized,$.geometryCount=this._geometryCount,$.matricesTexture=this._matricesTexture.toJSON(J),this._colorsTexture!==null)$.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)$.boundingSphere={center:$.boundingSphere.center.toArray(),radius:$.boundingSphere.radius};if(this.boundingBox!==null)$.boundingBox={min:$.boundingBox.min.toArray(),max:$.boundingBox.max.toArray()}}function W(K,Y){if(K[Y.uuid]===void 0)K[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)$.background=this.background.toJSON();else if(this.background.isTexture)$.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)$.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){$.geometry=W(J.geometries,this.geometry);let K=this.geometry.parameters;if(K!==void 0&&K.shapes!==void 0){let Y=K.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let G=Y[X];W(J.shapes,G)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if($.bindMode=this.bindMode,$.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),$.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let K=[];for(let Y=0,X=this.material.length;Y<X;Y++)K.push(W(J.materials,this.material[Y]));$.material=K}else $.material=W(J.materials,this.material);if(this.children.length>0){$.children=[];for(let K=0;K<this.children.length;K++)$.children.push(this.children[K].toJSON(J).object)}if(this.animations.length>0){$.animations=[];for(let K=0;K<this.animations.length;K++){let Y=this.animations[K];$.animations.push(W(J.animations,Y))}}if(Q){let K=H(J.geometries),Y=H(J.materials),X=H(J.textures),U=H(J.images),G=H(J.shapes),E=H(J.skeletons),N=H(J.animations),q=H(J.nodes);if(K.length>0)Z.geometries=K;if(Y.length>0)Z.materials=Y;if(X.length>0)Z.textures=X;if(U.length>0)Z.images=U;if(G.length>0)Z.shapes=G;if(E.length>0)Z.skeletons=E;if(N.length>0)Z.animations=N;if(q.length>0)Z.nodes=q}return Z.object=$,Z;function H(K){let Y=[];for(let X in K){let U=K[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let Z=0;Z<J.children.length;Z++){let $=J.children[Z];this.add($.clone())}return this}}J0.DEFAULT_UP=/*@__PURE__*/new A(0,1,0);J0.DEFAULT_MATRIX_AUTO_UPDATE=!0;J0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Y8=/*@__PURE__*/new A,_8=/*@__PURE__*/new A,u$=/*@__PURE__*/new A,C8=/*@__PURE__*/new A,i9=/*@__PURE__*/new A,o9=/*@__PURE__*/new A,EY=/*@__PURE__*/new A,c$=/*@__PURE__*/new A,n$=/*@__PURE__*/new A,s$=/*@__PURE__*/new A,i$=/*@__PURE__*/new eJ,o$=/*@__PURE__*/new eJ,a$=/*@__PURE__*/new eJ;class x0{constructor(J=new A,Q=new A,Z=new A){this.a=J,this.b=Q,this.c=Z}static getNormal(J,Q,Z,$){$.subVectors(Z,Q),Y8.subVectors(J,Q),$.cross(Y8);let W=$.lengthSq();if(W>0)return $.multiplyScalar(1/Math.sqrt(W));return $.set(0,0,0)}static getBarycoord(J,Q,Z,$,W){Y8.subVectors($,Q),_8.subVectors(Z,Q),u$.subVectors(J,Q);let H=Y8.dot(Y8),K=Y8.dot(_8),Y=Y8.dot(u$),X=_8.dot(_8),U=_8.dot(u$),G=H*X-K*K;if(G===0)return W.set(0,0,0),null;let E=1/G,N=(X*Y-K*U)*E,q=(H*U-K*Y)*E;return W.set(1-N-q,q,N)}static containsPoint(J,Q,Z,$){if(this.getBarycoord(J,Q,Z,$,C8)===null)return!1;return C8.x>=0&&C8.y>=0&&C8.x+C8.y<=1}static getInterpolation(J,Q,Z,$,W,H,K,Y){if(this.getBarycoord(J,Q,Z,$,C8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,C8.x),Y.addScaledVector(H,C8.y),Y.addScaledVector(K,C8.z),Y}static getInterpolatedAttribute(J,Q,Z,$,W,H){return i$.setScalar(0),o$.setScalar(0),a$.setScalar(0),i$.fromBufferAttribute(J,Q),o$.fromBufferAttribute(J,Z),a$.fromBufferAttribute(J,$),H.setScalar(0),H.addScaledVector(i$,W.x),H.addScaledVector(o$,W.y),H.addScaledVector(a$,W.z),H}static isFrontFacing(J,Q,Z,$){return Y8.subVectors(Z,Q),_8.subVectors(J,Q),Y8.cross(_8).dot($)<0?!0:!1}set(J,Q,Z){return this.a.copy(J),this.b.copy(Q),this.c.copy(Z),this}setFromPointsAndIndices(J,Q,Z,$){return this.a.copy(J[Q]),this.b.copy(J[Z]),this.c.copy(J[$]),this}setFromAttributeAndIndices(J,Q,Z,$){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,$),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return Y8.subVectors(this.c,this.b),_8.subVectors(this.a,this.b),Y8.cross(_8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return x0.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return x0.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,Z,$,W){return x0.getInterpolation(J,this.a,this.b,this.c,Q,Z,$,W)}containsPoint(J){return x0.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return x0.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let Z=this.a,$=this.b,W=this.c,H,K;i9.subVectors($,Z),o9.subVectors(W,Z),c$.subVectors(J,Z);let Y=i9.dot(c$),X=o9.dot(c$);if(Y<=0&&X<=0)return Q.copy(Z);n$.subVectors(J,$);let U=i9.dot(n$),G=o9.dot(n$);if(U>=0&&G<=U)return Q.copy($);let E=Y*G-U*X;if(E<=0&&Y>=0&&U<=0)return H=Y/(Y-U),Q.copy(Z).addScaledVector(i9,H);s$.subVectors(J,W);let N=i9.dot(s$),q=o9.dot(s$);if(q>=0&&N<=q)return Q.copy(W);let R=N*X-Y*q;if(R<=0&&X>=0&&q<=0)return K=X/(X-q),Q.copy(Z).addScaledVector(o9,K);let F=U*q-N*G;if(F<=0&&G-U>=0&&N-q>=0)return EY.subVectors(W,$),K=(G-U)/(G-U+(N-q)),Q.copy($).addScaledVector(EY,K);let O=1/(F+R+E);return H=R*O,K=E*O,Q.copy(Z).addScaledVector(i9,H).addScaledVector(o9,K)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var DU={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},l8={h:0,s:0,l:0},YQ={h:0,s:0,l:0};function r$(J,Q,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(Q-J)*6*Z;if(Z<0.5)return Q;if(Z<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-Z);return J}class qJ{constructor(J,Q,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,Z)}set(J,Q,Z){if(Q===void 0&&Z===void 0){let $=J;if($&&$.isColor)this.copy($);else if(typeof $==="number")this.setHex($);else if(typeof $==="string")this.setStyle($)}else this.setRGB(J,Q,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,rJ.toWorkingColorSpace(this,Q),this}setRGB(J,Q,Z,$=rJ.workingColorSpace){return this.r=J,this.g=Q,this.b=Z,rJ.toWorkingColorSpace(this,$),this}setHSL(J,Q,Z,$=rJ.workingColorSpace){if(J=wH(J,1),Q=gJ(Q,0,1),Z=gJ(Z,0,1),Q===0)this.r=this.g=this.b=Z;else{let W=Z<=0.5?Z*(1+Q):Z+Q-Z*Q,H=2*Z-W;this.r=r$(H,W,J+0.3333333333333333),this.g=r$(H,W,J),this.b=r$(H,W,J-0.3333333333333333)}return rJ.toWorkingColorSpace(this,$),this}setStyle(J,Q="srgb"){function Z(W){if(W===void 0)return;if(parseFloat(W)<1);}let $;if($=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,H=$[1],K=$[2];switch(H){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return Z(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return Z(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(K))return Z(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:}}else if($=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=$[1],H=W.length;if(H===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(H===6)return this.setHex(parseInt(W,16),Q)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let Z=DU[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,Q);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=T8(J.r),this.g=T8(J.g),this.b=T8(J.b),this}copyLinearToSRGB(J){return this.r=K7(J.r),this.g=K7(J.g),this.b=K7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return rJ.fromWorkingColorSpace(T0.copy(this),J),Math.round(gJ(T0.r*255,0,255))*65536+Math.round(gJ(T0.g*255,0,255))*256+Math.round(gJ(T0.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=rJ.workingColorSpace){rJ.fromWorkingColorSpace(T0.copy(this),Q);let{r:Z,g:$,b:W}=T0,H=Math.max(Z,$,W),K=Math.min(Z,$,W),Y,X,U=(K+H)/2;if(K===H)Y=0,X=0;else{let G=H-K;switch(X=U<=0.5?G/(H+K):G/(2-H-K),H){case Z:Y=($-W)/G+($<W?6:0);break;case $:Y=(W-Z)/G+2;break;case W:Y=(Z-$)/G+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=rJ.workingColorSpace){return rJ.fromWorkingColorSpace(T0.copy(this),Q),J.r=T0.r,J.g=T0.g,J.b=T0.b,J}getStyle(J="srgb"){rJ.fromWorkingColorSpace(T0.copy(this),J);let{r:Q,g:Z,b:$}=T0;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${Z.toFixed(3)} ${$.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round(Z*255)},${Math.round($*255)})`}offsetHSL(J,Q,Z){return this.getHSL(l8),this.setHSL(l8.h+J,l8.s+Q,l8.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,Z){return this.r=J.r+(Q.r-J.r)*Z,this.g=J.g+(Q.g-J.g)*Z,this.b=J.b+(Q.b-J.b)*Z,this}lerpHSL(J,Q){this.getHSL(l8),J.getHSL(YQ);let Z=s7(l8.h,YQ.h,Q),$=s7(l8.s,YQ.s,Q),W=s7(l8.l,YQ.l,Q);return this.setHSL(Z,$,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,Z=this.g,$=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*Z+W[6]*$,this.g=W[1]*Q+W[4]*Z+W[7]*$,this.b=W[2]*Q+W[5]*Z+W[8]*$,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var T0=/*@__PURE__*/new qJ;qJ.NAMES=DU;var rG=0;class I0 extends Q8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:rG++}),this.uuid=s0(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qJ(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let Z=J[Q];if(Z===void 0)continue;let $=this[Q];if($===void 0)continue;if($&&$.isColor)$.set(Z);else if($&&$.isVector3&&(Z&&Z.isVector3))$.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let Z={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.shadowSide!==null)Z.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Z.blending=this.blending;if(this.side!==0)Z.side=this.side;if(this.vertexColors===!0)Z.vertexColors=!0;if(this.opacity<1)Z.opacity=this.opacity;if(this.transparent===!0)Z.transparent=!0;if(this.blendSrc!==204)Z.blendSrc=this.blendSrc;if(this.blendDst!==205)Z.blendDst=this.blendDst;if(this.blendEquation!==100)Z.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Z.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Z.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Z.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Z.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Z.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Z.depthFunc=this.depthFunc;if(this.depthTest===!1)Z.depthTest=this.depthTest;if(this.depthWrite===!1)Z.depthWrite=this.depthWrite;if(this.colorWrite===!1)Z.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Z.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Z.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Z.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Z.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Z.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Z.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Z.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Z.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Z.rotation=this.rotation;if(this.polygonOffset===!0)Z.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Z.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Z.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Z.linewidth=this.linewidth;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.dithering===!0)Z.dithering=!0;if(this.alphaTest>0)Z.alphaTest=this.alphaTest;if(this.alphaHash===!0)Z.alphaHash=!0;if(this.alphaToCoverage===!0)Z.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Z.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Z.forceSinglePass=!0;if(this.wireframe===!0)Z.wireframe=!0;if(this.wireframeLinewidth>1)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Z.flatShading=!0;if(this.visible===!1)Z.visible=!1;if(this.toneMapped===!1)Z.toneMapped=!1;if(this.fog===!1)Z.fog=!1;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function $(W){let H=[];for(let K in W){let Y=W[K];delete Y.metadata,H.push(Y)}return H}if(Q){let W=$(J.textures),H=$(J.images);if(W.length>0)Z.textures=W;if(H.length>0)Z.images=H}return Z}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,Z=null;if(Q!==null){let $=Q.length;Z=new Array($);for(let W=0;W!==$;++W)Z[W]=Q[W].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}onBuild(){}}class M8 extends I0{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new l0,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var A8=/*@__PURE__*/tG();function tG(){let J=new ArrayBuffer(4),Q=new Float32Array(J),Z=new Uint32Array(J),$=new Uint32Array(512),W=new Uint32Array(512);for(let X=0;X<256;++X){let U=X-127;if(U<-27)$[X]=0,$[X|256]=32768,W[X]=24,W[X|256]=24;else if(U<-14)$[X]=1024>>-U-14,$[X|256]=1024>>-U-14|32768,W[X]=-U-1,W[X|256]=-U-1;else if(U<=15)$[X]=U+15<<10,$[X|256]=U+15<<10|32768,W[X]=13,W[X|256]=13;else if(U<128)$[X]=31744,$[X|256]=64512,W[X]=24,W[X|256]=24;else $[X]=31744,$[X|256]=64512,W[X]=13,W[X|256]=13}let H=new Uint32Array(2048),K=new Uint32Array(64),Y=new Uint32Array(64);for(let X=1;X<1024;++X){let U=X<<13,G=0;while((U&8388608)===0)U<<=1,G-=8388608;U&=-8388609,G+=947912704,H[X]=U|G}for(let X=1024;X<2048;++X)H[X]=939524096+(X-1024<<13);for(let X=1;X<31;++X)K[X]=X<<23;K[31]=1199570944,K[32]=2147483648;for(let X=33;X<63;++X)K[X]=2147483648+(X-32<<23);K[63]=3347054592;for(let X=1;X<64;++X)if(X!==32)Y[X]=1024;return{floatView:Q,uint32View:Z,baseTable:$,shiftTable:W,mantissaTable:H,exponentTable:K,offsetTable:Y}}function m0(J){if(Math.abs(J)>65504);J=gJ(J,-65504,65504),A8.floatView[0]=J;let Q=A8.uint32View[0],Z=Q>>23&511;return A8.baseTable[Z]+((Q&8388607)>>A8.shiftTable[Z])}function n7(J){let Q=J>>10;return A8.uint32View[0]=A8.mantissaTable[A8.offsetTable[Q]+(J&1023)]+A8.exponentTable[Q],A8.floatView[0]}var OU={toHalfFloat:m0,fromHalfFloat:n7},k0=/*@__PURE__*/new A,XQ=/*@__PURE__*/new i,eG=0;class K0{constructor(J,Q,Z=!1){if(Array.isArray(J))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eG++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,Z){J*=this.itemSize,Z*=Q.itemSize;for(let $=0,W=this.itemSize;$<W;$++)this.array[J+$]=Q.array[Z+$];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,Z=this.count;Q<Z;Q++)XQ.fromBufferAttribute(this,Q),XQ.applyMatrix3(J),this.setXY(Q,XQ.x,XQ.y);else if(this.itemSize===3)for(let Q=0,Z=this.count;Q<Z;Q++)k0.fromBufferAttribute(this,Q),k0.applyMatrix3(J),this.setXYZ(Q,k0.x,k0.y,k0.z);return this}applyMatrix4(J){for(let Q=0,Z=this.count;Q<Z;Q++)k0.fromBufferAttribute(this,Q),k0.applyMatrix4(J),this.setXYZ(Q,k0.x,k0.y,k0.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)k0.fromBufferAttribute(this,Q),k0.applyNormalMatrix(J),this.setXYZ(Q,k0.x,k0.y,k0.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)k0.fromBufferAttribute(this,Q),k0.transformDirection(J),this.setXYZ(Q,k0.x,k0.y,k0.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let Z=this.array[J*this.itemSize+Q];if(this.normalized)Z=h0(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=lJ(Z,this.array);return this.array[J*this.itemSize+Q]=Z,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=h0(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=h0(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=h0(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=h0(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=lJ(Q,this.array),Z=lJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this}setXYZ(J,Q,Z,$){if(J*=this.itemSize,this.normalized)Q=lJ(Q,this.array),Z=lJ(Z,this.array),$=lJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=$,this}setXYZW(J,Q,Z,$,W){if(J*=this.itemSize,this.normalized)Q=lJ(Q,this.array),Z=lJ(Z,this.array),$=lJ($,this.array),W=lJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=$,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class jH extends K0{constructor(J,Q,Z){super(new Int8Array(J),Q,Z)}}class yH extends K0{constructor(J,Q,Z){super(new Uint8Array(J),Q,Z)}}class vH extends K0{constructor(J,Q,Z){super(new Uint8ClampedArray(J),Q,Z)}}class fH extends K0{constructor(J,Q,Z){super(new Int16Array(J),Q,Z)}}class R6 extends K0{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z)}}class bH extends K0{constructor(J,Q,Z){super(new Int32Array(J),Q,Z)}}class F6 extends K0{constructor(J,Q,Z){super(new Uint32Array(J),Q,Z)}}class hH extends K0{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z);this.isFloat16BufferAttribute=!0}getX(J){let Q=n7(this.array[J*this.itemSize]);if(this.normalized)Q=h0(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.array[J*this.itemSize]=m0(Q),this}getY(J){let Q=n7(this.array[J*this.itemSize+1]);if(this.normalized)Q=h0(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.array[J*this.itemSize+1]=m0(Q),this}getZ(J){let Q=n7(this.array[J*this.itemSize+2]);if(this.normalized)Q=h0(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.array[J*this.itemSize+2]=m0(Q),this}getW(J){let Q=n7(this.array[J*this.itemSize+3]);if(this.normalized)Q=h0(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.array[J*this.itemSize+3]=m0(Q),this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=lJ(Q,this.array),Z=lJ(Z,this.array);return this.array[J+0]=m0(Q),this.array[J+1]=m0(Z),this}setXYZ(J,Q,Z,$){if(J*=this.itemSize,this.normalized)Q=lJ(Q,this.array),Z=lJ(Z,this.array),$=lJ($,this.array);return this.array[J+0]=m0(Q),this.array[J+1]=m0(Z),this.array[J+2]=m0($),this}setXYZW(J,Q,Z,$,W){if(J*=this.itemSize,this.normalized)Q=lJ(Q,this.array),Z=lJ(Z,this.array),$=lJ($,this.array),W=lJ(W,this.array);return this.array[J+0]=m0(Q),this.array[J+1]=m0(Z),this.array[J+2]=m0($),this.array[J+3]=m0(W),this}}class BJ extends K0{constructor(J,Q,Z){super(new Float32Array(J),Q,Z)}}var JE=0,e0=/*@__PURE__*/new jJ,t$=/*@__PURE__*/new J0,a9=/*@__PURE__*/new A,n0=/*@__PURE__*/new w0,h7=/*@__PURE__*/new w0,B0=/*@__PURE__*/new A;class dJ extends Q8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=s0(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((AH(J))?F6:R6)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,Z=0){this.groups.push({start:J,count:Q,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let W=new pJ().getNormalMatrix(J);Z.applyNormalMatrix(W),Z.needsUpdate=!0}let $=this.attributes.tangent;if($!==void 0)$.transformDirection(J),$.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return e0.makeRotationFromQuaternion(J),this.applyMatrix4(e0),this}rotateX(J){return e0.makeRotationX(J),this.applyMatrix4(e0),this}rotateY(J){return e0.makeRotationY(J),this.applyMatrix4(e0),this}rotateZ(J){return e0.makeRotationZ(J),this.applyMatrix4(e0),this}translate(J,Q,Z){return e0.makeTranslation(J,Q,Z),this.applyMatrix4(e0),this}scale(J,Q,Z){return e0.makeScale(J,Q,Z),this.applyMatrix4(e0),this}lookAt(J){return t$.lookAt(J),t$.updateMatrix(),this.applyMatrix4(t$.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(a9).negate(),this.translate(a9.x,a9.y,a9.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let Z=[];for(let $=0,W=J.length;$<W;$++){let H=J[$];Z.push(H.x,H.y,H.z||0)}this.setAttribute("position",new BJ(Z,3))}else{let Z=Math.min(J.length,Q.count);for(let $=0;$<Z;$++){let W=J[$];Q.setXYZ($,W.x,W.y,W.z||0)}if(J.length>Q.count);Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new w0;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let Z=0,$=Q.length;Z<$;Z++){let W=Q[Z];if(n0.setFromBufferAttribute(W),this.morphTargetsRelative)B0.addVectors(this.boundingBox.min,n0.min),this.boundingBox.expandByPoint(B0),B0.addVectors(this.boundingBox.max,n0.max),this.boundingBox.expandByPoint(B0);else this.boundingBox.expandByPoint(n0.min),this.boundingBox.expandByPoint(n0.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z));}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new z0;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){this.boundingSphere.set(new A,1/0);return}if(J){let Z=this.boundingSphere.center;if(n0.setFromBufferAttribute(J),Q)for(let W=0,H=Q.length;W<H;W++){let K=Q[W];if(h7.setFromBufferAttribute(K),this.morphTargetsRelative)B0.addVectors(n0.min,h7.min),n0.expandByPoint(B0),B0.addVectors(n0.max,h7.max),n0.expandByPoint(B0);else n0.expandByPoint(h7.min),n0.expandByPoint(h7.max)}n0.getCenter(Z);let $=0;for(let W=0,H=J.count;W<H;W++)B0.fromBufferAttribute(J,W),$=Math.max($,Z.distanceToSquared(B0));if(Q)for(let W=0,H=Q.length;W<H;W++){let K=Q[W],Y=this.morphTargetsRelative;for(let X=0,U=K.count;X<U;X++){if(B0.fromBufferAttribute(K,X),Y)a9.fromBufferAttribute(J,X),B0.add(a9);$=Math.max($,Z.distanceToSquared(B0))}}if(this.boundingSphere.radius=Math.sqrt($),isNaN(this.boundingSphere.radius));}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0)return;let{position:Z,normal:$,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new K0(new Float32Array(4*Z.count),4));let H=this.getAttribute("tangent"),K=[],Y=[];for(let w=0;w<Z.count;w++)K[w]=new A,Y[w]=new A;let X=new A,U=new A,G=new A,E=new i,N=new i,q=new i,R=new A,F=new A;function O(w,y,L){X.fromBufferAttribute(Z,w),U.fromBufferAttribute(Z,y),G.fromBufferAttribute(Z,L),E.fromBufferAttribute(W,w),N.fromBufferAttribute(W,y),q.fromBufferAttribute(W,L),U.sub(X),G.sub(X),N.sub(E),q.sub(E);let z=1/(N.x*q.y-q.x*N.y);if(!isFinite(z))return;R.copy(U).multiplyScalar(q.y).addScaledVector(G,-N.y).multiplyScalar(z),F.copy(G).multiplyScalar(N.x).addScaledVector(U,-q.x).multiplyScalar(z),K[w].add(R),K[y].add(R),K[L].add(R),Y[w].add(F),Y[y].add(F),Y[L].add(F)}let D=this.groups;if(D.length===0)D=[{start:0,count:J.count}];for(let w=0,y=D.length;w<y;++w){let L=D[w],z=L.start,S=L.count;for(let g=z,p=z+S;g<p;g+=3)O(J.getX(g+0),J.getX(g+1),J.getX(g+2))}let M=new A,k=new A,I=new A,P=new A;function _(w){I.fromBufferAttribute($,w),P.copy(I);let y=K[w];M.copy(y),M.sub(I.multiplyScalar(I.dot(y))).normalize(),k.crossVectors(P,y);let z=k.dot(Y[w])<0?-1:1;H.setXYZW(w,M.x,M.y,M.z,z)}for(let w=0,y=D.length;w<y;++w){let L=D[w],z=L.start,S=L.count;for(let g=z,p=z+S;g<p;g+=3)_(J.getX(g+0)),_(J.getX(g+1)),_(J.getX(g+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let Z=this.getAttribute("normal");if(Z===void 0)Z=new K0(new Float32Array(Q.count*3),3),this.setAttribute("normal",Z);else for(let E=0,N=Z.count;E<N;E++)Z.setXYZ(E,0,0,0);let $=new A,W=new A,H=new A,K=new A,Y=new A,X=new A,U=new A,G=new A;if(J)for(let E=0,N=J.count;E<N;E+=3){let q=J.getX(E+0),R=J.getX(E+1),F=J.getX(E+2);$.fromBufferAttribute(Q,q),W.fromBufferAttribute(Q,R),H.fromBufferAttribute(Q,F),U.subVectors(H,W),G.subVectors($,W),U.cross(G),K.fromBufferAttribute(Z,q),Y.fromBufferAttribute(Z,R),X.fromBufferAttribute(Z,F),K.add(U),Y.add(U),X.add(U),Z.setXYZ(q,K.x,K.y,K.z),Z.setXYZ(R,Y.x,Y.y,Y.z),Z.setXYZ(F,X.x,X.y,X.z)}else for(let E=0,N=Q.count;E<N;E+=3)$.fromBufferAttribute(Q,E+0),W.fromBufferAttribute(Q,E+1),H.fromBufferAttribute(Q,E+2),U.subVectors(H,W),G.subVectors($,W),U.cross(G),Z.setXYZ(E+0,U.x,U.y,U.z),Z.setXYZ(E+1,U.x,U.y,U.z),Z.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,Z=J.count;Q<Z;Q++)B0.fromBufferAttribute(J,Q),B0.normalize(),J.setXYZ(Q,B0.x,B0.y,B0.z)}toNonIndexed(){function J(K,Y){let{array:X,itemSize:U,normalized:G}=K,E=new X.constructor(Y.length*U),N=0,q=0;for(let R=0,F=Y.length;R<F;R++){if(K.isInterleavedBufferAttribute)N=Y[R]*K.data.stride+K.offset;else N=Y[R]*U;for(let O=0;O<U;O++)E[q++]=X[N++]}return new K0(E,U,G)}if(this.index===null)return this;let Q=new dJ,Z=this.index.array,$=this.attributes;for(let K in $){let Y=$[K],X=J(Y,Z);Q.setAttribute(K,X)}let W=this.morphAttributes;for(let K in W){let Y=[],X=W[K];for(let U=0,G=X.length;U<G;U++){let E=X[U],N=J(E,Z);Y.push(N)}Q.morphAttributes[K]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let K=0,Y=H.length;K<Y;K++){let X=H[K];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let Z=this.attributes;for(let Y in Z){let X=Z[Y];J.data.attributes[Y]=X.toJSON(J.data)}let $={},W=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let G=0,E=X.length;G<E;G++){let N=X[G];U.push(N.toJSON(J.data))}if(U.length>0)$[Y]=U,W=!0}if(W)J.data.morphAttributes=$,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let K=this.boundingSphere;if(K!==null)J.data.boundingSphere={center:K.center.toArray(),radius:K.radius};return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone(Q));let $=J.attributes;for(let X in $){let U=$[X];this.setAttribute(X,U.clone(Q))}let W=J.morphAttributes;for(let X in W){let U=[],G=W[X];for(let E=0,N=G.length;E<N;E++)U.push(G[E].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let X=0,U=H.length;X<U;X++){let G=H[X];this.addGroup(G.start,G.count,G.materialIndex)}let K=J.boundingBox;if(K!==null)this.boundingBox=K.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var NY=/*@__PURE__*/new jJ,$9=/*@__PURE__*/new r8,UQ=/*@__PURE__*/new z0,qY=/*@__PURE__*/new A,GQ=/*@__PURE__*/new A,EQ=/*@__PURE__*/new A,NQ=/*@__PURE__*/new A,e$=/*@__PURE__*/new A,qQ=/*@__PURE__*/new A,DY=/*@__PURE__*/new A,DQ=/*@__PURE__*/new A;class O0 extends J0{constructor(J=new dJ,Q=new M8){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=$.length;W<H;W++){let K=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[K]=W}}}}getVertexPosition(J,Q){let Z=this.geometry,$=Z.attributes.position,W=Z.morphAttributes.position,H=Z.morphTargetsRelative;Q.fromBufferAttribute($,J);let K=this.morphTargetInfluences;if(W&&K){qQ.set(0,0,0);for(let Y=0,X=W.length;Y<X;Y++){let U=K[Y],G=W[Y];if(U===0)continue;if(e$.fromBufferAttribute(G,J),H)qQ.addScaledVector(e$,U);else qQ.addScaledVector(e$.sub(Q),U)}Q.add(qQ)}return Q}raycast(J,Q){let Z=this.geometry,$=this.material,W=this.matrixWorld;if($===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(UQ.copy(Z.boundingSphere),UQ.applyMatrix4(W),$9.copy(J.ray).recast(J.near),UQ.containsPoint($9.origin)===!1){if($9.intersectSphere(UQ,qY)===null)return;if($9.origin.distanceToSquared(qY)>(J.far-J.near)**2)return}if(NY.copy(W).invert(),$9.copy(J.ray).applyMatrix4(NY),Z.boundingBox!==null){if($9.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,Q,$9)}_computeIntersections(J,Q,Z){let $,W=this.geometry,H=this.material,K=W.index,Y=W.attributes.position,X=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,E=W.groups,N=W.drawRange;if(K!==null)if(Array.isArray(H))for(let q=0,R=E.length;q<R;q++){let F=E[q],O=H[F.materialIndex],D=Math.max(F.start,N.start),M=Math.min(K.count,Math.min(F.start+F.count,N.start+N.count));for(let k=D,I=M;k<I;k+=3){let P=K.getX(k),_=K.getX(k+1),w=K.getX(k+2);if($=OQ(this,O,J,Z,X,U,G,P,_,w),$)$.faceIndex=Math.floor(k/3),$.face.materialIndex=F.materialIndex,Q.push($)}}else{let q=Math.max(0,N.start),R=Math.min(K.count,N.start+N.count);for(let F=q,O=R;F<O;F+=3){let D=K.getX(F),M=K.getX(F+1),k=K.getX(F+2);if($=OQ(this,H,J,Z,X,U,G,D,M,k),$)$.faceIndex=Math.floor(F/3),Q.push($)}}else if(Y!==void 0)if(Array.isArray(H))for(let q=0,R=E.length;q<R;q++){let F=E[q],O=H[F.materialIndex],D=Math.max(F.start,N.start),M=Math.min(Y.count,Math.min(F.start+F.count,N.start+N.count));for(let k=D,I=M;k<I;k+=3){let P=k,_=k+1,w=k+2;if($=OQ(this,O,J,Z,X,U,G,P,_,w),$)$.faceIndex=Math.floor(k/3),$.face.materialIndex=F.materialIndex,Q.push($)}}else{let q=Math.max(0,N.start),R=Math.min(Y.count,N.start+N.count);for(let F=q,O=R;F<O;F+=3){let D=F,M=F+1,k=F+2;if($=OQ(this,H,J,Z,X,U,G,D,M,k),$)$.faceIndex=Math.floor(F/3),Q.push($)}}}}function QE(J,Q,Z,$,W,H,K,Y){let X;if(Q.side===1)X=$.intersectTriangle(K,H,W,!0,Y);else X=$.intersectTriangle(W,H,K,Q.side===0,Y);if(X===null)return null;DQ.copy(Y),DQ.applyMatrix4(J.matrixWorld);let U=Z.ray.origin.distanceTo(DQ);if(U<Z.near||U>Z.far)return null;return{distance:U,point:DQ.clone(),object:J}}function OQ(J,Q,Z,$,W,H,K,Y,X,U){J.getVertexPosition(Y,GQ),J.getVertexPosition(X,EQ),J.getVertexPosition(U,NQ);let G=QE(J,Q,Z,$,GQ,EQ,NQ,DY);if(G){let E=new A;if(x0.getBarycoord(DY,GQ,EQ,NQ,E),W)G.uv=x0.getInterpolatedAttribute(W,Y,X,U,E,new i);if(H)G.uv1=x0.getInterpolatedAttribute(H,Y,X,U,E,new i);if(K){if(G.normal=x0.getInterpolatedAttribute(K,Y,X,U,E,new A),G.normal.dot($.direction)>0)G.normal.multiplyScalar(-1)}let N={a:Y,b:X,c:U,normal:new A,materialIndex:0};x0.getNormal(GQ,EQ,NQ,N.normal),G.face=N,G.barycoord=E}return G}class t8 extends dJ{constructor(J=1,Q=1,Z=1,$=1,W=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:Z,widthSegments:$,heightSegments:W,depthSegments:H};let K=this;$=Math.floor($),W=Math.floor(W),H=Math.floor(H);let Y=[],X=[],U=[],G=[],E=0,N=0;q("z","y","x",-1,-1,Z,Q,J,H,W,0),q("z","y","x",1,-1,Z,Q,-J,H,W,1),q("x","z","y",1,1,J,Z,Q,$,H,2),q("x","z","y",1,-1,J,Z,-Q,$,H,3),q("x","y","z",1,-1,J,Q,Z,$,W,4),q("x","y","z",-1,-1,J,Q,-Z,$,W,5),this.setIndex(Y),this.setAttribute("position",new BJ(X,3)),this.setAttribute("normal",new BJ(U,3)),this.setAttribute("uv",new BJ(G,2));function q(R,F,O,D,M,k,I,P,_,w,y){let L=k/_,z=I/w,S=k/2,g=I/2,p=P/2,l=_+1,s=w+1,d=0,ZJ=0,m=new A;for(let EJ=0;EJ<s;EJ++){let UJ=EJ*z-g;for(let SJ=0;SJ<l;SJ++){let sJ=SJ*L-S;m[R]=sJ*D,m[F]=UJ*M,m[O]=p,X.push(m.x,m.y,m.z),m[R]=0,m[F]=0,m[O]=P>0?1:-1,U.push(m.x,m.y,m.z),G.push(SJ/_),G.push(1-EJ/w),d+=1}}for(let EJ=0;EJ<w;EJ++)for(let UJ=0;UJ<_;UJ++){let SJ=E+UJ+l*EJ,sJ=E+UJ+l*(EJ+1),c=E+(UJ+1)+l*(EJ+1),KJ=E+(UJ+1)+l*EJ;Y.push(SJ,sJ,KJ),Y.push(sJ,c,KJ),ZJ+=6}K.addGroup(N,ZJ,y),N+=ZJ,E+=d}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new t8(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function T9(J){let Q={};for(let Z in J){Q[Z]={};for(let $ in J[Z]){let W=J[Z][$];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)Q[Z][$]=null;else Q[Z][$]=W.clone();else if(Array.isArray(W))Q[Z][$]=W.slice();else Q[Z][$]=W}}return Q}function y0(J){let Q={};for(let Z=0;Z<J.length;Z++){let $=T9(J[Z]);for(let W in $)Q[W]=$[W]}return Q}function ZE(J){let Q=[];for(let Z=0;Z<J.length;Z++)Q.push(J[Z].clone());return Q}function xH(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return rJ.workingColorSpace}var gH={clone:T9,merge:y0},$E=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class i0 extends I0{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$E,this.fragmentShader=WE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=T9(J.uniforms),this.uniformsGroups=ZE(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let $ in this.uniforms){let H=this.uniforms[$].value;if(H&&H.isTexture)Q.uniforms[$]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Q.uniforms[$]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Q.uniforms[$]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Q.uniforms[$]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Q.uniforms[$]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Q.uniforms[$]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Q.uniforms[$]={type:"m4",value:H.toArray()};else Q.uniforms[$]={value:H}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let Z={};for(let $ in this.extensions)if(this.extensions[$]===!0)Z[$]=!0;if(Object.keys(Z).length>0)Q.extensions=Z;return Q}}class M7 extends J0{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jJ,this.projectionMatrix=new jJ,this.projectionMatrixInverse=new jJ,this.coordinateSystem=2000}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var d8=/*@__PURE__*/new A,OY=/*@__PURE__*/new i,RY=/*@__PURE__*/new i;class M0 extends M7{constructor(J=50,Q=1,Z=0.1,$=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=$,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=D9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(q9*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return D9*2*Math.atan(Math.tan(q9*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,Z){d8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(d8.x,d8.y).multiplyScalar(-J/d8.z),d8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(d8.x,d8.y).multiplyScalar(-J/d8.z)}getViewSize(J,Q){return this.getViewBounds(J,OY,RY),Q.subVectors(RY,OY)}setViewOffset(J,Q,Z,$,W,H){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=$,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(q9*0.5*this.fov)/this.zoom,Z=2*Q,$=this.aspect*Z,W=-0.5*$,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=H;W+=H.offsetX*$/Y,Q-=H.offsetY*Z/X,$*=H.width/Y,Z*=H.height/X}let K=this.filmOffset;if(K!==0)W+=J*K/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+$,Q,Q-Z,J,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var r9=-90,t9=1;class jZ extends J0{constructor(J,Q,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let $=new M0(r9,t9,J,Q);$.layers=this.layers,this.add($);let W=new M0(r9,t9,J,Q);W.layers=this.layers,this.add(W);let H=new M0(r9,t9,J,Q);H.layers=this.layers,this.add(H);let K=new M0(r9,t9,J,Q);K.layers=this.layers,this.add(K);let Y=new M0(r9,t9,J,Q);Y.layers=this.layers,this.add(Y);let X=new M0(r9,t9,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[Z,$,W,H,K,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),$.up.set(0,1,0),$.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),K.up.set(0,1,0),K.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),$.up.set(0,-1,0),$.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),K.up.set(0,-1,0),K.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:$}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,H,K,Y,X,U]=this.children,G=J.getRenderTarget(),E=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),q=J.xr.enabled;J.xr.enabled=!1;let R=Z.texture.generateMipmaps;Z.texture.generateMipmaps=!1,J.setRenderTarget(Z,0,$),J.render(Q,W),J.setRenderTarget(Z,1,$),J.render(Q,H),J.setRenderTarget(Z,2,$),J.render(Q,K),J.setRenderTarget(Z,3,$),J.render(Q,Y),J.setRenderTarget(Z,4,$),J.render(Q,X),Z.texture.generateMipmaps=R,J.setRenderTarget(Z,5,$),J.render(Q,U),J.setRenderTarget(G,E,N),J.xr.enabled=q,Z.texture.needsPMREMUpdate=!0}}class S9 extends E0{constructor(J,Q,Z,$,W,H,K,Y,X,U){J=J!==void 0?J:[],Q=Q!==void 0?Q:301;super(J,Q,Z,$,W,H,K,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class yZ extends Z8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},$=[Z,Z,Z,Z,Z,Z];this.texture=new S9($,Q.mapping,Q.wrapS,Q.wrapT,Q.magFilter,Q.minFilter,Q.format,Q.type,Q.anisotropy,Q.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=Q.generateMipmaps!==void 0?Q.generateMipmaps:!1,this.texture.minFilter=Q.minFilter!==void 0?Q.minFilter:1006}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},$=new t8(5,5,5),W=new i0({name:"CubemapFromEquirect",uniforms:T9(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let H=new O0($,W),K=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new jZ(1,10,this).update(J,H),Q.minFilter=K,H.geometry.dispose(),H.material.dispose(),this}clear(J,Q,Z,$){let W=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Q,Z,$);J.setRenderTarget(W)}}class c8 extends J0{constructor(){super();this.isGroup=!0,this.type="Group"}}var HE={type:"move"};class V7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new c8,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new c8,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new c8,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let Z of J.hand.values())this._getHandJoint(Q,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,Z){let $=null,W=null,H=null,K=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){H=!0;for(let R of J.hand.values()){let F=Q.getJointPose(R,Z),O=this._getHandJoint(X,R);if(F!==null)O.matrix.fromArray(F.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=F.radius;O.visible=F!==null}let U=X.joints["index-finger-tip"],G=X.joints["thumb-tip"],E=U.position.distanceTo(G.position),N=0.02,q=0.005;if(X.inputState.pinching&&E>N+q)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&E<=N-q)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,Z),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1}}if(K!==null){if($=Q.getPose(J.targetRaySpace,Z),$===null&&W!==null)$=W;if($!==null){if(K.matrix.fromArray($.transform.matrix),K.matrix.decompose(K.position,K.rotation,K.scale),K.matrixWorldNeedsUpdate=!0,$.linearVelocity)K.hasLinearVelocity=!0,K.linearVelocity.copy($.linearVelocity);else K.hasLinearVelocity=!1;if($.angularVelocity)K.hasAngularVelocity=!0,K.angularVelocity.copy($.angularVelocity);else K.hasAngularVelocity=!1;this.dispatchEvent(HE)}}}if(K!==null)K.visible=$!==null;if(Y!==null)Y.visible=W!==null;if(X!==null)X.visible=H!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let Z=new c8;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[Q.jointName]=Z,J.add(Z)}return J.joints[Q.jointName]}}class k6{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new qJ(J),this.density=Q}clone(){return new k6(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class M6{constructor(J,Q=1,Z=1000){this.isFog=!0,this.name="",this.color=new qJ(J),this.near=Q,this.far=Z}clone(){return new M6(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class vZ extends J0{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new l0,this.environmentIntensity=1,this.environmentRotation=new l0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}class L7{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=s0()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,Z){J*=this.stride,Z*=Q.stride;for(let $=0,W=this.stride;$<W;$++)this.array[J+$]=Q.array[Z+$];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=s0();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Z=new this.constructor(Q,this.stride);return Z.setUsage(this.usage),Z}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=s0();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var b0=/*@__PURE__*/new A;class n8{constructor(J,Q,Z,$=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=Z,this.normalized=$}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,Z=this.data.count;Q<Z;Q++)b0.fromBufferAttribute(this,Q),b0.applyMatrix4(J),this.setXYZ(Q,b0.x,b0.y,b0.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)b0.fromBufferAttribute(this,Q),b0.applyNormalMatrix(J),this.setXYZ(Q,b0.x,b0.y,b0.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)b0.fromBufferAttribute(this,Q),b0.transformDirection(J),this.setXYZ(Q,b0.x,b0.y,b0.z);return this}getComponent(J,Q){let Z=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)Z=h0(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=lJ(Z,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=Z,this}setX(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=h0(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=h0(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=h0(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=h0(Q,this.array);return Q}setXY(J,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=lJ(Q,this.array),Z=lJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this}setXYZ(J,Q,Z,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=lJ(Q,this.array),Z=lJ(Z,this.array),$=lJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=$,this}setXYZW(J,Q,Z,$,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=lJ(Q,this.array),Z=lJ(Z,this.array),$=lJ($,this.array),W=lJ(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=$,this.data.array[J+3]=W,this}clone(J){if(J===void 0){let Q=[];for(let Z=0;Z<this.count;Z++){let $=Z*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[$+W])}return new K0(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new n8(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){let Q=[];for(let Z=0;Z<this.count;Z++){let $=Z*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[$+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}class V6 extends I0{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qJ(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var e9,x7=/*@__PURE__*/new A,J7=/*@__PURE__*/new A,Q7=/*@__PURE__*/new A,Z7=/*@__PURE__*/new i,g7=/*@__PURE__*/new i,RU=/*@__PURE__*/new jJ,RQ=/*@__PURE__*/new A,p7=/*@__PURE__*/new A,FQ=/*@__PURE__*/new A,FY=/*@__PURE__*/new i,JW=/*@__PURE__*/new i,kY=/*@__PURE__*/new i;class fZ extends J0{constructor(J=new V6){super();if(this.isSprite=!0,this.type="Sprite",e9===void 0){e9=new dJ;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),Z=new L7(Q,5);e9.setIndex([0,1,2,0,2,3]),e9.setAttribute("position",new n8(Z,3,0,!1)),e9.setAttribute("uv",new n8(Z,2,3,!1))}this.geometry=e9,this.material=J,this.center=new i(0.5,0.5)}raycast(J,Q){if(J.camera===null);if(J7.setFromMatrixScale(this.matrixWorld),RU.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),Q7.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)J7.multiplyScalar(-Q7.z);let Z=this.material.rotation,$,W;if(Z!==0)W=Math.cos(Z),$=Math.sin(Z);let H=this.center;kQ(RQ.set(-0.5,-0.5,0),Q7,H,J7,$,W),kQ(p7.set(0.5,-0.5,0),Q7,H,J7,$,W),kQ(FQ.set(0.5,0.5,0),Q7,H,J7,$,W),FY.set(0,0),JW.set(1,0),kY.set(1,1);let K=J.ray.intersectTriangle(RQ,p7,FQ,!1,x7);if(K===null){if(kQ(p7.set(-0.5,0.5,0),Q7,H,J7,$,W),JW.set(0,1),K=J.ray.intersectTriangle(RQ,FQ,p7,!1,x7),K===null)return}let Y=J.ray.origin.distanceTo(x7);if(Y<J.near||Y>J.far)return;Q.push({distance:Y,point:x7.clone(),uv:x0.getInterpolation(x7,RQ,p7,FQ,FY,JW,kY,new i),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function kQ(J,Q,Z,$,W,H){if(Z7.subVectors(J,Z).addScalar(0.5).multiply($),W!==void 0)g7.x=H*Z7.x-W*Z7.y,g7.y=W*Z7.x+H*Z7.y;else g7.copy(Z7);J.copy(Q),J.x+=g7.x,J.y+=g7.y,J.applyMatrix4(RU)}var MQ=/*@__PURE__*/new A,MY=/*@__PURE__*/new A;class bZ extends J0{constructor(){super();this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(J){super.copy(J,!1);let Q=J.levels;for(let Z=0,$=Q.length;Z<$;Z++){let W=Q[Z];this.addLevel(W.object.clone(),W.distance,W.hysteresis)}return this.autoUpdate=J.autoUpdate,this}addLevel(J,Q=0,Z=0){Q=Math.abs(Q);let $=this.levels,W;for(W=0;W<$.length;W++)if(Q<$[W].distance)break;return $.splice(W,0,{distance:Q,hysteresis:Z,object:J}),this.add(J),this}removeLevel(J){let Q=this.levels;for(let Z=0;Z<Q.length;Z++)if(Q[Z].distance===J){let $=Q.splice(Z,1);return this.remove($[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(J){let Q=this.levels;if(Q.length>0){let Z,$;for(Z=1,$=Q.length;Z<$;Z++){let W=Q[Z].distance;if(Q[Z].object.visible)W-=W*Q[Z].hysteresis;if(J<W)break}return Q[Z-1].object}return null}raycast(J,Q){if(this.levels.length>0){MQ.setFromMatrixPosition(this.matrixWorld);let $=J.ray.origin.distanceTo(MQ);this.getObjectForDistance($).raycast(J,Q)}}update(J){let Q=this.levels;if(Q.length>1){MQ.setFromMatrixPosition(J.matrixWorld),MY.setFromMatrixPosition(this.matrixWorld);let Z=MQ.distanceTo(MY)/J.zoom;Q[0].object.visible=!0;let $,W;for($=1,W=Q.length;$<W;$++){let H=Q[$].distance;if(Q[$].object.visible)H-=H*Q[$].hysteresis;if(Z>=H)Q[$-1].object.visible=!1,Q[$].object.visible=!0;else break}this._currentLevel=$-1;for(;$<W;$++)Q[$].object.visible=!1}}toJSON(J){let Q=super.toJSON(J);if(this.autoUpdate===!1)Q.object.autoUpdate=!1;Q.object.levels=[];let Z=this.levels;for(let $=0,W=Z.length;$<W;$++){let H=Z[$];Q.object.levels.push({object:H.object.uuid,distance:H.distance,hysteresis:H.hysteresis})}return Q}}var VY=/*@__PURE__*/new A,LY=/*@__PURE__*/new eJ,BY=/*@__PURE__*/new eJ,KE=/*@__PURE__*/new A,zY=/*@__PURE__*/new jJ,VQ=/*@__PURE__*/new A,QW=/*@__PURE__*/new z0,IY=/*@__PURE__*/new jJ,ZW=/*@__PURE__*/new r8;class hZ extends O0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new jJ,this.bindMatrixInverse=new jJ,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new w0;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let Z=0;Z<Q.count;Z++)this.getVertexPosition(Z,VQ),this.boundingBox.expandByPoint(VQ)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new z0;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let Z=0;Z<Q.count;Z++)this.getVertexPosition(Z,VQ),this.boundingSphere.expandByPoint(VQ)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let Z=this.material,$=this.matrixWorld;if(Z===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(QW.copy(this.boundingSphere),QW.applyMatrix4($),J.ray.intersectsSphere(QW)===!1)return;if(IY.copy($).invert(),ZW.copy(J.ray).applyMatrix4(IY),this.boundingBox!==null){if(ZW.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,ZW)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new eJ,Q=this.geometry.attributes.skinWeight;for(let Z=0,$=Q.count;Z<$;Z++){J.fromBufferAttribute(Q,Z);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW(Z,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert()}applyBoneTransform(J,Q){let Z=this.skeleton,$=this.geometry;LY.fromBufferAttribute($.attributes.skinIndex,J),BY.fromBufferAttribute($.attributes.skinWeight,J),VY.copy(Q).applyMatrix4(this.bindMatrix),Q.set(0,0,0);for(let W=0;W<4;W++){let H=BY.getComponent(W);if(H!==0){let K=LY.getComponent(W);zY.multiplyMatrices(Z.bones[K].matrixWorld,Z.boneInverses[K]),Q.addScaledVector(KE.copy(VY).applyMatrix4(zY),H)}}return Q.applyMatrix4(this.bindMatrixInverse)}}class L6 extends J0{constructor(){super();this.isBone=!0,this.type="Bone"}}class J8 extends E0{constructor(J=null,Q=1,Z=1,$,W,H,K,Y,X=1003,U=1003,G,E){super(null,H,K,Y,X,U,$,W,G,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:Z},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var _Y=/*@__PURE__*/new jJ,YE=/*@__PURE__*/new jJ;class B6{constructor(J=[],Q=[]){this.uuid=s0(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){this.boneInverses=[];for(let Z=0,$=this.bones.length;Z<$;Z++)this.boneInverses.push(new jJ)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let Z=new jJ;if(this.bones[J])Z.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push(Z)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let Z=this.bones[J];if(Z)Z.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let Z=this.bones[J];if(Z){if(Z.parent&&Z.parent.isBone)Z.matrix.copy(Z.parent.matrixWorld).invert(),Z.matrix.multiply(Z.matrixWorld);else Z.matrix.copy(Z.matrixWorld);Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)}}}update(){let J=this.bones,Q=this.boneInverses,Z=this.boneMatrices,$=this.boneTexture;for(let W=0,H=J.length;W<H;W++){let K=J[W]?J[W].matrixWorld:YE;_Y.multiplyMatrices(K,Q[W]),_Y.toArray(Z,W*16)}if($!==null)$.needsUpdate=!0}clone(){return new B6(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let Z=new J8(Q,J,J,1023,1015);return Z.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=Z,this}getBoneByName(J){for(let Q=0,Z=this.bones.length;Q<Z;Q++){let $=this.bones[Q];if($.name===J)return $}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let Z=0,$=J.bones.length;Z<$;Z++){let W=J.bones[Z],H=Q[W];if(H===void 0)H=new L6;this.bones.push(H),this.boneInverses.push(new jJ().fromArray(J.boneInverses[Z]))}return this.init(),this}toJSON(){let J={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,Z=this.boneInverses;for(let $=0,W=Q.length;$<W;$++){let H=Q[$];J.bones.push(H.uuid);let K=Z[$];J.boneInverses.push(K.toArray())}return J}}class s8 extends K0{constructor(J,Q,Z,$=1){super(J,Q,Z);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=$}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var $7=/*@__PURE__*/new jJ,CY=/*@__PURE__*/new jJ,LQ=[],wY=/*@__PURE__*/new w0,XE=/*@__PURE__*/new jJ,m7=/*@__PURE__*/new O0,l7=/*@__PURE__*/new z0;class xZ extends O0{constructor(J,Q,Z){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new s8(new Float32Array(Z*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Z,this.boundingBox=null,this.boundingSphere=null;for(let $=0;$<Z;$++)this.setMatrixAt($,XE)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new w0;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,$7),wY.copy(J.boundingBox).applyMatrix4($7),this.boundingBox.union(wY)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new z0;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,$7),l7.copy(J.boundingSphere).applyMatrix4($7),this.boundingSphere.union(l7)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let Z=Q.morphTargetInfluences,$=this.morphTexture.source.data.data,W=Z.length+1,H=J*W+1;for(let K=0;K<Z.length;K++)Z[K]=$[H+K]}raycast(J,Q){let Z=this.matrixWorld,$=this.count;if(m7.geometry=this.geometry,m7.material=this.material,m7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(l7.copy(this.boundingSphere),l7.applyMatrix4(Z),J.ray.intersectsSphere(l7)===!1)return;for(let W=0;W<$;W++){this.getMatrixAt(W,$7),CY.multiplyMatrices(Z,$7),m7.matrixWorld=CY,m7.raycast(J,LQ);for(let H=0,K=LQ.length;H<K;H++){let Y=LQ[H];Y.instanceId=W,Y.object=this,Q.push(Y)}LQ.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new s8(new Float32Array(this.instanceMatrix.count*3).fill(1),3);Q.toArray(this.instanceColor.array,J*3)}setMatrixAt(J,Q){Q.toArray(this.instanceMatrix.array,J*16)}setMorphAt(J,Q){let Z=Q.morphTargetInfluences,$=Z.length+1;if(this.morphTexture===null)this.morphTexture=new J8(new Float32Array($*this.count),$,this.count,1028,1015);let W=this.morphTexture.source.data.data,H=0;for(let X=0;X<Z.length;X++)H+=Z[X];let K=this.geometry.morphTargetsRelative?1:1-H,Y=$*J;W[Y]=K,W.set(Z,Y+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null;return this}}var $W=/*@__PURE__*/new A,UE=/*@__PURE__*/new A,GE=/*@__PURE__*/new pJ;class O8{constructor(J=new A(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,Z,$){return this.normal.set(J,Q,Z),this.constant=$,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,Z){let $=$W.subVectors(Z,Q).cross(UE.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint($,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let Z=J.delta($W),$=this.normal.dot(Z);if($===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/$;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return Q<0&&Z>0||Z<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let Z=Q||GE.getNormalMatrix(J),$=this.coplanarPoint($W).applyMatrix4(J),W=this.normal.applyMatrix3(Z).normalize();return this.constant=-$.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var W9=/*@__PURE__*/new z0,BQ=/*@__PURE__*/new A;class j9{constructor(J=new O8,Q=new O8,Z=new O8,$=new O8,W=new O8,H=new O8){this.planes=[J,Q,Z,$,W,H]}set(J,Q,Z,$,W,H){let K=this.planes;return K[0].copy(J),K[1].copy(Q),K[2].copy(Z),K[3].copy($),K[4].copy(W),K[5].copy(H),this}copy(J){let Q=this.planes;for(let Z=0;Z<6;Z++)Q[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,Q=2000){let Z=this.planes,$=J.elements,W=$[0],H=$[1],K=$[2],Y=$[3],X=$[4],U=$[5],G=$[6],E=$[7],N=$[8],q=$[9],R=$[10],F=$[11],O=$[12],D=$[13],M=$[14],k=$[15];if(Z[0].setComponents(Y-W,E-X,F-N,k-O).normalize(),Z[1].setComponents(Y+W,E+X,F+N,k+O).normalize(),Z[2].setComponents(Y+H,E+U,F+q,k+D).normalize(),Z[3].setComponents(Y-H,E-U,F-q,k-D).normalize(),Z[4].setComponents(Y-K,E-G,F-R,k-M).normalize(),Q===2000)Z[5].setComponents(Y+K,E+G,F+R,k+M).normalize();else if(Q===2001)Z[5].setComponents(K,G,R,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();W9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();W9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(W9)}intersectsSprite(J){return W9.center.set(0,0,0),W9.radius=0.7071067811865476,W9.applyMatrix4(J.matrixWorld),this.intersectsSphere(W9)}intersectsSphere(J){let Q=this.planes,Z=J.center,$=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint(Z)<$)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let Z=0;Z<6;Z++){let $=Q[Z];if(BQ.x=$.normal.x>0?J.max.x:J.min.x,BQ.y=$.normal.y>0?J.max.y:J.min.y,BQ.z=$.normal.z>0?J.max.z:J.min.z,$.distanceToPoint(BQ)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WW(J,Q){return J-Q}function EE(J,Q){return J.z-Q.z}function NE(J,Q){return Q.z-J.z}class FU{constructor(){this.index=0,this.pool=[],this.list=[]}push(J,Q,Z,$){let W=this.pool,H=this.list;if(this.index>=W.length)W.push({start:-1,count:-1,z:-1,index:-1});let K=W[this.index];H.push(K),this.index++,K.start=J,K.count=Q,K.z=Z,K.index=$}reset(){this.list.length=0,this.index=0}}var p0=/*@__PURE__*/new jJ,qE=/*@__PURE__*/new qJ(1,1,1),HW=/*@__PURE__*/new j9,zQ=/*@__PURE__*/new w0,H9=/*@__PURE__*/new z0,d7=/*@__PURE__*/new A,AY=/*@__PURE__*/new A,DE=/*@__PURE__*/new A,KW=/*@__PURE__*/new FU,S0=/*@__PURE__*/new O0,IQ=[];function OE(J,Q,Z=0){let $=Q.itemSize;if(J.isInterleavedBufferAttribute||J.array.constructor!==Q.array.constructor){let W=J.count;for(let H=0;H<W;H++)for(let K=0;K<$;K++)Q.setComponent(H+Z,K,J.getComponent(H,K))}else Q.array.set(J.array,Z*$);Q.needsUpdate=!0}function K9(J,Q){if(J.constructor!==Q.constructor){let Z=Math.min(J.length,Q.length);for(let $=0;$<Z;$++)Q[$]=J[$]}else{let Z=Math.min(J.length,Q.length);Q.set(new J.constructor(J.buffer,0,Z))}}class gZ extends O0{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(J,Q,Z=Q*2,$){super(new dJ,$);this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=J,this._maxVertexCount=Q,this._maxIndexCount=Z,this._multiDrawCounts=new Int32Array(J),this._multiDrawStarts=new Int32Array(J),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let J=Math.sqrt(this._maxInstanceCount*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4),Z=new J8(Q,J,J,1023,1015);this._matricesTexture=Z}_initIndirectTexture(){let J=Math.sqrt(this._maxInstanceCount);J=Math.ceil(J);let Q=new Uint32Array(J*J),Z=new J8(Q,J,J,1029,1014);this._indirectTexture=Z}_initColorsTexture(){let J=Math.sqrt(this._maxInstanceCount);J=Math.ceil(J);let Q=new Float32Array(J*J*4).fill(1),Z=new J8(Q,J,J,1023,1015);Z.colorSpace=rJ.workingColorSpace,this._colorsTexture=Z}_initializeGeometry(J){let Q=this.geometry,Z=this._maxVertexCount,$=this._maxIndexCount;if(this._geometryInitialized===!1){for(let W in J.attributes){let H=J.getAttribute(W),{array:K,itemSize:Y,normalized:X}=H,U=new K.constructor(Z*Y),G=new K0(U,Y,X);Q.setAttribute(W,G)}if(J.getIndex()!==null){let W=Z>65535?new Uint32Array($):new Uint16Array($);Q.setIndex(new K0(W,1))}this._geometryInitialized=!0}}_validateGeometry(J){let Q=this.geometry;if(Boolean(J.getIndex())!==Boolean(Q.getIndex()))throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let Z in Q.attributes){if(!J.hasAttribute(Z))throw new Error(`THREE.BatchedMesh: Added geometry missing "${Z}". All geometries must have consistent attributes.`);let $=J.getAttribute(Z),W=Q.getAttribute(Z);if($.itemSize!==W.itemSize||$.normalized!==W.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(J){let Q=this._instanceInfo;if(J<0||J>=Q.length||Q[J].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${J}. Instance is either out of range or has been deleted.`)}validateGeometryId(J){let Q=this._geometryInfo;if(J<0||J>=Q.length||Q[J].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${J}. Geometry is either out of range or has been deleted.`)}setCustomSort(J){return this.customSort=J,this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new w0;let J=this.boundingBox,Q=this._instanceInfo;J.makeEmpty();for(let Z=0,$=Q.length;Z<$;Z++){if(Q[Z].active===!1)continue;let W=Q[Z].geometryIndex;this.getMatrixAt(Z,p0),this.getBoundingBoxAt(W,zQ).applyMatrix4(p0),J.union(zQ)}}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new z0;let J=this.boundingSphere,Q=this._instanceInfo;J.makeEmpty();for(let Z=0,$=Q.length;Z<$;Z++){if(Q[Z].active===!1)continue;let W=Q[Z].geometryIndex;this.getMatrixAt(Z,p0),this.getBoundingSphereAt(W,H9).applyMatrix4(p0),J.union(H9)}}addInstance(J){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let Z={visible:!0,active:!0,geometryIndex:J},$=null;if(this._availableInstanceIds.length>0)this._availableInstanceIds.sort(WW),$=this._availableInstanceIds.shift(),this._instanceInfo[$]=Z;else $=this._instanceInfo.length,this._instanceInfo.push(Z);let W=this._matricesTexture;p0.identity().toArray(W.image.data,$*16),W.needsUpdate=!0;let H=this._colorsTexture;if(H)qE.toArray(H.image.data,$*4),H.needsUpdate=!0;return this._visibilityChanged=!0,$}addGeometry(J,Q=-1,Z=-1){this._initializeGeometry(J),this._validateGeometry(J);let $={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},W=this._geometryInfo;$.vertexStart=this._nextVertexStart,$.reservedVertexCount=Q===-1?J.getAttribute("position").count:Q;let H=J.getIndex();if(H!==null)$.indexStart=this._nextIndexStart,$.reservedIndexCount=Z===-1?H.count:Z;if($.indexStart!==-1&&$.indexStart+$.reservedIndexCount>this._maxIndexCount||$.vertexStart+$.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let Y;if(this._availableGeometryIds.length>0)this._availableGeometryIds.sort(WW),Y=this._availableGeometryIds.shift(),W[Y]=$;else Y=this._geometryCount,this._geometryCount++,W.push($);return this.setGeometryAt(Y,J),this._nextIndexStart=$.indexStart+$.reservedIndexCount,this._nextVertexStart=$.vertexStart+$.reservedVertexCount,Y}setGeometryAt(J,Q){if(J>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(Q);let Z=this.geometry,$=Z.getIndex()!==null,W=Z.getIndex(),H=Q.getIndex(),K=this._geometryInfo[J];if($&&H.count>K.reservedIndexCount||Q.attributes.position.count>K.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let{vertexStart:Y,reservedVertexCount:X}=K;K.vertexCount=Q.getAttribute("position").count;for(let U in Z.attributes){let G=Q.getAttribute(U),E=Z.getAttribute(U);OE(G,E,Y);let N=G.itemSize;for(let q=G.count,R=X;q<R;q++){let F=Y+q;for(let O=0;O<N;O++)E.setComponent(F,O,0)}E.needsUpdate=!0,E.addUpdateRange(Y*N,X*N)}if($){let{indexStart:U,reservedIndexCount:G}=K;K.indexCount=Q.getIndex().count;for(let E=0;E<H.count;E++)W.setX(U+E,Y+H.getX(E));for(let E=H.count,N=G;E<N;E++)W.setX(U+E,Y);W.needsUpdate=!0,W.addUpdateRange(U,K.reservedIndexCount)}if(K.start=$?K.indexStart:K.vertexStart,K.count=$?K.indexCount:K.vertexCount,K.boundingBox=null,Q.boundingBox!==null)K.boundingBox=Q.boundingBox.clone();if(K.boundingSphere=null,Q.boundingSphere!==null)K.boundingSphere=Q.boundingSphere.clone();return this._visibilityChanged=!0,J}deleteGeometry(J){let Q=this._geometryInfo;if(J>=Q.length||Q[J].active===!1)return this;let Z=this._instanceInfo;for(let $=0,W=Z.length;$<W;$++)if(Z[$].active&&Z[$].geometryIndex===J)this.deleteInstance($);return Q[J].active=!1,this._availableGeometryIds.push(J),this._visibilityChanged=!0,this}deleteInstance(J){return this.validateInstanceId(J),this._instanceInfo[J].active=!1,this._availableInstanceIds.push(J),this._visibilityChanged=!0,this}optimize(){let J=0,Q=0,Z=this._geometryInfo,$=Z.map((H,K)=>K).sort((H,K)=>{return Z[H].vertexStart-Z[K].vertexStart}),W=this.geometry;for(let H=0,K=Z.length;H<K;H++){let Y=$[H],X=Z[Y];if(X.active===!1)continue;if(W.index!==null){if(X.indexStart!==Q){let{indexStart:U,vertexStart:G,reservedIndexCount:E}=X,N=W.index,q=N.array,R=J-G;for(let F=U;F<U+E;F++)q[F]=q[F]+R;N.array.copyWithin(Q,U,U+E),N.addUpdateRange(Q,E),X.indexStart=Q}Q+=X.reservedIndexCount}if(X.vertexStart!==J){let{vertexStart:U,reservedVertexCount:G}=X,E=W.attributes;for(let N in E){let q=E[N],{array:R,itemSize:F}=q;R.copyWithin(J*F,U*F,(U+G)*F),q.addUpdateRange(J*F,G*F)}X.vertexStart=J}J+=X.reservedVertexCount,X.start=W.index?X.indexStart:X.vertexStart,this._nextIndexStart=W.index?X.indexStart+X.reservedIndexCount:0,this._nextVertexStart=X.vertexStart+X.reservedVertexCount}return this}getBoundingBoxAt(J,Q){if(J>=this._geometryCount)return null;let Z=this.geometry,$=this._geometryInfo[J];if($.boundingBox===null){let W=new w0,H=Z.index,K=Z.attributes.position;for(let Y=$.start,X=$.start+$.count;Y<X;Y++){let U=Y;if(H)U=H.getX(U);W.expandByPoint(d7.fromBufferAttribute(K,U))}$.boundingBox=W}return Q.copy($.boundingBox),Q}getBoundingSphereAt(J,Q){if(J>=this._geometryCount)return null;let Z=this.geometry,$=this._geometryInfo[J];if($.boundingSphere===null){let W=new z0;this.getBoundingBoxAt(J,zQ),zQ.getCenter(W.center);let H=Z.index,K=Z.attributes.position,Y=0;for(let X=$.start,U=$.start+$.count;X<U;X++){let G=X;if(H)G=H.getX(G);d7.fromBufferAttribute(K,G),Y=Math.max(Y,W.center.distanceToSquared(d7))}W.radius=Math.sqrt(Y),$.boundingSphere=W}return Q.copy($.boundingSphere),Q}setMatrixAt(J,Q){this.validateInstanceId(J);let Z=this._matricesTexture,$=this._matricesTexture.image.data;return Q.toArray($,J*16),Z.needsUpdate=!0,this}getMatrixAt(J,Q){return this.validateInstanceId(J),Q.fromArray(this._matricesTexture.image.data,J*16)}setColorAt(J,Q){if(this.validateInstanceId(J),this._colorsTexture===null)this._initColorsTexture();return Q.toArray(this._colorsTexture.image.data,J*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(J,Q){return this.validateInstanceId(J),Q.fromArray(this._colorsTexture.image.data,J*4)}setVisibleAt(J,Q){if(this.validateInstanceId(J),this._instanceInfo[J].visible===Q)return this;return this._instanceInfo[J].visible=Q,this._visibilityChanged=!0,this}getVisibleAt(J){return this.validateInstanceId(J),this._instanceInfo[J].visible}setGeometryIdAt(J,Q){return this.validateInstanceId(J),this.validateGeometryId(Q),this._instanceInfo[J].geometryIndex=Q,this}getGeometryIdAt(J){return this.validateInstanceId(J),this._instanceInfo[J].geometryIndex}getGeometryRangeAt(J,Q={}){this.validateGeometryId(J);let Z=this._geometryInfo[J];return Q.vertexStart=Z.vertexStart,Q.vertexCount=Z.vertexCount,Q.reservedVertexCount=Z.reservedVertexCount,Q.indexStart=Z.indexStart,Q.indexCount=Z.indexCount,Q.reservedIndexCount=Z.reservedIndexCount,Q.start=Z.start,Q.count=Z.count,Q}setInstanceCount(J){let Q=this._availableInstanceIds,Z=this._instanceInfo;Q.sort(WW);while(Q[Q.length-1]===Z.length)Z.pop(),Q.pop();if(J<Z.length)throw new Error(`BatchedMesh: Instance ids outside the range ${J} are being used. Cannot shrink instance count.`);let $=new Int32Array(J),W=new Int32Array(J);K9(this._multiDrawCounts,$),K9(this._multiDrawStarts,W),this._multiDrawCounts=$,this._multiDrawStarts=W,this._maxInstanceCount=J;let H=this._indirectTexture,K=this._matricesTexture,Y=this._colorsTexture;if(H.dispose(),this._initIndirectTexture(),K9(H.image.data,this._indirectTexture.image.data),K.dispose(),this._initMatricesTexture(),K9(K.image.data,this._matricesTexture.image.data),Y)Y.dispose(),this._initColorsTexture(),K9(Y.image.data,this._colorsTexture.image.data)}setGeometrySize(J,Q){let Z=[...this._geometryInfo].filter((K)=>K.active);if(Math.max(...Z.map((K)=>K.vertexStart+K.reservedVertexCount))>J)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${Q}. Cannot shrink further.`);if(this.geometry.index){if(Math.max(...Z.map((Y)=>Y.indexStart+Y.reservedIndexCount))>Q)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${Q}. Cannot shrink further.`)}let W=this.geometry;if(W.dispose(),this._maxVertexCount=J,this._maxIndexCount=Q,this._geometryInitialized)this._geometryInitialized=!1,this.geometry=new dJ,this._initializeGeometry(W);let H=this.geometry;if(W.index)K9(W.index.array,H.index.array);for(let K in W.attributes)K9(W.attributes[K].array,H.attributes[K].array)}raycast(J,Q){let Z=this._instanceInfo,$=this._geometryInfo,W=this.matrixWorld,H=this.geometry;if(S0.material=this.material,S0.geometry.index=H.index,S0.geometry.attributes=H.attributes,S0.geometry.boundingBox===null)S0.geometry.boundingBox=new w0;if(S0.geometry.boundingSphere===null)S0.geometry.boundingSphere=new z0;for(let K=0,Y=Z.length;K<Y;K++){if(!Z[K].visible||!Z[K].active)continue;let X=Z[K].geometryIndex,U=$[X];S0.geometry.setDrawRange(U.start,U.count),this.getMatrixAt(K,S0.matrixWorld).premultiply(W),this.getBoundingBoxAt(X,S0.geometry.boundingBox),this.getBoundingSphereAt(X,S0.geometry.boundingSphere),S0.raycast(J,IQ);for(let G=0,E=IQ.length;G<E;G++){let N=IQ[G];N.object=this,N.batchId=K,Q.push(N)}IQ.length=0}S0.material=null,S0.geometry.index=null,S0.geometry.attributes={},S0.geometry.setDrawRange(0,1/0)}copy(J){if(super.copy(J),this.geometry=J.geometry.clone(),this.perObjectFrustumCulled=J.perObjectFrustumCulled,this.sortObjects=J.sortObjects,this.boundingBox=J.boundingBox!==null?J.boundingBox.clone():null,this.boundingSphere=J.boundingSphere!==null?J.boundingSphere.clone():null,this._geometryInfo=J._geometryInfo.map((Q)=>({...Q,boundingBox:Q.boundingBox!==null?Q.boundingBox.clone():null,boundingSphere:Q.boundingSphere!==null?Q.boundingSphere.clone():null})),this._instanceInfo=J._instanceInfo.map((Q)=>({...Q})),this._maxInstanceCount=J._maxInstanceCount,this._maxVertexCount=J._maxVertexCount,this._maxIndexCount=J._maxIndexCount,this._geometryInitialized=J._geometryInitialized,this._geometryCount=J._geometryCount,this._multiDrawCounts=J._multiDrawCounts.slice(),this._multiDrawStarts=J._multiDrawStarts.slice(),this._matricesTexture=J._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null)this._colorsTexture=J._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice();return this}dispose(){if(this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null)this._colorsTexture.dispose(),this._colorsTexture=null;return this}onBeforeRender(J,Q,Z,$,W){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let H=$.getIndex(),K=H===null?1:H.array.BYTES_PER_ELEMENT,Y=this._instanceInfo,X=this._multiDrawStarts,U=this._multiDrawCounts,G=this._geometryInfo,E=this.perObjectFrustumCulled,N=this._indirectTexture,q=N.image.data;if(E)p0.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse).multiply(this.matrixWorld),HW.setFromProjectionMatrix(p0,J.coordinateSystem);let R=0;if(this.sortObjects){p0.copy(this.matrixWorld).invert(),d7.setFromMatrixPosition(Z.matrixWorld).applyMatrix4(p0),AY.set(0,0,-1).transformDirection(Z.matrixWorld).transformDirection(p0);for(let D=0,M=Y.length;D<M;D++)if(Y[D].visible&&Y[D].active){let k=Y[D].geometryIndex;this.getMatrixAt(D,p0),this.getBoundingSphereAt(k,H9).applyMatrix4(p0);let I=!1;if(E)I=!HW.intersectsSphere(H9);if(!I){let P=G[k],_=DE.subVectors(H9.center,d7).dot(AY);KW.push(P.start,P.count,_,D)}}let F=KW.list,O=this.customSort;if(O===null)F.sort(W.transparent?NE:EE);else O.call(this,F,Z);for(let D=0,M=F.length;D<M;D++){let k=F[D];X[R]=k.start*K,U[R]=k.count,q[R]=k.index,R++}KW.reset()}else for(let F=0,O=Y.length;F<O;F++)if(Y[F].visible&&Y[F].active){let D=Y[F].geometryIndex,M=!1;if(E)this.getMatrixAt(F,p0),this.getBoundingSphereAt(D,H9).applyMatrix4(p0),M=!HW.intersectsSphere(H9);if(!M){let k=G[D];X[R]=k.start*K,U[R]=k.count,q[R]=F,R++}}N.needsUpdate=!0,this._multiDrawCount=R,this._visibilityChanged=!1}onBeforeShadow(J,Q,Z,$,W,H){this.onBeforeRender(J,null,$,W,H)}}class A0 extends I0{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qJ(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var lQ=/*@__PURE__*/new A,dQ=/*@__PURE__*/new A,PY=/*@__PURE__*/new jJ,u7=/*@__PURE__*/new r8,_Q=/*@__PURE__*/new z0,YW=/*@__PURE__*/new A,TY=/*@__PURE__*/new A;class F8 extends J0{constructor(J=new dJ,Q=new A0){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,Z=[0];for(let $=1,W=Q.count;$<W;$++)lQ.fromBufferAttribute(Q,$-1),dQ.fromBufferAttribute(Q,$),Z[$]=Z[$-1],Z[$]+=lQ.distanceTo(dQ);J.setAttribute("lineDistance",new BJ(Z,1))}return this}raycast(J,Q){let Z=this.geometry,$=this.matrixWorld,W=J.params.Line.threshold,H=Z.drawRange;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(_Q.copy(Z.boundingSphere),_Q.applyMatrix4($),_Q.radius+=W,J.ray.intersectsSphere(_Q)===!1)return;PY.copy($).invert(),u7.copy(J.ray).applyMatrix4(PY);let K=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=K*K,X=this.isLineSegments?2:1,U=Z.index,E=Z.attributes.position;if(U!==null){let N=Math.max(0,H.start),q=Math.min(U.count,H.start+H.count);for(let R=N,F=q-1;R<F;R+=X){let O=U.getX(R),D=U.getX(R+1),M=CQ(this,J,u7,Y,O,D,R);if(M)Q.push(M)}if(this.isLineLoop){let R=U.getX(q-1),F=U.getX(N),O=CQ(this,J,u7,Y,R,F,q-1);if(O)Q.push(O)}}else{let N=Math.max(0,H.start),q=Math.min(E.count,H.start+H.count);for(let R=N,F=q-1;R<F;R+=X){let O=CQ(this,J,u7,Y,R,R+1,R);if(O)Q.push(O)}if(this.isLineLoop){let R=CQ(this,J,u7,Y,q-1,N,q-1);if(R)Q.push(R)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=$.length;W<H;W++){let K=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[K]=W}}}}}function CQ(J,Q,Z,$,W,H,K){let Y=J.geometry.attributes.position;if(lQ.fromBufferAttribute(Y,W),dQ.fromBufferAttribute(Y,H),Z.distanceSqToSegment(lQ,dQ,YW,TY)>$)return;YW.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(YW);if(U<Q.near||U>Q.far)return;return{distance:U,point:TY.clone().applyMatrix4(J.matrixWorld),index:K,face:null,faceIndex:null,barycoord:null,object:J}}var SY=/*@__PURE__*/new A,jY=/*@__PURE__*/new A;class $8 extends F8{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,Z=[];for(let $=0,W=Q.count;$<W;$+=2)SY.fromBufferAttribute(Q,$),jY.fromBufferAttribute(Q,$+1),Z[$]=$===0?0:Z[$-1],Z[$+1]=Z[$]+SY.distanceTo(jY);J.setAttribute("lineDistance",new BJ(Z,1))}return this}}class pZ extends F8{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class z6 extends I0{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qJ(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var yY=/*@__PURE__*/new jJ,RW=/*@__PURE__*/new r8,wQ=/*@__PURE__*/new z0,AQ=/*@__PURE__*/new A;class mZ extends J0{constructor(J=new dJ,Q=new z6){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let Z=this.geometry,$=this.matrixWorld,W=J.params.Points.threshold,H=Z.drawRange;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(wQ.copy(Z.boundingSphere),wQ.applyMatrix4($),wQ.radius+=W,J.ray.intersectsSphere(wQ)===!1)return;yY.copy($).invert(),RW.copy(J.ray).applyMatrix4(yY);let K=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=K*K,X=Z.index,G=Z.attributes.position;if(X!==null){let E=Math.max(0,H.start),N=Math.min(X.count,H.start+H.count);for(let q=E,R=N;q<R;q++){let F=X.getX(q);AQ.fromBufferAttribute(G,F),vY(AQ,F,Y,$,J,Q,this)}}else{let E=Math.max(0,H.start),N=Math.min(G.count,H.start+H.count);for(let q=E,R=N;q<R;q++)AQ.fromBufferAttribute(G,q),vY(AQ,q,Y,$,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=$.length;W<H;W++){let K=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[K]=W}}}}}function vY(J,Q,Z,$,W,H,K){let Y=RW.distanceSqToPoint(J);if(Y<Z){let X=new A;RW.closestPointToPoint(J,X),X.applyMatrix4($);let U=W.ray.origin.distanceTo(X);if(U<W.near||U>W.far)return;H.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:K})}}class lZ extends E0{constructor(J,Q,Z,$,W,H,K,Y,X){super(J,Q,Z,$,W,H,K,Y,X);this.isVideoTexture=!0,this.minFilter=H!==void 0?H:1006,this.magFilter=W!==void 0?W:1006,this.generateMipmaps=!1;let U=this;function G(){U.needsUpdate=!0,J.requestVideoFrameCallback(G)}if("requestVideoFrameCallback"in J)J.requestVideoFrameCallback(G)}clone(){return new this.constructor(this.image).copy(this)}update(){let J=this.image;if("requestVideoFrameCallback"in J===!1&&J.readyState>=J.HAVE_CURRENT_DATA)this.needsUpdate=!0}}class pH extends lZ{constructor(J,Q,Z,$,W,H,K,Y){super({},J,Q,Z,$,W,H,K,Y);this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(J){this.image=J,this.needsUpdate=!0}}class mH extends E0{constructor(J,Q){super({width:J,height:Q});this.isFramebufferTexture=!0,this.magFilter=1003,this.minFilter=1003,this.generateMipmaps=!1,this.needsUpdate=!0}}class B7 extends E0{constructor(J,Q,Z,$,W,H,K,Y,X,U,G,E){super(null,H,K,Y,X,U,$,W,G,E);this.isCompressedTexture=!0,this.image={width:Q,height:Z},this.mipmaps=J,this.flipY=!1,this.generateMipmaps=!1}}class lH extends B7{constructor(J,Q,Z,$,W,H){super(J,Q,Z,W,H);this.isCompressedArrayTexture=!0,this.image.depth=$,this.wrapR=1001,this.layerUpdates=/*@__PURE__*/new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class dH extends B7{constructor(J,Q,Z){super(void 0,J[0].width,J[0].height,Q,Z,301);this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=J}}class uH extends E0{constructor(J,Q,Z,$,W,H,K,Y,X){super(J,Q,Z,$,W,H,K,Y,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class I6 extends E0{constructor(J,Q,Z,$,W,H,K,Y,X,U=1026){if(U!==1026&&U!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(Z===void 0&&U===1026)Z=1014;if(Z===void 0&&U===1027)Z=1020;super(null,$,W,H,K,Y,U,Z,X);this.isDepthTexture=!0,this.image={width:J,height:Q},this.magFilter=K!==void 0?K:1003,this.minFilter=Y!==void 0?Y:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class o0{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return null}getPointAt(J,Q){let Z=this.getUtoTmapping(J);return this.getPoint(Z,Q)}getPoints(J=5){let Q=[];for(let Z=0;Z<=J;Z++)Q.push(this.getPoint(Z/J));return Q}getSpacedPoints(J=5){let Q=[];for(let Z=0;Z<=J;Z++)Q.push(this.getPointAt(Z/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],Z,$=this.getPoint(0),W=0;Q.push(0);for(let H=1;H<=J;H++)Z=this.getPoint(H/J),W+=Z.distanceTo($),Q.push(W),$=Z;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q){let Z=this.getLengths(),$=0,W=Z.length,H;if(Q)H=Q;else H=J*Z[W-1];let K=0,Y=W-1,X;while(K<=Y)if($=Math.floor(K+(Y-K)/2),X=Z[$]-H,X<0)K=$+1;else if(X>0)Y=$-1;else{Y=$;break}if($=Y,Z[$]===H)return $/(W-1);let U=Z[$],E=Z[$+1]-U,N=(H-U)/E;return($+N)/(W-1)}getTangent(J,Q){let $=J-0.0001,W=J+0.0001;if($<0)$=0;if(W>1)W=1;let H=this.getPoint($),K=this.getPoint(W),Y=Q||(H.isVector2?new i:new A);return Y.copy(K).sub(H).normalize(),Y}getTangentAt(J,Q){let Z=this.getUtoTmapping(J);return this.getTangent(Z,Q)}computeFrenetFrames(J,Q){let Z=new A,$=[],W=[],H=[],K=new A,Y=new jJ;for(let N=0;N<=J;N++){let q=N/J;$[N]=this.getTangentAt(q,new A)}W[0]=new A,H[0]=new A;let X=Number.MAX_VALUE,U=Math.abs($[0].x),G=Math.abs($[0].y),E=Math.abs($[0].z);if(U<=X)X=U,Z.set(1,0,0);if(G<=X)X=G,Z.set(0,1,0);if(E<=X)Z.set(0,0,1);K.crossVectors($[0],Z).normalize(),W[0].crossVectors($[0],K),H[0].crossVectors($[0],W[0]);for(let N=1;N<=J;N++){if(W[N]=W[N-1].clone(),H[N]=H[N-1].clone(),K.crossVectors($[N-1],$[N]),K.length()>Number.EPSILON){K.normalize();let q=Math.acos(gJ($[N-1].dot($[N]),-1,1));W[N].applyMatrix4(Y.makeRotationAxis(K,q))}H[N].crossVectors($[N],W[N])}if(Q===!0){let N=Math.acos(gJ(W[0].dot(W[J]),-1,1));if(N/=J,$[0].dot(K.crossVectors(W[0],W[J]))>0)N=-N;for(let q=1;q<=J;q++)W[q].applyMatrix4(Y.makeRotationAxis($[q],N*q)),H[q].crossVectors($[q],W[q])}return{tangents:$,normals:W,binormals:H}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class z7 extends o0{constructor(J=0,Q=0,Z=1,$=1,W=0,H=Math.PI*2,K=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=Z,this.yRadius=$,this.aStartAngle=W,this.aEndAngle=H,this.aClockwise=K,this.aRotation=Y}getPoint(J,Q=new i){let Z=Q,$=Math.PI*2,W=this.aEndAngle-this.aStartAngle,H=Math.abs(W)<Number.EPSILON;while(W<0)W+=$;while(W>$)W-=$;if(W<Number.EPSILON)if(H)W=0;else W=$;if(this.aClockwise===!0&&!H)if(W===$)W=-$;else W=W-$;let K=this.aStartAngle+J*W,Y=this.aX+this.xRadius*Math.cos(K),X=this.aY+this.yRadius*Math.sin(K);if(this.aRotation!==0){let U=Math.cos(this.aRotation),G=Math.sin(this.aRotation),E=Y-this.aX,N=X-this.aY;Y=E*U-N*G+this.aX,X=E*G+N*U+this.aY}return Z.set(Y,X)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class dZ extends z7{constructor(J,Q,Z,$,W,H){super(J,Q,Z,Z,$,W,H);this.isArcCurve=!0,this.type="ArcCurve"}}function cH(){let J=0,Q=0,Z=0,$=0;function W(H,K,Y,X){J=H,Q=Y,Z=-3*H+3*K-2*Y-X,$=2*H-2*K+Y+X}return{initCatmullRom:function(H,K,Y,X,U){W(K,Y,U*(Y-H),U*(X-K))},initNonuniformCatmullRom:function(H,K,Y,X,U,G,E){let N=(K-H)/U-(Y-H)/(U+G)+(Y-K)/G,q=(Y-K)/G-(X-K)/(G+E)+(X-Y)/E;N*=G,q*=G,W(K,Y,N,q)},calc:function(H){let K=H*H,Y=K*H;return J+Q*H+Z*K+$*Y}}}var PQ=/*@__PURE__*/new A,XW=/*@__PURE__*/new cH,UW=/*@__PURE__*/new cH,GW=/*@__PURE__*/new cH;class uZ extends o0{constructor(J=[],Q=!1,Z="centripetal",$=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=Z,this.tension=$}getPoint(J,Q=new A){let Z=Q,$=this.points,W=$.length,H=(W-(this.closed?0:1))*J,K=Math.floor(H),Y=H-K;if(this.closed)K+=K>0?0:(Math.floor(Math.abs(K)/W)+1)*W;else if(Y===0&&K===W-1)K=W-2,Y=1;let X,U;if(this.closed||K>0)X=$[(K-1)%W];else PQ.subVectors($[0],$[1]).add($[0]),X=PQ;let G=$[K%W],E=$[(K+1)%W];if(this.closed||K+2<W)U=$[(K+2)%W];else PQ.subVectors($[W-1],$[W-2]).add($[W-1]),U=PQ;if(this.curveType==="centripetal"||this.curveType==="chordal"){let N=this.curveType==="chordal"?0.5:0.25,q=Math.pow(X.distanceToSquared(G),N),R=Math.pow(G.distanceToSquared(E),N),F=Math.pow(E.distanceToSquared(U),N);if(R<0.0001)R=1;if(q<0.0001)q=R;if(F<0.0001)F=R;XW.initNonuniformCatmullRom(X.x,G.x,E.x,U.x,q,R,F),UW.initNonuniformCatmullRom(X.y,G.y,E.y,U.y,q,R,F),GW.initNonuniformCatmullRom(X.z,G.z,E.z,U.z,q,R,F)}else if(this.curveType==="catmullrom")XW.initCatmullRom(X.x,G.x,E.x,U.x,this.tension),UW.initCatmullRom(X.y,G.y,E.y,U.y,this.tension),GW.initCatmullRom(X.z,G.z,E.z,U.z,this.tension);return Z.set(XW.calc(Y),UW.calc(Y),GW.calc(Y)),Z}copy(J){super.copy(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let $=J.points[Q];this.points.push($.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,Z=this.points.length;Q<Z;Q++){let $=this.points[Q];J.points.push($.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let $=J.points[Q];this.points.push(new A().fromArray($))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function fY(J,Q,Z,$,W){let H=($-Q)*0.5,K=(W-Z)*0.5,Y=J*J,X=J*Y;return(2*Z-2*$+H+K)*X+(-3*Z+3*$-2*H-K)*Y+H*J+Z}function RE(J,Q){let Z=1-J;return Z*Z*Q}function FE(J,Q){return 2*(1-J)*J*Q}function kE(J,Q){return J*J*Q}function i7(J,Q,Z,$){return RE(J,Q)+FE(J,Z)+kE(J,$)}function ME(J,Q){let Z=1-J;return Z*Z*Z*Q}function VE(J,Q){let Z=1-J;return 3*Z*Z*J*Q}function LE(J,Q){return 3*(1-J)*J*J*Q}function BE(J,Q){return J*J*J*Q}function o7(J,Q,Z,$,W){return ME(J,Q)+VE(J,Z)+LE(J,$)+BE(J,W)}class _6 extends o0{constructor(J=new i,Q=new i,Z=new i,$=new i){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=Z,this.v3=$}getPoint(J,Q=new i){let Z=Q,$=this.v0,W=this.v1,H=this.v2,K=this.v3;return Z.set(o7(J,$.x,W.x,H.x,K.x),o7(J,$.y,W.y,H.y,K.y)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class cZ extends o0{constructor(J=new A,Q=new A,Z=new A,$=new A){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=Z,this.v3=$}getPoint(J,Q=new A){let Z=Q,$=this.v0,W=this.v1,H=this.v2,K=this.v3;return Z.set(o7(J,$.x,W.x,H.x,K.x),o7(J,$.y,W.y,H.y,K.y),o7(J,$.z,W.z,H.z,K.z)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class C6 extends o0{constructor(J=new i,Q=new i){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new i){let Z=Q;if(J===1)Z.copy(this.v2);else Z.copy(this.v2).sub(this.v1),Z.multiplyScalar(J).add(this.v1);return Z}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new i){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class nZ extends o0{constructor(J=new A,Q=new A){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new A){let Z=Q;if(J===1)Z.copy(this.v2);else Z.copy(this.v2).sub(this.v1),Z.multiplyScalar(J).add(this.v1);return Z}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new A){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class w6 extends o0{constructor(J=new i,Q=new i,Z=new i){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=Z}getPoint(J,Q=new i){let Z=Q,$=this.v0,W=this.v1,H=this.v2;return Z.set(i7(J,$.x,W.x,H.x),i7(J,$.y,W.y,H.y)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class A6 extends o0{constructor(J=new A,Q=new A,Z=new A){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=Z}getPoint(J,Q=new A){let Z=Q,$=this.v0,W=this.v1,H=this.v2;return Z.set(i7(J,$.x,W.x,H.x),i7(J,$.y,W.y,H.y),i7(J,$.z,W.z,H.z)),Z}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class P6 extends o0{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new i){let Z=Q,$=this.points,W=($.length-1)*J,H=Math.floor(W),K=W-H,Y=$[H===0?H:H-1],X=$[H],U=$[H>$.length-2?$.length-1:H+1],G=$[H>$.length-3?$.length-1:H+2];return Z.set(fY(K,Y.x,X.x,U.x,G.x),fY(K,Y.y,X.y,U.y,G.y)),Z}copy(J){super.copy(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let $=J.points[Q];this.points.push($.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,Z=this.points.length;Q<Z;Q++){let $=this.points[Q];J.points.push($.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,Z=J.points.length;Q<Z;Q++){let $=J.points[Q];this.points.push(new i().fromArray($))}return this}}var uQ=/*@__PURE__*/Object.freeze({__proto__:null,ArcCurve:dZ,CatmullRomCurve3:uZ,CubicBezierCurve:_6,CubicBezierCurve3:cZ,EllipseCurve:z7,LineCurve:C6,LineCurve3:nZ,QuadraticBezierCurve:w6,QuadraticBezierCurve3:A6,SplineCurve:P6});class sZ extends o0{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let Z=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uQ[Z](Q,J))}return this}getPoint(J,Q){let Z=J*this.getLength(),$=this.getCurveLengths(),W=0;while(W<$.length){if($[W]>=Z){let H=$[W]-Z,K=this.curves[W],Y=K.getLength(),X=Y===0?0:1-H/Y;return K.getPointAt(X,Q)}W++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let Z=0,$=this.curves.length;Z<$;Z++)Q+=this.curves[Z].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let Z=0;Z<=J;Z++)Q.push(this.getPoint(Z/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],Z;for(let $=0,W=this.curves;$<W.length;$++){let H=W[$],K=H.isEllipseCurve?J*2:H.isLineCurve||H.isLineCurve3?1:H.isSplineCurve?J*H.points.length:J,Y=H.getPoints(K);for(let X=0;X<Y.length;X++){let U=Y[X];if(Z&&Z.equals(U))continue;Q.push(U),Z=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,Z=J.curves.length;Q<Z;Q++){let $=J.curves[Q];this.curves.push($.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,Z=this.curves.length;Q<Z;Q++){let $=this.curves[Q];J.curves.push($.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,Z=J.curves.length;Q<Z;Q++){let $=J.curves[Q];this.curves.push(new uQ[$.type]().fromJSON($))}return this}}class O9 extends sZ{constructor(J){super();if(this.type="Path",this.currentPoint=new i,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,Z=J.length;Q<Z;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let Z=new C6(this.currentPoint.clone(),new i(J,Q));return this.curves.push(Z),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,Z,$){let W=new w6(this.currentPoint.clone(),new i(J,Q),new i(Z,$));return this.curves.push(W),this.currentPoint.set(Z,$),this}bezierCurveTo(J,Q,Z,$,W,H){let K=new _6(this.currentPoint.clone(),new i(J,Q),new i(Z,$),new i(W,H));return this.curves.push(K),this.currentPoint.set(W,H),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),Z=new P6(Q);return this.curves.push(Z),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,Z,$,W,H){let K=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+K,Q+Y,Z,$,W,H),this}absarc(J,Q,Z,$,W,H){return this.absellipse(J,Q,Z,Z,$,W,H),this}ellipse(J,Q,Z,$,W,H,K,Y){let X=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+X,Q+U,Z,$,W,H,K,Y),this}absellipse(J,Q,Z,$,W,H,K,Y){let X=new z7(J,Q,Z,$,W,H,K,Y);if(this.curves.length>0){let G=X.getPoint(0);if(!G.equals(this.currentPoint))this.lineTo(G.x,G.y)}this.curves.push(X);let U=X.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class I7 extends dJ{constructor(J=[new i(0,-0.5),new i(0.5,0),new i(0,0.5)],Q=12,Z=0,$=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:Z,phiLength:$},Q=Math.floor(Q),$=gJ($,0,Math.PI*2);let W=[],H=[],K=[],Y=[],X=[],U=1/Q,G=new A,E=new i,N=new A,q=new A,R=new A,F=0,O=0;for(let D=0;D<=J.length-1;D++)switch(D){case 0:F=J[D+1].x-J[D].x,O=J[D+1].y-J[D].y,N.x=O*1,N.y=-F,N.z=O*0,R.copy(N),N.normalize(),Y.push(N.x,N.y,N.z);break;case J.length-1:Y.push(R.x,R.y,R.z);break;default:F=J[D+1].x-J[D].x,O=J[D+1].y-J[D].y,N.x=O*1,N.y=-F,N.z=O*0,q.copy(N),N.x+=R.x,N.y+=R.y,N.z+=R.z,N.normalize(),Y.push(N.x,N.y,N.z),R.copy(q)}for(let D=0;D<=Q;D++){let M=Z+D*U*$,k=Math.sin(M),I=Math.cos(M);for(let P=0;P<=J.length-1;P++){G.x=J[P].x*k,G.y=J[P].y,G.z=J[P].x*I,H.push(G.x,G.y,G.z),E.x=D/Q,E.y=P/(J.length-1),K.push(E.x,E.y);let _=Y[3*P+0]*k,w=Y[3*P+1],y=Y[3*P+0]*I;X.push(_,w,y)}}for(let D=0;D<Q;D++)for(let M=0;M<J.length-1;M++){let k=M+D*J.length,I=k,P=k+J.length,_=k+J.length+1,w=k+1;W.push(I,P,w),W.push(_,w,P)}this.setIndex(W),this.setAttribute("position",new BJ(H,3)),this.setAttribute("uv",new BJ(K,2)),this.setAttribute("normal",new BJ(X,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new I7(J.points,J.segments,J.phiStart,J.phiLength)}}class T6 extends I7{constructor(J=1,Q=1,Z=4,$=8){let W=new O9;W.absarc(0,-Q/2,J,Math.PI*1.5,0),W.absarc(0,Q/2,J,0,Math.PI*0.5);super(W.getPoints(Z),$);this.type="CapsuleGeometry",this.parameters={radius:J,length:Q,capSegments:Z,radialSegments:$}}static fromJSON(J){return new T6(J.radius,J.length,J.capSegments,J.radialSegments)}}class S6 extends dJ{constructor(J=1,Q=32,Z=0,$=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:Z,thetaLength:$},Q=Math.max(3,Q);let W=[],H=[],K=[],Y=[],X=new A,U=new i;H.push(0,0,0),K.push(0,0,1),Y.push(0.5,0.5);for(let G=0,E=3;G<=Q;G++,E+=3){let N=Z+G/Q*$;X.x=J*Math.cos(N),X.y=J*Math.sin(N),H.push(X.x,X.y,X.z),K.push(0,0,1),U.x=(H[E]/J+1)/2,U.y=(H[E+1]/J+1)/2,Y.push(U.x,U.y)}for(let G=1;G<=Q;G++)W.push(G,G+1,0);this.setIndex(W),this.setAttribute("position",new BJ(H,3)),this.setAttribute("normal",new BJ(K,3)),this.setAttribute("uv",new BJ(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new S6(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class y9 extends dJ{constructor(J=1,Q=1,Z=1,$=32,W=1,H=!1,K=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:Z,radialSegments:$,heightSegments:W,openEnded:H,thetaStart:K,thetaLength:Y};let X=this;$=Math.floor($),W=Math.floor(W);let U=[],G=[],E=[],N=[],q=0,R=[],F=Z/2,O=0;if(D(),H===!1){if(J>0)M(!0);if(Q>0)M(!1)}this.setIndex(U),this.setAttribute("position",new BJ(G,3)),this.setAttribute("normal",new BJ(E,3)),this.setAttribute("uv",new BJ(N,2));function D(){let k=new A,I=new A,P=0,_=(Q-J)/Z;for(let w=0;w<=W;w++){let y=[],L=w/W,z=L*(Q-J)+J;for(let S=0;S<=$;S++){let g=S/$,p=g*Y+K,l=Math.sin(p),s=Math.cos(p);I.x=z*l,I.y=-L*Z+F,I.z=z*s,G.push(I.x,I.y,I.z),k.set(l,_,s).normalize(),E.push(k.x,k.y,k.z),N.push(g,1-L),y.push(q++)}R.push(y)}for(let w=0;w<$;w++)for(let y=0;y<W;y++){let L=R[y][w],z=R[y+1][w],S=R[y+1][w+1],g=R[y][w+1];if(J>0||y!==0)U.push(L,z,g),P+=3;if(Q>0||y!==W-1)U.push(z,S,g),P+=3}X.addGroup(O,P,0),O+=P}function M(k){let I=q,P=new i,_=new A,w=0,y=k===!0?J:Q,L=k===!0?1:-1;for(let S=1;S<=$;S++)G.push(0,F*L,0),E.push(0,L,0),N.push(0.5,0.5),q++;let z=q;for(let S=0;S<=$;S++){let p=S/$*Y+K,l=Math.cos(p),s=Math.sin(p);_.x=y*s,_.y=F*L,_.z=y*l,G.push(_.x,_.y,_.z),E.push(0,L,0),P.x=l*0.5+0.5,P.y=s*0.5*L+0.5,N.push(P.x,P.y),q++}for(let S=0;S<$;S++){let g=I+S,p=z+S;if(k===!0)U.push(p,p+1,g);else U.push(p+1,p,g);w+=3}X.addGroup(O,w,k===!0?1:2),O+=w}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new y9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class j6 extends y9{constructor(J=1,Q=1,Z=32,$=1,W=!1,H=0,K=Math.PI*2){super(0,J,Q,Z,$,W,H,K);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:Z,heightSegments:$,openEnded:W,thetaStart:H,thetaLength:K}}static fromJSON(J){return new j6(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class f8 extends dJ{constructor(J=[],Q=[],Z=1,$=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:Z,detail:$};let W=[],H=[];if(K($),X(Z),U(),this.setAttribute("position",new BJ(W,3)),this.setAttribute("normal",new BJ(W.slice(),3)),this.setAttribute("uv",new BJ(H,2)),$===0)this.computeVertexNormals();else this.normalizeNormals();function K(D){let M=new A,k=new A,I=new A;for(let P=0;P<Q.length;P+=3)N(Q[P+0],M),N(Q[P+1],k),N(Q[P+2],I),Y(M,k,I,D)}function Y(D,M,k,I){let P=I+1,_=[];for(let w=0;w<=P;w++){_[w]=[];let y=D.clone().lerp(k,w/P),L=M.clone().lerp(k,w/P),z=P-w;for(let S=0;S<=z;S++)if(S===0&&w===P)_[w][S]=y;else _[w][S]=y.clone().lerp(L,S/z)}for(let w=0;w<P;w++)for(let y=0;y<2*(P-w)-1;y++){let L=Math.floor(y/2);if(y%2===0)E(_[w][L+1]),E(_[w+1][L]),E(_[w][L]);else E(_[w][L+1]),E(_[w+1][L+1]),E(_[w+1][L])}}function X(D){let M=new A;for(let k=0;k<W.length;k+=3)M.x=W[k+0],M.y=W[k+1],M.z=W[k+2],M.normalize().multiplyScalar(D),W[k+0]=M.x,W[k+1]=M.y,W[k+2]=M.z}function U(){let D=new A;for(let M=0;M<W.length;M+=3){D.x=W[M+0],D.y=W[M+1],D.z=W[M+2];let k=F(D)/2/Math.PI+0.5,I=O(D)/Math.PI+0.5;H.push(k,1-I)}q(),G()}function G(){for(let D=0;D<H.length;D+=6){let M=H[D+0],k=H[D+2],I=H[D+4],P=Math.max(M,k,I),_=Math.min(M,k,I);if(P>0.9&&_<0.1){if(M<0.2)H[D+0]+=1;if(k<0.2)H[D+2]+=1;if(I<0.2)H[D+4]+=1}}}function E(D){W.push(D.x,D.y,D.z)}function N(D,M){let k=D*3;M.x=J[k+0],M.y=J[k+1],M.z=J[k+2]}function q(){let D=new A,M=new A,k=new A,I=new A,P=new i,_=new i,w=new i;for(let y=0,L=0;y<W.length;y+=9,L+=6){D.set(W[y+0],W[y+1],W[y+2]),M.set(W[y+3],W[y+4],W[y+5]),k.set(W[y+6],W[y+7],W[y+8]),P.set(H[L+0],H[L+1]),_.set(H[L+2],H[L+3]),w.set(H[L+4],H[L+5]),I.copy(D).add(M).add(k).divideScalar(3);let z=F(I);R(P,L+0,D,z),R(_,L+2,M,z),R(w,L+4,k,z)}}function R(D,M,k,I){if(I<0&&D.x===1)H[M]=D.x-1;if(k.x===0&&k.z===0)H[M]=I/2/Math.PI+0.5}function F(D){return Math.atan2(D.z,-D.x)}function O(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new f8(J.vertices,J.indices,J.radius,J.details)}}class y6 extends f8{constructor(J=1,Q=0){let Z=(1+Math.sqrt(5))/2,$=1/Z,W=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-$,-Z,0,-$,Z,0,$,-Z,0,$,Z,-$,-Z,0,-$,Z,0,$,-Z,0,$,Z,0,-Z,0,-$,Z,0,-$,-Z,0,$,Z,0,$],H=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(W,H,J,Q);this.type="DodecahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new y6(J.radius,J.detail)}}var TQ=/*@__PURE__*/new A,SQ=/*@__PURE__*/new A,EW=/*@__PURE__*/new A,jQ=/*@__PURE__*/new x0;class iZ extends dJ{constructor(J=null,Q=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:J,thresholdAngle:Q},J!==null){let $=Math.pow(10,4),W=Math.cos(q9*Q),H=J.getIndex(),K=J.getAttribute("position"),Y=H?H.count:K.count,X=[0,0,0],U=["a","b","c"],G=new Array(3),E={},N=[];for(let q=0;q<Y;q+=3){if(H)X[0]=H.getX(q),X[1]=H.getX(q+1),X[2]=H.getX(q+2);else X[0]=q,X[1]=q+1,X[2]=q+2;let{a:R,b:F,c:O}=jQ;if(R.fromBufferAttribute(K,X[0]),F.fromBufferAttribute(K,X[1]),O.fromBufferAttribute(K,X[2]),jQ.getNormal(EW),G[0]=`${Math.round(R.x*$)},${Math.round(R.y*$)},${Math.round(R.z*$)}`,G[1]=`${Math.round(F.x*$)},${Math.round(F.y*$)},${Math.round(F.z*$)}`,G[2]=`${Math.round(O.x*$)},${Math.round(O.y*$)},${Math.round(O.z*$)}`,G[0]===G[1]||G[1]===G[2]||G[2]===G[0])continue;for(let D=0;D<3;D++){let M=(D+1)%3,k=G[D],I=G[M],P=jQ[U[D]],_=jQ[U[M]],w=`${k}_${I}`,y=`${I}_${k}`;if(y in E&&E[y]){if(EW.dot(E[y].normal)<=W)N.push(P.x,P.y,P.z),N.push(_.x,_.y,_.z);E[y]=null}else if(!(w in E))E[w]={index0:X[D],index1:X[M],normal:EW.clone()}}}for(let q in E)if(E[q]){let{index0:R,index1:F}=E[q];TQ.fromBufferAttribute(K,R),SQ.fromBufferAttribute(K,F),N.push(TQ.x,TQ.y,TQ.z),N.push(SQ.x,SQ.y,SQ.z)}this.setAttribute("position",new BJ(N,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}class S8 extends O9{constructor(J){super(J);this.uuid=s0(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let Z=0,$=this.holes.length;Z<$;Z++)Q[Z]=this.holes[Z].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,Z=J.holes.length;Q<Z;Q++){let $=J.holes[Q];this.holes.push($.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,Z=this.holes.length;Q<Z;Q++){let $=this.holes[Q];J.holes.push($.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,Z=J.holes.length;Q<Z;Q++){let $=J.holes[Q];this.holes.push(new O9().fromJSON($))}return this}}var zE={triangulate:function(J,Q,Z=2){let $=Q&&Q.length,W=$?Q[0]*Z:J.length,H=kU(J,0,W,Z,!0),K=[];if(!H||H.next===H.prev)return K;let Y,X,U,G,E,N,q;if($)H=AE(J,Q,H,Z);if(J.length>80*Z){Y=U=J[0],X=G=J[1];for(let R=Z;R<W;R+=Z){if(E=J[R],N=J[R+1],E<Y)Y=E;if(N<X)X=N;if(E>U)U=E;if(N>G)G=N}q=Math.max(U-Y,G-X),q=q!==0?32767/q:0}return a7(H,K,Z,Y,X,q,0),K}};function kU(J,Q,Z,$,W){let H,K;if(W===gE(J,Q,Z,$)>0)for(H=Q;H<Z;H+=$)K=bY(H,J[H],J[H+1],K);else for(H=Z-$;H>=Q;H-=$)K=bY(H,J[H],J[H+1],K);if(K&&oZ(K,K.next))t7(K),K=K.next;return K}function R9(J,Q){if(!J)return J;if(!Q)Q=J;let Z=J,$;do if($=!1,!Z.steiner&&(oZ(Z,Z.next)||G0(Z.prev,Z,Z.next)===0)){if(t7(Z),Z=Q=Z.prev,Z===Z.next)break;$=!0}else Z=Z.next;while($||Z!==Q);return Q}function a7(J,Q,Z,$,W,H,K){if(!J)return;if(!K&&H)yE(J,$,W,H);let Y=J,X,U;while(J.prev!==J.next){if(X=J.prev,U=J.next,H?_E(J,$,W,H):IE(J)){Q.push(X.i/Z|0),Q.push(J.i/Z|0),Q.push(U.i/Z|0),t7(J),J=U.next,Y=U.next;continue}if(J=U,J===Y){if(!K)a7(R9(J),Q,Z,$,W,H,1);else if(K===1)J=CE(R9(J),Q,Z),a7(J,Q,Z,$,W,H,2);else if(K===2)wE(J,Q,Z,$,W,H);break}}}function IE(J){let Q=J.prev,Z=J,$=J.next;if(G0(Q,Z,$)>=0)return!1;let W=Q.x,H=Z.x,K=$.x,Y=Q.y,X=Z.y,U=$.y,G=W<H?W<K?W:K:H<K?H:K,E=Y<X?Y<U?Y:U:X<U?X:U,N=W>H?W>K?W:K:H>K?H:K,q=Y>X?Y>U?Y:U:X>U?X:U,R=$.next;while(R!==Q){if(R.x>=G&&R.x<=N&&R.y>=E&&R.y<=q&&H7(W,Y,H,X,K,U,R.x,R.y)&&G0(R.prev,R,R.next)>=0)return!1;R=R.next}return!0}function _E(J,Q,Z,$){let W=J.prev,H=J,K=J.next;if(G0(W,H,K)>=0)return!1;let Y=W.x,X=H.x,U=K.x,G=W.y,E=H.y,N=K.y,q=Y<X?Y<U?Y:U:X<U?X:U,R=G<E?G<N?G:N:E<N?E:N,F=Y>X?Y>U?Y:U:X>U?X:U,O=G>E?G>N?G:N:E>N?E:N,D=FW(q,R,Q,Z,$),M=FW(F,O,Q,Z,$),k=J.prevZ,I=J.nextZ;while(k&&k.z>=D&&I&&I.z<=M){if(k.x>=q&&k.x<=F&&k.y>=R&&k.y<=O&&k!==W&&k!==K&&H7(Y,G,X,E,U,N,k.x,k.y)&&G0(k.prev,k,k.next)>=0)return!1;if(k=k.prevZ,I.x>=q&&I.x<=F&&I.y>=R&&I.y<=O&&I!==W&&I!==K&&H7(Y,G,X,E,U,N,I.x,I.y)&&G0(I.prev,I,I.next)>=0)return!1;I=I.nextZ}while(k&&k.z>=D){if(k.x>=q&&k.x<=F&&k.y>=R&&k.y<=O&&k!==W&&k!==K&&H7(Y,G,X,E,U,N,k.x,k.y)&&G0(k.prev,k,k.next)>=0)return!1;k=k.prevZ}while(I&&I.z<=M){if(I.x>=q&&I.x<=F&&I.y>=R&&I.y<=O&&I!==W&&I!==K&&H7(Y,G,X,E,U,N,I.x,I.y)&&G0(I.prev,I,I.next)>=0)return!1;I=I.nextZ}return!0}function CE(J,Q,Z){let $=J;do{let W=$.prev,H=$.next.next;if(!oZ(W,H)&&MU(W,$,$.next,H)&&r7(W,H)&&r7(H,W))Q.push(W.i/Z|0),Q.push($.i/Z|0),Q.push(H.i/Z|0),t7($),t7($.next),$=J=H;$=$.next}while($!==J);return R9($)}function wE(J,Q,Z,$,W,H){let K=J;do{let Y=K.next.next;while(Y!==K.prev){if(K.i!==Y.i&&bE(K,Y)){let X=VU(K,Y);K=R9(K,K.next),X=R9(X,X.next),a7(K,Q,Z,$,W,H,0),a7(X,Q,Z,$,W,H,0);return}Y=Y.next}K=K.next}while(K!==J)}function AE(J,Q,Z,$){let W=[],H,K,Y,X,U;for(H=0,K=Q.length;H<K;H++){if(Y=Q[H]*$,X=H<K-1?Q[H+1]*$:J.length,U=kU(J,Y,X,$,!1),U===U.next)U.steiner=!0;W.push(fE(U))}W.sort(PE);for(H=0;H<W.length;H++)Z=TE(W[H],Z);return Z}function PE(J,Q){return J.x-Q.x}function TE(J,Q){let Z=SE(J,Q);if(!Z)return Q;let $=VU(Z,J);return R9($,$.next),R9(Z,Z.next)}function SE(J,Q){let Z=Q,$=-1/0,W,H=J.x,K=J.y;do{if(K<=Z.y&&K>=Z.next.y&&Z.next.y!==Z.y){let N=Z.x+(K-Z.y)*(Z.next.x-Z.x)/(Z.next.y-Z.y);if(N<=H&&N>$){if($=N,W=Z.x<Z.next.x?Z:Z.next,N===H)return W}}Z=Z.next}while(Z!==Q);if(!W)return null;let Y=W,X=W.x,U=W.y,G=1/0,E;Z=W;do{if(H>=Z.x&&Z.x>=X&&H!==Z.x&&H7(K<U?H:$,K,X,U,K<U?$:H,K,Z.x,Z.y)){if(E=Math.abs(K-Z.y)/(H-Z.x),r7(Z,J)&&(E<G||E===G&&(Z.x>W.x||Z.x===W.x&&jE(W,Z))))W=Z,G=E}Z=Z.next}while(Z!==Y);return W}function jE(J,Q){return G0(J.prev,J,Q.prev)<0&&G0(Q.next,J,J.next)<0}function yE(J,Q,Z,$){let W=J;do{if(W.z===0)W.z=FW(W.x,W.y,Q,Z,$);W.prevZ=W.prev,W.nextZ=W.next,W=W.next}while(W!==J);W.prevZ.nextZ=null,W.prevZ=null,vE(W)}function vE(J){let Q,Z,$,W,H,K,Y,X,U=1;do{Z=J,J=null,H=null,K=0;while(Z){K++,$=Z,Y=0;for(Q=0;Q<U;Q++)if(Y++,$=$.nextZ,!$)break;X=U;while(Y>0||X>0&&$){if(Y!==0&&(X===0||!$||Z.z<=$.z))W=Z,Z=Z.nextZ,Y--;else W=$,$=$.nextZ,X--;if(H)H.nextZ=W;else J=W;W.prevZ=H,H=W}Z=$}H.nextZ=null,U*=2}while(K>1);return J}function FW(J,Q,Z,$,W){return J=(J-Z)*W|0,Q=(Q-$)*W|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function fE(J){let Q=J,Z=J;do{if(Q.x<Z.x||Q.x===Z.x&&Q.y<Z.y)Z=Q;Q=Q.next}while(Q!==J);return Z}function H7(J,Q,Z,$,W,H,K,Y){return(W-K)*(Q-Y)>=(J-K)*(H-Y)&&(J-K)*($-Y)>=(Z-K)*(Q-Y)&&(Z-K)*(H-Y)>=(W-K)*($-Y)}function bE(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!hE(J,Q)&&(r7(J,Q)&&r7(Q,J)&&xE(J,Q)&&(G0(J.prev,J,Q.prev)||G0(J,Q.prev,Q))||oZ(J,Q)&&G0(J.prev,J,J.next)>0&&G0(Q.prev,Q,Q.next)>0)}function G0(J,Q,Z){return(Q.y-J.y)*(Z.x-Q.x)-(Q.x-J.x)*(Z.y-Q.y)}function oZ(J,Q){return J.x===Q.x&&J.y===Q.y}function MU(J,Q,Z,$){let W=vQ(G0(J,Q,Z)),H=vQ(G0(J,Q,$)),K=vQ(G0(Z,$,J)),Y=vQ(G0(Z,$,Q));if(W!==H&&K!==Y)return!0;if(W===0&&yQ(J,Z,Q))return!0;if(H===0&&yQ(J,$,Q))return!0;if(K===0&&yQ(Z,J,$))return!0;if(Y===0&&yQ(Z,Q,$))return!0;return!1}function yQ(J,Q,Z){return Q.x<=Math.max(J.x,Z.x)&&Q.x>=Math.min(J.x,Z.x)&&Q.y<=Math.max(J.y,Z.y)&&Q.y>=Math.min(J.y,Z.y)}function vQ(J){return J>0?1:J<0?-1:0}function hE(J,Q){let Z=J;do{if(Z.i!==J.i&&Z.next.i!==J.i&&Z.i!==Q.i&&Z.next.i!==Q.i&&MU(Z,Z.next,J,Q))return!0;Z=Z.next}while(Z!==J);return!1}function r7(J,Q){return G0(J.prev,J,J.next)<0?G0(J,Q,J.next)>=0&&G0(J,J.prev,Q)>=0:G0(J,Q,J.prev)<0||G0(J,J.next,Q)<0}function xE(J,Q){let Z=J,$=!1,W=(J.x+Q.x)/2,H=(J.y+Q.y)/2;do{if(Z.y>H!==Z.next.y>H&&Z.next.y!==Z.y&&W<(Z.next.x-Z.x)*(H-Z.y)/(Z.next.y-Z.y)+Z.x)$=!$;Z=Z.next}while(Z!==J);return $}function VU(J,Q){let Z=new kW(J.i,J.x,J.y),$=new kW(Q.i,Q.x,Q.y),W=J.next,H=Q.prev;return J.next=Q,Q.prev=J,Z.next=W,W.prev=Z,$.next=Z,Z.prev=$,H.next=$,$.prev=H,$}function bY(J,Q,Z,$){let W=new kW(J,Q,Z);if(!$)W.prev=W,W.next=W;else W.next=$.next,W.prev=$,$.next.prev=W,$.next=W;return W}function t7(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function kW(J,Q,Z){this.i=J,this.x=Q,this.y=Z,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gE(J,Q,Z,$){let W=0;for(let H=Q,K=Z-$;H<Z;H+=$)W+=(J[K]-J[H])*(J[H+1]+J[K+1]),K=H;return W}class X8{static area(J){let Q=J.length,Z=0;for(let $=Q-1,W=0;W<Q;$=W++)Z+=J[$].x*J[W].y-J[W].x*J[$].y;return Z*0.5}static isClockWise(J){return X8.area(J)<0}static triangulateShape(J,Q){let Z=[],$=[],W=[];hY(J),xY(Z,J);let H=J.length;Q.forEach(hY);for(let Y=0;Y<Q.length;Y++)$.push(H),H+=Q[Y].length,xY(Z,Q[Y]);let K=zE.triangulate(Z,$);for(let Y=0;Y<K.length;Y+=3)W.push(K.slice(Y,Y+3));return W}}function hY(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function xY(J,Q){for(let Z=0;Z<Q.length;Z++)J.push(Q[Z].x),J.push(Q[Z].y)}class v6 extends dJ{constructor(J=new S8([new i(0.5,0.5),new i(-0.5,0.5),new i(-0.5,-0.5),new i(0.5,-0.5)]),Q={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:J,options:Q},J=Array.isArray(J)?J:[J];let Z=this,$=[],W=[];for(let K=0,Y=J.length;K<Y;K++){let X=J[K];H(X)}this.setAttribute("position",new BJ($,3)),this.setAttribute("uv",new BJ(W,2)),this.computeVertexNormals();function H(K){let Y=[],X=Q.curveSegments!==void 0?Q.curveSegments:12,U=Q.steps!==void 0?Q.steps:1,G=Q.depth!==void 0?Q.depth:1,E=Q.bevelEnabled!==void 0?Q.bevelEnabled:!0,N=Q.bevelThickness!==void 0?Q.bevelThickness:0.2,q=Q.bevelSize!==void 0?Q.bevelSize:N-0.1,R=Q.bevelOffset!==void 0?Q.bevelOffset:0,F=Q.bevelSegments!==void 0?Q.bevelSegments:3,O=Q.extrudePath,D=Q.UVGenerator!==void 0?Q.UVGenerator:pE,M,k=!1,I,P,_,w;if(O)M=O.getSpacedPoints(U),k=!0,E=!1,I=O.computeFrenetFrames(U,!1),P=new A,_=new A,w=new A;if(!E)F=0,N=0,q=0,R=0;let y=K.extractPoints(X),L=y.shape,z=y.holes;if(!X8.isClockWise(L)){L=L.reverse();for(let JJ=0,t=z.length;JJ<t;JJ++){let C=z[JJ];if(X8.isClockWise(C))z[JJ]=C.reverse()}}let g=X8.triangulateShape(L,z),p=L;for(let JJ=0,t=z.length;JJ<t;JJ++){let C=z[JJ];L=L.concat(C)}function l(JJ,t,C){return JJ.clone().addScaledVector(t,C)}let s=L.length,d=g.length;function ZJ(JJ,t,C){let zJ,WJ,CJ,e=JJ.x-t.x,vJ=JJ.y-t.y,DJ=C.x-JJ.x,_J=C.y-JJ.y,T=e*e+vJ*vJ,V=e*_J-vJ*DJ;if(Math.abs(V)>Number.EPSILON){let b=Math.sqrt(T),o=Math.sqrt(DJ*DJ+_J*_J),r=t.x-vJ/b,u=t.y+e/b,PJ=C.x-_J/o,GJ=C.y+DJ/o,FJ=((PJ-r)*_J-(GJ-u)*DJ)/(e*_J-vJ*DJ);zJ=r+e*FJ-JJ.x,WJ=u+vJ*FJ-JJ.y;let hJ=zJ*zJ+WJ*WJ;if(hJ<=2)return new i(zJ,WJ);else CJ=Math.sqrt(hJ/2)}else{let b=!1;if(e>Number.EPSILON){if(DJ>Number.EPSILON)b=!0}else if(e<-Number.EPSILON){if(DJ<-Number.EPSILON)b=!0}else if(Math.sign(vJ)===Math.sign(_J))b=!0;if(b)zJ=-vJ,WJ=e,CJ=Math.sqrt(T);else zJ=e,WJ=vJ,CJ=Math.sqrt(T/2)}return new i(zJ/CJ,WJ/CJ)}let m=[];for(let JJ=0,t=p.length,C=t-1,zJ=JJ+1;JJ<t;JJ++,C++,zJ++){if(C===t)C=0;if(zJ===t)zJ=0;m[JJ]=ZJ(p[JJ],p[C],p[zJ])}let EJ=[],UJ,SJ=m.concat();for(let JJ=0,t=z.length;JJ<t;JJ++){let C=z[JJ];UJ=[];for(let zJ=0,WJ=C.length,CJ=WJ-1,e=zJ+1;zJ<WJ;zJ++,CJ++,e++){if(CJ===WJ)CJ=0;if(e===WJ)e=0;UJ[zJ]=ZJ(C[zJ],C[CJ],C[e])}EJ.push(UJ),SJ=SJ.concat(UJ)}for(let JJ=0;JJ<F;JJ++){let t=JJ/F,C=N*Math.cos(t*Math.PI/2),zJ=q*Math.sin(t*Math.PI/2)+R;for(let WJ=0,CJ=p.length;WJ<CJ;WJ++){let e=l(p[WJ],m[WJ],zJ);IJ(e.x,e.y,-C)}for(let WJ=0,CJ=z.length;WJ<CJ;WJ++){let e=z[WJ];UJ=EJ[WJ];for(let vJ=0,DJ=e.length;vJ<DJ;vJ++){let _J=l(e[vJ],UJ[vJ],zJ);IJ(_J.x,_J.y,-C)}}}let sJ=q+R;for(let JJ=0;JJ<s;JJ++){let t=E?l(L[JJ],SJ[JJ],sJ):L[JJ];if(!k)IJ(t.x,t.y,0);else _.copy(I.normals[0]).multiplyScalar(t.x),P.copy(I.binormals[0]).multiplyScalar(t.y),w.copy(M[0]).add(_).add(P),IJ(w.x,w.y,w.z)}for(let JJ=1;JJ<=U;JJ++)for(let t=0;t<s;t++){let C=E?l(L[t],SJ[t],sJ):L[t];if(!k)IJ(C.x,C.y,G/U*JJ);else _.copy(I.normals[JJ]).multiplyScalar(C.x),P.copy(I.binormals[JJ]).multiplyScalar(C.y),w.copy(M[JJ]).add(_).add(P),IJ(w.x,w.y,w.z)}for(let JJ=F-1;JJ>=0;JJ--){let t=JJ/F,C=N*Math.cos(t*Math.PI/2),zJ=q*Math.sin(t*Math.PI/2)+R;for(let WJ=0,CJ=p.length;WJ<CJ;WJ++){let e=l(p[WJ],m[WJ],zJ);IJ(e.x,e.y,G+C)}for(let WJ=0,CJ=z.length;WJ<CJ;WJ++){let e=z[WJ];UJ=EJ[WJ];for(let vJ=0,DJ=e.length;vJ<DJ;vJ++){let _J=l(e[vJ],UJ[vJ],zJ);if(!k)IJ(_J.x,_J.y,G+C);else IJ(_J.x,_J.y+M[U-1].y,M[U-1].x+C)}}}c(),KJ();function c(){let JJ=$.length/3;if(E){let t=0,C=s*t;for(let zJ=0;zJ<d;zJ++){let WJ=g[zJ];YJ(WJ[2]+C,WJ[1]+C,WJ[0]+C)}t=U+F*2,C=s*t;for(let zJ=0;zJ<d;zJ++){let WJ=g[zJ];YJ(WJ[0]+C,WJ[1]+C,WJ[2]+C)}}else{for(let t=0;t<d;t++){let C=g[t];YJ(C[2],C[1],C[0])}for(let t=0;t<d;t++){let C=g[t];YJ(C[0]+s*U,C[1]+s*U,C[2]+s*U)}}Z.addGroup(JJ,$.length/3-JJ,0)}function KJ(){let JJ=$.length/3,t=0;wJ(p,t),t+=p.length;for(let C=0,zJ=z.length;C<zJ;C++){let WJ=z[C];wJ(WJ,t),t+=WJ.length}Z.addGroup(JJ,$.length/3-JJ,1)}function wJ(JJ,t){let C=JJ.length;while(--C>=0){let zJ=C,WJ=C-1;if(WJ<0)WJ=JJ.length-1;for(let CJ=0,e=U+F*2;CJ<e;CJ++){let vJ=s*CJ,DJ=s*(CJ+1),_J=t+zJ+vJ,T=t+WJ+vJ,V=t+WJ+DJ,b=t+zJ+DJ;oJ(_J,T,V,b)}}}function IJ(JJ,t,C){Y.push(JJ),Y.push(t),Y.push(C)}function YJ(JJ,t,C){yJ(JJ),yJ(t),yJ(C);let zJ=$.length/3,WJ=D.generateTopUV(Z,$,zJ-3,zJ-2,zJ-1);mJ(WJ[0]),mJ(WJ[1]),mJ(WJ[2])}function oJ(JJ,t,C,zJ){yJ(JJ),yJ(t),yJ(zJ),yJ(t),yJ(C),yJ(zJ);let WJ=$.length/3,CJ=D.generateSideWallUV(Z,$,WJ-6,WJ-3,WJ-2,WJ-1);mJ(CJ[0]),mJ(CJ[1]),mJ(CJ[3]),mJ(CJ[1]),mJ(CJ[2]),mJ(CJ[3])}function yJ(JJ){$.push(Y[JJ*3+0]),$.push(Y[JJ*3+1]),$.push(Y[JJ*3+2])}function mJ(JJ){W.push(JJ.x),W.push(JJ.y)}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes,Z=this.parameters.options;return mE(Q,Z,J)}static fromJSON(J,Q){let Z=[];for(let W=0,H=J.shapes.length;W<H;W++){let K=Q[J.shapes[W]];Z.push(K)}let $=J.options.extrudePath;if($!==void 0)J.options.extrudePath=new uQ[$.type]().fromJSON($);return new v6(Z,J.options)}}var pE={generateTopUV:function(J,Q,Z,$,W){let H=Q[Z*3],K=Q[Z*3+1],Y=Q[$*3],X=Q[$*3+1],U=Q[W*3],G=Q[W*3+1];return[new i(H,K),new i(Y,X),new i(U,G)]},generateSideWallUV:function(J,Q,Z,$,W,H){let K=Q[Z*3],Y=Q[Z*3+1],X=Q[Z*3+2],U=Q[$*3],G=Q[$*3+1],E=Q[$*3+2],N=Q[W*3],q=Q[W*3+1],R=Q[W*3+2],F=Q[H*3],O=Q[H*3+1],D=Q[H*3+2];if(Math.abs(Y-G)<Math.abs(K-U))return[new i(K,1-X),new i(U,1-E),new i(N,1-R),new i(F,1-D)];else return[new i(Y,1-X),new i(G,1-E),new i(q,1-R),new i(O,1-D)]}};function mE(J,Q,Z){if(Z.shapes=[],Array.isArray(J))for(let $=0,W=J.length;$<W;$++){let H=J[$];Z.shapes.push(H.uuid)}else Z.shapes.push(J.uuid);if(Z.options=Object.assign({},Q),Q.extrudePath!==void 0)Z.options.extrudePath=Q.extrudePath.toJSON();return Z}class f6 extends f8{constructor(J=1,Q=0){let Z=(1+Math.sqrt(5))/2,$=[-1,Z,0,1,Z,0,-1,-Z,0,1,-Z,0,0,-1,Z,0,1,Z,0,-1,-Z,0,1,-Z,Z,0,-1,Z,0,1,-Z,0,-1,-Z,0,1],W=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super($,W,J,Q);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new f6(J.radius,J.detail)}}class _7 extends f8{constructor(J=1,Q=0){let Z=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],$=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(Z,$,J,Q);this.type="OctahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new _7(J.radius,J.detail)}}class v9 extends dJ{constructor(J=1,Q=1,Z=1,$=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:Z,heightSegments:$};let W=J/2,H=Q/2,K=Math.floor(Z),Y=Math.floor($),X=K+1,U=Y+1,G=J/K,E=Q/Y,N=[],q=[],R=[],F=[];for(let O=0;O<U;O++){let D=O*E-H;for(let M=0;M<X;M++){let k=M*G-W;q.push(k,-D,0),R.push(0,0,1),F.push(M/K),F.push(1-O/Y)}}for(let O=0;O<Y;O++)for(let D=0;D<K;D++){let M=D+X*O,k=D+X*(O+1),I=D+1+X*(O+1),P=D+1+X*O;N.push(M,k,P),N.push(k,I,P)}this.setIndex(N),this.setAttribute("position",new BJ(q,3)),this.setAttribute("normal",new BJ(R,3)),this.setAttribute("uv",new BJ(F,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new v9(J.width,J.height,J.widthSegments,J.heightSegments)}}class b6 extends dJ{constructor(J=0.5,Q=1,Z=32,$=1,W=0,H=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:J,outerRadius:Q,thetaSegments:Z,phiSegments:$,thetaStart:W,thetaLength:H},Z=Math.max(3,Z),$=Math.max(1,$);let K=[],Y=[],X=[],U=[],G=J,E=(Q-J)/$,N=new A,q=new i;for(let R=0;R<=$;R++){for(let F=0;F<=Z;F++){let O=W+F/Z*H;N.x=G*Math.cos(O),N.y=G*Math.sin(O),Y.push(N.x,N.y,N.z),X.push(0,0,1),q.x=(N.x/Q+1)/2,q.y=(N.y/Q+1)/2,U.push(q.x,q.y)}G+=E}for(let R=0;R<$;R++){let F=R*(Z+1);for(let O=0;O<Z;O++){let D=O+F,M=D,k=D+Z+1,I=D+Z+2,P=D+1;K.push(M,k,P),K.push(k,I,P)}}this.setIndex(K),this.setAttribute("position",new BJ(Y,3)),this.setAttribute("normal",new BJ(X,3)),this.setAttribute("uv",new BJ(U,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new b6(J.innerRadius,J.outerRadius,J.thetaSegments,J.phiSegments,J.thetaStart,J.thetaLength)}}class h6 extends dJ{constructor(J=new S8([new i(0,0.5),new i(-0.5,-0.5),new i(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let Z=[],$=[],W=[],H=[],K=0,Y=0;if(Array.isArray(J)===!1)X(J);else for(let U=0;U<J.length;U++)X(J[U]),this.addGroup(K,Y,U),K+=Y,Y=0;this.setIndex(Z),this.setAttribute("position",new BJ($,3)),this.setAttribute("normal",new BJ(W,3)),this.setAttribute("uv",new BJ(H,2));function X(U){let G=$.length/3,E=U.extractPoints(Q),N=E.shape,q=E.holes;if(X8.isClockWise(N)===!1)N=N.reverse();for(let F=0,O=q.length;F<O;F++){let D=q[F];if(X8.isClockWise(D)===!0)q[F]=D.reverse()}let R=X8.triangulateShape(N,q);for(let F=0,O=q.length;F<O;F++){let D=q[F];N=N.concat(D)}for(let F=0,O=N.length;F<O;F++){let D=N[F];$.push(D.x,D.y,0),W.push(0,0,1),H.push(D.x,D.y)}for(let F=0,O=R.length;F<O;F++){let D=R[F],M=D[0]+G,k=D[1]+G,I=D[2]+G;Z.push(M,k,I),Y+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return lE(Q,J)}static fromJSON(J,Q){let Z=[];for(let $=0,W=J.shapes.length;$<W;$++){let H=Q[J.shapes[$]];Z.push(H)}return new h6(Z,J.curveSegments)}}function lE(J,Q){if(Q.shapes=[],Array.isArray(J))for(let Z=0,$=J.length;Z<$;Z++){let W=J[Z];Q.shapes.push(W.uuid)}else Q.shapes.push(J.uuid);return Q}class C7 extends dJ{constructor(J=1,Q=32,Z=16,$=0,W=Math.PI*2,H=0,K=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:Z,phiStart:$,phiLength:W,thetaStart:H,thetaLength:K},Q=Math.max(3,Math.floor(Q)),Z=Math.max(2,Math.floor(Z));let Y=Math.min(H+K,Math.PI),X=0,U=[],G=new A,E=new A,N=[],q=[],R=[],F=[];for(let O=0;O<=Z;O++){let D=[],M=O/Z,k=0;if(O===0&&H===0)k=0.5/Q;else if(O===Z&&Y===Math.PI)k=-0.5/Q;for(let I=0;I<=Q;I++){let P=I/Q;G.x=-J*Math.cos($+P*W)*Math.sin(H+M*K),G.y=J*Math.cos(H+M*K),G.z=J*Math.sin($+P*W)*Math.sin(H+M*K),q.push(G.x,G.y,G.z),E.copy(G).normalize(),R.push(E.x,E.y,E.z),F.push(P+k,1-M),D.push(X++)}U.push(D)}for(let O=0;O<Z;O++)for(let D=0;D<Q;D++){let M=U[O][D+1],k=U[O][D],I=U[O+1][D],P=U[O+1][D+1];if(O!==0||H>0)N.push(M,k,P);if(O!==Z-1||Y<Math.PI)N.push(k,I,P)}this.setIndex(N),this.setAttribute("position",new BJ(q,3)),this.setAttribute("normal",new BJ(R,3)),this.setAttribute("uv",new BJ(F,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new C7(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class x6 extends f8{constructor(J=1,Q=0){let Z=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],$=[2,1,0,0,3,2,1,3,0,2,3,1];super(Z,$,J,Q);this.type="TetrahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new x6(J.radius,J.detail)}}class g6 extends dJ{constructor(J=1,Q=0.4,Z=12,$=48,W=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:Z,tubularSegments:$,arc:W},Z=Math.floor(Z),$=Math.floor($);let H=[],K=[],Y=[],X=[],U=new A,G=new A,E=new A;for(let N=0;N<=Z;N++)for(let q=0;q<=$;q++){let R=q/$*W,F=N/Z*Math.PI*2;G.x=(J+Q*Math.cos(F))*Math.cos(R),G.y=(J+Q*Math.cos(F))*Math.sin(R),G.z=Q*Math.sin(F),K.push(G.x,G.y,G.z),U.x=J*Math.cos(R),U.y=J*Math.sin(R),E.subVectors(G,U).normalize(),Y.push(E.x,E.y,E.z),X.push(q/$),X.push(N/Z)}for(let N=1;N<=Z;N++)for(let q=1;q<=$;q++){let R=($+1)*N+q-1,F=($+1)*(N-1)+q-1,O=($+1)*(N-1)+q,D=($+1)*N+q;H.push(R,F,D),H.push(F,O,D)}this.setIndex(H),this.setAttribute("position",new BJ(K,3)),this.setAttribute("normal",new BJ(Y,3)),this.setAttribute("uv",new BJ(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new g6(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc)}}class p6 extends dJ{constructor(J=1,Q=0.4,Z=64,$=8,W=2,H=3){super();this.type="TorusKnotGeometry",this.parameters={radius:J,tube:Q,tubularSegments:Z,radialSegments:$,p:W,q:H},Z=Math.floor(Z),$=Math.floor($);let K=[],Y=[],X=[],U=[],G=new A,E=new A,N=new A,q=new A,R=new A,F=new A,O=new A;for(let M=0;M<=Z;++M){let k=M/Z*W*Math.PI*2;D(k,W,H,J,N),D(k+0.01,W,H,J,q),F.subVectors(q,N),O.addVectors(q,N),R.crossVectors(F,O),O.crossVectors(R,F),R.normalize(),O.normalize();for(let I=0;I<=$;++I){let P=I/$*Math.PI*2,_=-Q*Math.cos(P),w=Q*Math.sin(P);G.x=N.x+(_*O.x+w*R.x),G.y=N.y+(_*O.y+w*R.y),G.z=N.z+(_*O.z+w*R.z),Y.push(G.x,G.y,G.z),E.subVectors(G,N).normalize(),X.push(E.x,E.y,E.z),U.push(M/Z),U.push(I/$)}}for(let M=1;M<=Z;M++)for(let k=1;k<=$;k++){let I=($+1)*(M-1)+(k-1),P=($+1)*M+(k-1),_=($+1)*M+k,w=($+1)*(M-1)+k;K.push(I,P,w),K.push(P,_,w)}this.setIndex(K),this.setAttribute("position",new BJ(Y,3)),this.setAttribute("normal",new BJ(X,3)),this.setAttribute("uv",new BJ(U,2));function D(M,k,I,P,_){let w=Math.cos(M),y=Math.sin(M),L=I/k*M,z=Math.cos(L);_.x=P*(2+z)*0.5*w,_.y=P*(2+z)*y*0.5,_.z=P*Math.sin(L)*0.5}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new p6(J.radius,J.tube,J.tubularSegments,J.radialSegments,J.p,J.q)}}class m6 extends dJ{constructor(J=new A6(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),Q=64,Z=1,$=8,W=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:Z,radialSegments:$,closed:W};let H=J.computeFrenetFrames(Q,W);this.tangents=H.tangents,this.normals=H.normals,this.binormals=H.binormals;let K=new A,Y=new A,X=new i,U=new A,G=[],E=[],N=[],q=[];R(),this.setIndex(q),this.setAttribute("position",new BJ(G,3)),this.setAttribute("normal",new BJ(E,3)),this.setAttribute("uv",new BJ(N,2));function R(){for(let M=0;M<Q;M++)F(M);F(W===!1?Q:0),D(),O()}function F(M){U=J.getPointAt(M/Q,U);let k=H.normals[M],I=H.binormals[M];for(let P=0;P<=$;P++){let _=P/$*Math.PI*2,w=Math.sin(_),y=-Math.cos(_);Y.x=y*k.x+w*I.x,Y.y=y*k.y+w*I.y,Y.z=y*k.z+w*I.z,Y.normalize(),E.push(Y.x,Y.y,Y.z),K.x=U.x+Z*Y.x,K.y=U.y+Z*Y.y,K.z=U.z+Z*Y.z,G.push(K.x,K.y,K.z)}}function O(){for(let M=1;M<=Q;M++)for(let k=1;k<=$;k++){let I=($+1)*(M-1)+(k-1),P=($+1)*M+(k-1),_=($+1)*M+k,w=($+1)*(M-1)+k;q.push(I,P,w),q.push(P,_,w)}}function D(){for(let M=0;M<=Q;M++)for(let k=0;k<=$;k++)X.x=M/Q,X.y=k/$,N.push(X.x,X.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new m6(new uQ[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}class aZ extends dJ{constructor(J=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:J},J!==null){let Q=[],Z=/*@__PURE__*/new Set,$=new A,W=new A;if(J.index!==null){let H=J.attributes.position,K=J.index,Y=J.groups;if(Y.length===0)Y=[{start:0,count:K.count,materialIndex:0}];for(let X=0,U=Y.length;X<U;++X){let G=Y[X],E=G.start,N=G.count;for(let q=E,R=E+N;q<R;q+=3)for(let F=0;F<3;F++){let O=K.getX(q+F),D=K.getX(q+(F+1)%3);if($.fromBufferAttribute(H,O),W.fromBufferAttribute(H,D),gY($,W,Z)===!0)Q.push($.x,$.y,$.z),Q.push(W.x,W.y,W.z)}}}else{let H=J.attributes.position;for(let K=0,Y=H.count/3;K<Y;K++)for(let X=0;X<3;X++){let U=3*K+X,G=3*K+(X+1)%3;if($.fromBufferAttribute(H,U),W.fromBufferAttribute(H,G),gY($,W,Z)===!0)Q.push($.x,$.y,$.z),Q.push(W.x,W.y,W.z)}}this.setAttribute("position",new BJ(Q,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}function gY(J,Q,Z){let $=`${J.x},${J.y},${J.z}-${Q.x},${Q.y},${Q.z}`,W=`${Q.x},${Q.y},${Q.z}-${J.x},${J.y},${J.z}`;if(Z.has($)===!0||Z.has(W)===!0)return!1;else return Z.add($),Z.add(W),!0}var pY=/*@__PURE__*/Object.freeze({__proto__:null,BoxGeometry:t8,CapsuleGeometry:T6,CircleGeometry:S6,ConeGeometry:j6,CylinderGeometry:y9,DodecahedronGeometry:y6,EdgesGeometry:iZ,ExtrudeGeometry:v6,IcosahedronGeometry:f6,LatheGeometry:I7,OctahedronGeometry:_7,PlaneGeometry:v9,PolyhedronGeometry:f8,RingGeometry:b6,ShapeGeometry:h6,SphereGeometry:C7,TetrahedronGeometry:x6,TorusGeometry:g6,TorusKnotGeometry:p6,TubeGeometry:m6,WireframeGeometry:aZ});class rZ extends I0{constructor(J){super();this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new qJ(0),this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.fog=J.fog,this}}class tZ extends i0{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class l6 extends I0{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qJ(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new i(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new l0,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class eZ extends l6{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new i(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qJ(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qJ(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qJ(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class J$ extends I0{constructor(J){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qJ(16777215),this.specular=new qJ(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new i(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new l0,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.specular.copy(J.specular),this.shininess=J.shininess,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class Q$ extends I0{constructor(J){super();this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new qJ(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new i(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.gradientMap=J.gradientMap,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.alphaMap=J.alphaMap,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}class Z$ extends I0{constructor(J){super();this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new i(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(J)}copy(J){return super.copy(J),this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.flatShading=J.flatShading,this}}class $$ extends I0{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new i(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new l0,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class d6 extends I0{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class u6 extends I0{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}class W$ extends I0{constructor(J){super();this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new qJ(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new i(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={MATCAP:""},this.color.copy(J.color),this.matcap=J.matcap,this.map=J.map,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.alphaMap=J.alphaMap,this.flatShading=J.flatShading,this.fog=J.fog,this}}class H$ extends A0{constructor(J){super();this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(J)}copy(J){return super.copy(J),this.scale=J.scale,this.dashSize=J.dashSize,this.gapSize=J.gapSize,this}}function N9(J,Q,Z){if(!J||!Z&&J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function LU(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function BU(J){function Q(W,H){return J[W]-J[H]}let Z=J.length,$=new Array(Z);for(let W=0;W!==Z;++W)$[W]=W;return $.sort(Q),$}function MW(J,Q,Z){let $=J.length,W=new J.constructor($);for(let H=0,K=0;K!==$;++H){let Y=Z[H]*Q;for(let X=0;X!==Q;++X)W[K++]=J[Y+X]}return W}function nH(J,Q,Z,$){let W=1,H=J[0];while(H!==void 0&&H[$]===void 0)H=J[W++];if(H===void 0)return;let K=H[$];if(K===void 0)return;if(Array.isArray(K))do{if(K=H[$],K!==void 0)Q.push(H.time),Z.push.apply(Z,K);H=J[W++]}while(H!==void 0);else if(K.toArray!==void 0)do{if(K=H[$],K!==void 0)Q.push(H.time),K.toArray(Z,Z.length);H=J[W++]}while(H!==void 0);else do{if(K=H[$],K!==void 0)Q.push(H.time),Z.push(K);H=J[W++]}while(H!==void 0)}function dE(J,Q,Z,$,W=30){let H=J.clone();H.name=Q;let K=[];for(let X=0;X<H.tracks.length;++X){let U=H.tracks[X],G=U.getValueSize(),E=[],N=[];for(let q=0;q<U.times.length;++q){let R=U.times[q]*W;if(R<Z||R>=$)continue;E.push(U.times[q]);for(let F=0;F<G;++F)N.push(U.values[q*G+F])}if(E.length===0)continue;U.times=N9(E,U.times.constructor),U.values=N9(N,U.values.constructor),K.push(U)}H.tracks=K;let Y=1/0;for(let X=0;X<H.tracks.length;++X)if(Y>H.tracks[X].times[0])Y=H.tracks[X].times[0];for(let X=0;X<H.tracks.length;++X)H.tracks[X].shift(-1*Y);return H.resetDuration(),H}function uE(J,Q=0,Z=J,$=30){if($<=0)$=30;let W=Z.tracks.length,H=Q/$;for(let K=0;K<W;++K){let Y=Z.tracks[K],X=Y.ValueTypeName;if(X==="bool"||X==="string")continue;let U=J.tracks.find(function(D){return D.name===Y.name&&D.ValueTypeName===X});if(U===void 0)continue;let G=0,E=Y.getValueSize();if(Y.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)G=E/3;let N=0,q=U.getValueSize();if(U.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)N=q/3;let R=Y.times.length-1,F;if(H<=Y.times[0]){let D=G,M=E-G;F=Y.values.slice(D,M)}else if(H>=Y.times[R]){let D=R*E+G,M=D+E-G;F=Y.values.slice(D,M)}else{let D=Y.createInterpolant(),M=G,k=E-G;D.evaluate(H),F=D.resultBuffer.slice(M,k)}if(X==="quaternion")new j0().fromArray(F).normalize().conjugate().toArray(F);let O=U.times.length;for(let D=0;D<O;++D){let M=D*q+N;if(X==="quaternion")j0.multiplyQuaternionsFlat(U.values,M,F,0,U.values,M);else{let k=q-N*2;for(let I=0;I<k;++I)U.values[M+I]-=F[I]}}}return J.blendMode=2501,J}var zU={convertArray:N9,isTypedArray:LU,getKeyframeOrder:BU,sortedArray:MW,flattenJSON:nH,subclip:dE,makeClipAdditive:uE};class f9{constructor(J,Q,Z,$){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=$!==void 0?$:new Q.constructor(Z),this.sampleValues=Q,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,Z=this._cachedIndex,$=Q[Z],W=Q[Z-1];J:{Q:{let H;Z:{$:if(!(J<$)){for(let K=Z+2;;){if($===void 0){if(J<W)break $;return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===K)break;if(W=$,$=Q[++Z],J<$)break Q}H=Q.length;break Z}if(!(J>=W)){let K=Q[1];if(J<K)Z=2,W=K;for(let Y=Z-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===Y)break;if($=W,W=Q[--Z-1],J>=W)break Q}H=Z,Z=0;break Z}break J}while(Z<H){let K=Z+H>>>1;if(J<Q[K])H=K;else Z=K+1}if($=Q[Z],W=Q[Z-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===void 0)return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,W,$)}return this.interpolate_(Z,W,J,$)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,$=this.valueSize,W=J*$;for(let H=0;H!==$;++H)Q[H]=Z[W+H];return Q}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class K$ extends f9{constructor(J,Q,Z,$){super(J,Q,Z,$);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,Z){let $=this.parameterPositions,W=J-2,H=J+1,K=$[W],Y=$[H];if(K===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,K=2*Q-Z;break;case 2402:W=$.length-2,K=Q+$[W]-$[W+1];break;default:W=J,K=Z}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,Y=2*Z-Q;break;case 2402:H=1,Y=Z+$[1]-$[0];break;default:H=J-1,Y=Q}let X=(Z-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-K),this._weightNext=X/(Y-Z),this._offsetPrev=W*U,this._offsetNext=H*U}interpolate_(J,Q,Z,$){let W=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=J*K,X=Y-K,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,N=this._weightNext,q=(Z-Q)/($-Q),R=q*q,F=R*q,O=-E*F+2*E*R-E*q,D=(1+E)*F+(-1.5-2*E)*R+(-0.5+E)*q+1,M=(-1-N)*F+(1.5+N)*R+0.5*q,k=N*F-N*R;for(let I=0;I!==K;++I)W[I]=O*H[U+I]+D*H[X+I]+M*H[Y+I]+k*H[G+I];return W}}class c6 extends f9{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J,Q,Z,$){let W=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=J*K,X=Y-K,U=(Z-Q)/($-Q),G=1-U;for(let E=0;E!==K;++E)W[E]=H[X+E]*G+H[Y+E]*U;return W}}class Y$ extends f9{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J){return this.copySampleValue_(J-1)}}class a0{constructor(J,Q,Z,$){if(J===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=N9(Q,this.TimeBufferType),this.values=N9(Z,this.ValueBufferType),this.setInterpolation($||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,Z;if(Q.toJSON!==this.toJSON)Z=Q.toJSON(J);else{Z={name:J.name,times:N9(J.times,Array),values:N9(J.values,Array)};let $=J.getInterpolation();if($!==J.DefaultInterpolation)Z.interpolation=$}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new Y$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new c6(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new K$(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(Z);return this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let Z=0,$=Q.length;Z!==$;++Z)Q[Z]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let Z=0,$=Q.length;Z!==$;++Z)Q[Z]*=J}return this}trim(J,Q){let Z=this.times,$=Z.length,W=0,H=$-1;while(W!==$&&Z[W]<J)++W;while(H!==-1&&Z[H]>Q)--H;if(++H,W!==0||H!==$){if(W>=H)H=Math.max(H,1),W=H-1;let K=this.getValueSize();this.times=Z.slice(W,H),this.values=this.values.slice(W*K,H*K)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)J=!1;let Z=this.times,$=this.values,W=Z.length;if(W===0)J=!1;let H=null;for(let K=0;K!==W;K++){let Y=Z[K];if(typeof Y==="number"&&isNaN(Y)){J=!1;break}if(H!==null&&H>Y){J=!1;break}H=Y}if($!==void 0){if(LU($))for(let K=0,Y=$.length;K!==Y;++K){let X=$[K];if(isNaN(X)){J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),Z=this.getValueSize(),$=this.getInterpolation()===2302,W=J.length-1,H=1;for(let K=1;K<W;++K){let Y=!1,X=J[K],U=J[K+1];if(X!==U&&(K!==1||X!==J[0]))if(!$){let G=K*Z,E=G-Z,N=G+Z;for(let q=0;q!==Z;++q){let R=Q[G+q];if(R!==Q[E+q]||R!==Q[N+q]){Y=!0;break}}}else Y=!0;if(Y){if(K!==H){J[H]=J[K];let G=K*Z,E=H*Z;for(let N=0;N!==Z;++N)Q[E+N]=Q[G+N]}++H}}if(W>0){J[H]=J[W];for(let K=W*Z,Y=H*Z,X=0;X!==Z;++X)Q[Y+X]=Q[K+X];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Q.slice(0,H*Z);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),$=new this.constructor(this.name,J,Q);return $.createInterpolant=this.createInterpolant,$}}a0.prototype.TimeBufferType=Float32Array;a0.prototype.ValueBufferType=Float32Array;a0.prototype.DefaultInterpolation=2301;class b8 extends a0{constructor(J,Q,Z){super(J,Q,Z)}}b8.prototype.ValueTypeName="bool";b8.prototype.ValueBufferType=Array;b8.prototype.DefaultInterpolation=2300;b8.prototype.InterpolantFactoryMethodLinear=void 0;b8.prototype.InterpolantFactoryMethodSmooth=void 0;class n6 extends a0{}n6.prototype.ValueTypeName="color";class F9 extends a0{}F9.prototype.ValueTypeName="number";class X$ extends f9{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J,Q,Z,$){let W=this.resultBuffer,H=this.sampleValues,K=this.valueSize,Y=(Z-Q)/($-Q),X=J*K;for(let U=X+K;X!==U;X+=4)j0.slerpFlat(W,0,H,X-K,H,X,Y);return W}}class b9 extends a0{InterpolantFactoryMethodLinear(J){return new X$(this.times,this.values,this.getValueSize(),J)}}b9.prototype.ValueTypeName="quaternion";b9.prototype.InterpolantFactoryMethodSmooth=void 0;class h8 extends a0{constructor(J,Q,Z){super(J,Q,Z)}}h8.prototype.ValueTypeName="string";h8.prototype.ValueBufferType=Array;h8.prototype.DefaultInterpolation=2300;h8.prototype.InterpolantFactoryMethodLinear=void 0;h8.prototype.InterpolantFactoryMethodSmooth=void 0;class k9 extends a0{}k9.prototype.ValueTypeName="vector";class M9{constructor(J="",Q=-1,Z=[],$=2500){if(this.name=J,this.tracks=Z,this.duration=Q,this.blendMode=$,this.uuid=s0(),this.duration<0)this.resetDuration()}static parse(J){let Q=[],Z=J.tracks,$=1/(J.fps||1);for(let H=0,K=Z.length;H!==K;++H)Q.push(nE(Z[H]).scale($));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W}static toJSON(J){let Q=[],Z=J.tracks,$={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode};for(let W=0,H=Z.length;W!==H;++W)Q.push(a0.toJSON(Z[W]));return $}static CreateFromMorphTargetSequence(J,Q,Z,$){let W=Q.length,H=[];for(let K=0;K<W;K++){let Y=[],X=[];Y.push((K+W-1)%W,K,(K+1)%W),X.push(0,1,0);let U=BU(Y);if(Y=MW(Y,1,U),X=MW(X,1,U),!$&&Y[0]===0)Y.push(W),X.push(X[0]);H.push(new F9(".morphTargetInfluences["+Q[K].name+"]",Y,X).scale(1/Z))}return new this(J,-1,H)}static findByName(J,Q){let Z=J;if(!Array.isArray(J)){let $=J;Z=$.geometry&&$.geometry.animations||$.animations}for(let $=0;$<Z.length;$++)if(Z[$].name===Q)return Z[$];return null}static CreateClipsFromMorphTargetSequences(J,Q,Z){let $={},W=/^([\w-]*?)([\d]+)$/;for(let K=0,Y=J.length;K<Y;K++){let X=J[K],U=X.name.match(W);if(U&&U.length>1){let G=U[1],E=$[G];if(!E)$[G]=E=[];E.push(X)}}let H=[];for(let K in $)H.push(this.CreateFromMorphTargetSequence(K,$[K],Q,Z));return H}static parseAnimation(J,Q){if(!J)return null;let Z=function(G,E,N,q,R){if(N.length!==0){let F=[],O=[];if(nH(N,F,O,q),F.length!==0)R.push(new G(E,F,O))}},$=[],W=J.name||"default",H=J.fps||30,K=J.blendMode,Y=J.length||-1,X=J.hierarchy||[];for(let G=0;G<X.length;G++){let E=X[G].keys;if(!E||E.length===0)continue;if(E[0].morphTargets){let N={},q;for(q=0;q<E.length;q++)if(E[q].morphTargets)for(let R=0;R<E[q].morphTargets.length;R++)N[E[q].morphTargets[R]]=-1;for(let R in N){let F=[],O=[];for(let D=0;D!==E[q].morphTargets.length;++D){let M=E[q];F.push(M.time),O.push(M.morphTarget===R?1:0)}$.push(new F9(".morphTargetInfluence["+R+"]",F,O))}Y=N.length*H}else{let N=".bones["+Q[G].name+"]";Z(k9,N+".position",E,"pos",$),Z(b9,N+".quaternion",E,"rot",$),Z(k9,N+".scale",E,"scl",$)}}if($.length===0)return null;return new this(W,Y,$,K)}resetDuration(){let J=this.tracks,Q=0;for(let Z=0,$=J.length;Z!==$;++Z){let W=this.tracks[Z];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let Q=0;Q<this.tracks.length;Q++)J.push(this.tracks[Q].clone());return new this.constructor(this.name,this.duration,J,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function cE(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return F9;case"vector":case"vector2":case"vector3":case"vector4":return k9;case"color":return n6;case"quaternion":return b9;case"bool":case"boolean":return b8;case"string":return h8}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function nE(J){if(J.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=cE(J.type);if(J.times===void 0){let Z=[],$=[];nH(J.keys,Z,$,"value"),J.times=Z,J.values=$}if(Q.parse!==void 0)return Q.parse(J);else return new Q(J.name,J.times,J.values,J.interpolation)}var R8={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class s6{constructor(J,Q,Z){let $=this,W=!1,H=0,K=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=Z,this.itemStart=function(U){if(K++,W===!1){if($.onStart!==void 0)$.onStart(U,H,K)}W=!0},this.itemEnd=function(U){if(H++,$.onProgress!==void 0)$.onProgress(U,H,K);if(H===K){if(W=!1,$.onLoad!==void 0)$.onLoad()}},this.itemError=function(U){if($.onError!==void 0)$.onError(U)},this.resolveURL=function(U){if(Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,G){return X.push(U,G),this},this.removeHandler=function(U){let G=X.indexOf(U);if(G!==-1)X.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=X.length;G<E;G+=2){let N=X[G],q=X[G+1];if(N.global)N.lastIndex=0;if(N.test(U))return q}return null}}}var sH=/*@__PURE__*/new s6;class v0{constructor(J){this.manager=J!==void 0?J:sH,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let Z=this;return new Promise(function($,W){Z.load(J,$,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}}v0.DEFAULT_MATERIAL_NAME="__DEFAULT";var w8={};class IU extends Error{constructor(J,Q){super(J);this.response=Q}}class U8 extends v0{constructor(J){super(J)}load(J,Q,Z,$){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=R8.get(J);if(W!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0),W;if(w8[J]!==void 0){w8[J].push({onLoad:Q,onProgress:Z,onError:$});return}w8[J]=[],w8[J].push({onLoad:Q,onProgress:Z,onError:$});let H=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),K=this.mimeType,Y=this.responseType;fetch(H).then((X)=>{if(X.status===200||X.status===0){if(X.status===0);if(typeof ReadableStream==="undefined"||X.body===void 0||X.body.getReader===void 0)return X;let U=w8[J],G=X.body.getReader(),E=X.headers.get("X-File-Size")||X.headers.get("Content-Length"),N=E?parseInt(E):0,q=N!==0,R=0,F=new ReadableStream({start(O){D();function D(){G.read().then(({done:M,value:k})=>{if(M)O.close();else{R+=k.byteLength;let I=new ProgressEvent("progress",{lengthComputable:q,loaded:R,total:N});for(let P=0,_=U.length;P<_;P++){let w=U[P];if(w.onProgress)w.onProgress(I)}O.enqueue(k),D()}},(M)=>{O.error(M)})}}});return new Response(F)}else throw new IU(`fetch for "${X.url}" responded with ${X.status}: ${X.statusText}`,X)}).then((X)=>{switch(Y){case"arraybuffer":return X.arrayBuffer();case"blob":return X.blob();case"document":return X.text().then((U)=>{return new DOMParser().parseFromString(U,K)});case"json":return X.json();default:if(K===void 0)return X.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(K),E=G&&G[1]?G[1].toLowerCase():void 0,N=new TextDecoder(E);return X.arrayBuffer().then((q)=>N.decode(q))}}}).then((X)=>{R8.add(J,X);let U=w8[J];delete w8[J];for(let G=0,E=U.length;G<E;G++){let N=U[G];if(N.onLoad)N.onLoad(X)}}).catch((X)=>{let U=w8[J];if(U===void 0)throw this.manager.itemError(J),X;delete w8[J];for(let G=0,E=U.length;G<E;G++){let N=U[G];if(N.onError)N.onError(X)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}}class iH extends v0{constructor(J){super(J)}load(J,Q,Z,$){let W=this,H=new U8(this.manager);H.setPath(this.path),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load(J,function(K){try{Q(W.parse(JSON.parse(K)))}catch(Y){if($)$(Y);W.manager.itemError(J)}},Z,$)}parse(J){let Q=[];for(let Z=0;Z<J.length;Z++){let $=M9.parse(J[Z]);Q.push($)}return Q}}class oH extends v0{constructor(J){super(J)}load(J,Q,Z,$){let W=this,H=[],K=new B7,Y=new U8(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(W.withCredentials);let X=0;function U(G){Y.load(J[G],function(E){let N=W.parse(E,!0);if(H[G]={width:N.width,height:N.height,format:N.format,mipmaps:N.mipmaps},X+=1,X===6){if(N.mipmapCount===1)K.minFilter=1006;if(K.image=H,K.format=N.format,K.needsUpdate=!0,Q)Q(K)}},Z,$)}if(Array.isArray(J))for(let G=0,E=J.length;G<E;++G)U(G);else Y.load(J,function(G){let E=W.parse(G,!0);if(E.isCubemap){let N=E.mipmaps.length/E.mipmapCount;for(let q=0;q<N;q++){H[q]={mipmaps:[]};for(let R=0;R<E.mipmapCount;R++)H[q].mipmaps.push(E.mipmaps[q*E.mipmapCount+R]),H[q].format=E.format,H[q].width=E.width,H[q].height=E.height}K.image=H}else K.image.width=E.width,K.image.height=E.height,K.mipmaps=E.mipmaps;if(E.mipmapCount===1)K.minFilter=1006;if(K.format=E.format,K.needsUpdate=!0,Q)Q(K)},Z,$);return K}}class V9 extends v0{constructor(J){super(J)}load(J,Q,Z,$){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=R8.get(J);if(H!==void 0)return W.manager.itemStart(J),setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0),H;let K=Y7("img");function Y(){if(U(),R8.add(J,this),Q)Q(this);W.manager.itemEnd(J)}function X(G){if(U(),$)$(G);W.manager.itemError(J),W.manager.itemEnd(J)}function U(){K.removeEventListener("load",Y,!1),K.removeEventListener("error",X,!1)}if(K.addEventListener("load",Y,!1),K.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)K.crossOrigin=this.crossOrigin}return W.manager.itemStart(J),K.src=J,K}}class aH extends v0{constructor(J){super(J)}load(J,Q,Z,$){let W=new S9;W.colorSpace="srgb";let H=new V9(this.manager);H.setCrossOrigin(this.crossOrigin),H.setPath(this.path);let K=0;function Y(X){H.load(J[X],function(U){if(W.images[X]=U,K++,K===6){if(W.needsUpdate=!0,Q)Q(W)}},void 0,$)}for(let X=0;X<J.length;++X)Y(X);return W}}class rH extends v0{constructor(J){super(J)}load(J,Q,Z,$){let W=this,H=new J8,K=new U8(this.manager);return K.setResponseType("arraybuffer"),K.setRequestHeader(this.requestHeader),K.setPath(this.path),K.setWithCredentials(W.withCredentials),K.load(J,function(Y){let X;try{X=W.parse(Y)}catch(U){if($!==void 0)$(U);else return}if(X.image!==void 0)H.image=X.image;else if(X.data!==void 0)H.image.width=X.width,H.image.height=X.height,H.image.data=X.data;if(H.wrapS=X.wrapS!==void 0?X.wrapS:1001,H.wrapT=X.wrapT!==void 0?X.wrapT:1001,H.magFilter=X.magFilter!==void 0?X.magFilter:1006,H.minFilter=X.minFilter!==void 0?X.minFilter:1006,H.anisotropy=X.anisotropy!==void 0?X.anisotropy:1,X.colorSpace!==void 0)H.colorSpace=X.colorSpace;if(X.flipY!==void 0)H.flipY=X.flipY;if(X.format!==void 0)H.format=X.format;if(X.type!==void 0)H.type=X.type;if(X.mipmaps!==void 0)H.mipmaps=X.mipmaps,H.minFilter=1008;if(X.mipmapCount===1)H.minFilter=1006;if(X.generateMipmaps!==void 0)H.generateMipmaps=X.generateMipmaps;if(H.needsUpdate=!0,Q)Q(H,X)},Z,$),H}}class tH extends v0{constructor(J){super(J)}load(J,Q,Z,$){let W=new E0,H=new V9(this.manager);return H.setCrossOrigin(this.crossOrigin),H.setPath(this.path),H.load(J,function(K){if(W.image=K,W.needsUpdate=!0,Q!==void 0)Q(W)},Z,$),W}}class V8 extends J0{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new qJ(J),this.intensity=Q}dispose(){}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);if(Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,this.groundColor!==void 0)Q.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Q.object.distance=this.distance;if(this.angle!==void 0)Q.object.angle=this.angle;if(this.decay!==void 0)Q.object.decay=this.decay;if(this.penumbra!==void 0)Q.object.penumbra=this.penumbra;if(this.shadow!==void 0)Q.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Q.object.target=this.target.uuid;return Q}}class U$ extends V8{constructor(J,Q,Z){super(J,Z);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(J0.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qJ(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}}var NW=/*@__PURE__*/new jJ,mY=/*@__PURE__*/new A,lY=/*@__PURE__*/new A;class G${constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new i(512,512),this.map=null,this.mapPass=null,this.matrix=new jJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new j9,this._frameExtents=new i(1,1),this._viewportCount=1,this._viewports=[new eJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,Z=this.matrix;mY.setFromMatrixPosition(J.matrixWorld),Q.position.copy(mY),lY.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(lY),Q.updateMatrixWorld(),NW.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(NW),Z.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),Z.multiply(NW)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class _U extends G${constructor(){super(new M0(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1}updateMatrices(J){let Q=this.camera,Z=D9*2*J.angle*this.focus,$=this.mapSize.width/this.mapSize.height,W=J.distance||Q.far;if(Z!==Q.fov||$!==Q.aspect||W!==Q.far)Q.fov=Z,Q.aspect=$,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class E$ extends V8{constructor(J,Q,Z=0,$=Math.PI/3,W=0,H=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(J0.DEFAULT_UP),this.updateMatrix(),this.target=new J0,this.distance=Z,this.angle=$,this.penumbra=W,this.decay=H,this.map=null,this.shadow=new _U}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var dY=/*@__PURE__*/new jJ,c7=/*@__PURE__*/new A,qW=/*@__PURE__*/new A;class CU extends G${constructor(){super(new M0(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new i(4,2),this._viewportCount=6,this._viewports=[new eJ(2,1,1,1),new eJ(0,1,1,1),new eJ(3,1,1,1),new eJ(1,1,1,1),new eJ(3,0,1,1),new eJ(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(J,Q=0){let Z=this.camera,$=this.matrix,W=J.distance||Z.far;if(W!==Z.far)Z.far=W,Z.updateProjectionMatrix();c7.setFromMatrixPosition(J.matrixWorld),Z.position.copy(c7),qW.copy(Z.position),qW.add(this._cubeDirections[Q]),Z.up.copy(this._cubeUps[Q]),Z.lookAt(qW),Z.updateMatrixWorld(),$.makeTranslation(-c7.x,-c7.y,-c7.z),dY.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dY)}}class N$ extends V8{constructor(J,Q,Z=0,$=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=Z,this.decay=$,this.shadow=new CU}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class w7 extends M7{constructor(J=-1,Q=1,Z=1,$=-1,W=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=Z,this.bottom=$,this.near=W,this.far=H,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,Z,$,W,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=$,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,$=(this.top+this.bottom)/2,W=Z-J,H=Z+J,K=$+Q,Y=$-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=X*this.view.offsetX,H=W+X*this.view.width,K-=U*this.view.offsetY,Y=K-U*this.view.height}this.projectionMatrix.makeOrthographic(W,H,K,Y,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class wU extends G${constructor(){super(new w7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class q$ extends V8{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(J0.DEFAULT_UP),this.updateMatrix(),this.target=new J0,this.shadow=new wU}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class D$ extends V8{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}class O$ extends V8{constructor(J,Q,Z=10,$=10){super(J,Q);this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=Z,this.height=$}get power(){return this.intensity*this.width*this.height*Math.PI}set power(J){this.intensity=J/(this.width*this.height*Math.PI)}copy(J){return super.copy(J),this.width=J.width,this.height=J.height,this}toJSON(J){let Q=super.toJSON(J);return Q.object.width=this.width,Q.object.height=this.height,Q}}class R${constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let J=0;J<9;J++)this.coefficients.push(new A)}set(J){for(let Q=0;Q<9;Q++)this.coefficients[Q].copy(J[Q]);return this}zero(){for(let J=0;J<9;J++)this.coefficients[J].set(0,0,0);return this}getAt(J,Q){let{x:Z,y:$,z:W}=J,H=this.coefficients;return Q.copy(H[0]).multiplyScalar(0.282095),Q.addScaledVector(H[1],0.488603*$),Q.addScaledVector(H[2],0.488603*W),Q.addScaledVector(H[3],0.488603*Z),Q.addScaledVector(H[4],1.092548*(Z*$)),Q.addScaledVector(H[5],1.092548*($*W)),Q.addScaledVector(H[6],0.315392*(3*W*W-1)),Q.addScaledVector(H[7],1.092548*(Z*W)),Q.addScaledVector(H[8],0.546274*(Z*Z-$*$)),Q}getIrradianceAt(J,Q){let{x:Z,y:$,z:W}=J,H=this.coefficients;return Q.copy(H[0]).multiplyScalar(0.886227),Q.addScaledVector(H[1],1.023328*$),Q.addScaledVector(H[2],1.023328*W),Q.addScaledVector(H[3],1.023328*Z),Q.addScaledVector(H[4],0.858086*Z*$),Q.addScaledVector(H[5],0.858086*$*W),Q.addScaledVector(H[6],0.743125*W*W-0.247708),Q.addScaledVector(H[7],0.858086*Z*W),Q.addScaledVector(H[8],0.429043*(Z*Z-$*$)),Q}add(J){for(let Q=0;Q<9;Q++)this.coefficients[Q].add(J.coefficients[Q]);return this}addScaledSH(J,Q){for(let Z=0;Z<9;Z++)this.coefficients[Z].addScaledVector(J.coefficients[Z],Q);return this}scale(J){for(let Q=0;Q<9;Q++)this.coefficients[Q].multiplyScalar(J);return this}lerp(J,Q){for(let Z=0;Z<9;Z++)this.coefficients[Z].lerp(J.coefficients[Z],Q);return this}equals(J){for(let Q=0;Q<9;Q++)if(!this.coefficients[Q].equals(J.coefficients[Q]))return!1;return!0}copy(J){return this.set(J.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(J,Q=0){let Z=this.coefficients;for(let $=0;$<9;$++)Z[$].fromArray(J,Q+$*3);return this}toArray(J=[],Q=0){let Z=this.coefficients;for(let $=0;$<9;$++)Z[$].toArray(J,Q+$*3);return J}static getBasisAt(J,Q){let{x:Z,y:$,z:W}=J;Q[0]=0.282095,Q[1]=0.488603*$,Q[2]=0.488603*W,Q[3]=0.488603*Z,Q[4]=1.092548*Z*$,Q[5]=1.092548*$*W,Q[6]=0.315392*(3*W*W-1),Q[7]=1.092548*Z*W,Q[8]=0.546274*(Z*Z-$*$)}}class F$ extends V8{constructor(J=new R$,Q=1){super(void 0,Q);this.isLightProbe=!0,this.sh=J}copy(J){return super.copy(J),this.sh.copy(J.sh),this}fromJSON(J){return this.intensity=J.intensity,this.sh.fromArray(J.sh),this}toJSON(J){let Q=super.toJSON(J);return Q.object.sh=this.sh.toArray(),Q}}class i6 extends v0{constructor(J){super(J);this.textures={}}load(J,Q,Z,$){let W=this,H=new U8(W.manager);H.setPath(W.path),H.setRequestHeader(W.requestHeader),H.setWithCredentials(W.withCredentials),H.load(J,function(K){try{Q(W.parse(JSON.parse(K)))}catch(Y){if($)$(Y);W.manager.itemError(J)}},Z,$)}parse(J){let Q=this.textures;function Z(W){if(Q[W]===void 0);return Q[W]}let $=this.createMaterialFromType(J.type);if(J.uuid!==void 0)$.uuid=J.uuid;if(J.name!==void 0)$.name=J.name;if(J.color!==void 0&&$.color!==void 0)$.color.setHex(J.color);if(J.roughness!==void 0)$.roughness=J.roughness;if(J.metalness!==void 0)$.metalness=J.metalness;if(J.sheen!==void 0)$.sheen=J.sheen;if(J.sheenColor!==void 0)$.sheenColor=new qJ().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)$.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&$.emissive!==void 0)$.emissive.setHex(J.emissive);if(J.specular!==void 0&&$.specular!==void 0)$.specular.setHex(J.specular);if(J.specularIntensity!==void 0)$.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&$.specularColor!==void 0)$.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)$.shininess=J.shininess;if(J.clearcoat!==void 0)$.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)$.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)$.dispersion=J.dispersion;if(J.iridescence!==void 0)$.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)$.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)$.transmission=J.transmission;if(J.thickness!==void 0)$.thickness=J.thickness;if(J.attenuationDistance!==void 0)$.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&$.attenuationColor!==void 0)$.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)$.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)$.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)$.fog=J.fog;if(J.flatShading!==void 0)$.flatShading=J.flatShading;if(J.blending!==void 0)$.blending=J.blending;if(J.combine!==void 0)$.combine=J.combine;if(J.side!==void 0)$.side=J.side;if(J.shadowSide!==void 0)$.shadowSide=J.shadowSide;if(J.opacity!==void 0)$.opacity=J.opacity;if(J.transparent!==void 0)$.transparent=J.transparent;if(J.alphaTest!==void 0)$.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)$.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)$.depthFunc=J.depthFunc;if(J.depthTest!==void 0)$.depthTest=J.depthTest;if(J.depthWrite!==void 0)$.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)$.colorWrite=J.colorWrite;if(J.blendSrc!==void 0)$.blendSrc=J.blendSrc;if(J.blendDst!==void 0)$.blendDst=J.blendDst;if(J.blendEquation!==void 0)$.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)$.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)$.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)$.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&$.blendColor!==void 0)$.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)$.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)$.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)$.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)$.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)$.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)$.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)$.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)$.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)$.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)$.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)$.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)$.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)$.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)$.rotation=J.rotation;if(J.linewidth!==void 0)$.linewidth=J.linewidth;if(J.dashSize!==void 0)$.dashSize=J.dashSize;if(J.gapSize!==void 0)$.gapSize=J.gapSize;if(J.scale!==void 0)$.scale=J.scale;if(J.polygonOffset!==void 0)$.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)$.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)$.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)$.dithering=J.dithering;if(J.alphaToCoverage!==void 0)$.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)$.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)$.forceSinglePass=J.forceSinglePass;if(J.visible!==void 0)$.visible=J.visible;if(J.toneMapped!==void 0)$.toneMapped=J.toneMapped;if(J.userData!==void 0)$.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")$.vertexColors=J.vertexColors>0?!0:!1;else $.vertexColors=J.vertexColors;if(J.uniforms!==void 0)for(let W in J.uniforms){let H=J.uniforms[W];switch($.uniforms[W]={},H.type){case"t":$.uniforms[W].value=Z(H.value);break;case"c":$.uniforms[W].value=new qJ().setHex(H.value);break;case"v2":$.uniforms[W].value=new i().fromArray(H.value);break;case"v3":$.uniforms[W].value=new A().fromArray(H.value);break;case"v4":$.uniforms[W].value=new eJ().fromArray(H.value);break;case"m3":$.uniforms[W].value=new pJ().fromArray(H.value);break;case"m4":$.uniforms[W].value=new jJ().fromArray(H.value);break;default:$.uniforms[W].value=H.value}}if(J.defines!==void 0)$.defines=J.defines;if(J.vertexShader!==void 0)$.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)$.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)$.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let W in J.extensions)$.extensions[W]=J.extensions[W];if(J.lights!==void 0)$.lights=J.lights;if(J.clipping!==void 0)$.clipping=J.clipping;if(J.size!==void 0)$.size=J.size;if(J.sizeAttenuation!==void 0)$.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)$.map=Z(J.map);if(J.matcap!==void 0)$.matcap=Z(J.matcap);if(J.alphaMap!==void 0)$.alphaMap=Z(J.alphaMap);if(J.bumpMap!==void 0)$.bumpMap=Z(J.bumpMap);if(J.bumpScale!==void 0)$.bumpScale=J.bumpScale;if(J.normalMap!==void 0)$.normalMap=Z(J.normalMap);if(J.normalMapType!==void 0)$.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let W=J.normalScale;if(Array.isArray(W)===!1)W=[W,W];$.normalScale=new i().fromArray(W)}if(J.displacementMap!==void 0)$.displacementMap=Z(J.displacementMap);if(J.displacementScale!==void 0)$.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)$.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)$.roughnessMap=Z(J.roughnessMap);if(J.metalnessMap!==void 0)$.metalnessMap=Z(J.metalnessMap);if(J.emissiveMap!==void 0)$.emissiveMap=Z(J.emissiveMap);if(J.emissiveIntensity!==void 0)$.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)$.specularMap=Z(J.specularMap);if(J.specularIntensityMap!==void 0)$.specularIntensityMap=Z(J.specularIntensityMap);if(J.specularColorMap!==void 0)$.specularColorMap=Z(J.specularColorMap);if(J.envMap!==void 0)$.envMap=Z(J.envMap);if(J.envMapRotation!==void 0)$.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)$.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)$.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)$.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)$.lightMap=Z(J.lightMap);if(J.lightMapIntensity!==void 0)$.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)$.aoMap=Z(J.aoMap);if(J.aoMapIntensity!==void 0)$.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)$.gradientMap=Z(J.gradientMap);if(J.clearcoatMap!==void 0)$.clearcoatMap=Z(J.clearcoatMap);if(J.clearcoatRoughnessMap!==void 0)$.clearcoatRoughnessMap=Z(J.clearcoatRoughnessMap);if(J.clearcoatNormalMap!==void 0)$.clearcoatNormalMap=Z(J.clearcoatNormalMap);if(J.clearcoatNormalScale!==void 0)$.clearcoatNormalScale=new i().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)$.iridescenceMap=Z(J.iridescenceMap);if(J.iridescenceThicknessMap!==void 0)$.iridescenceThicknessMap=Z(J.iridescenceThicknessMap);if(J.transmissionMap!==void 0)$.transmissionMap=Z(J.transmissionMap);if(J.thicknessMap!==void 0)$.thicknessMap=Z(J.thicknessMap);if(J.anisotropyMap!==void 0)$.anisotropyMap=Z(J.anisotropyMap);if(J.sheenColorMap!==void 0)$.sheenColorMap=Z(J.sheenColorMap);if(J.sheenRoughnessMap!==void 0)$.sheenRoughnessMap=Z(J.sheenRoughnessMap);return $}setTextures(J){return this.textures=J,this}createMaterialFromType(J){return i6.createMaterialFromType(J)}static createMaterialFromType(J){return new{ShadowMaterial:rZ,SpriteMaterial:V6,RawShaderMaterial:tZ,ShaderMaterial:i0,PointsMaterial:z6,MeshPhysicalMaterial:eZ,MeshStandardMaterial:l6,MeshPhongMaterial:J$,MeshToonMaterial:Q$,MeshNormalMaterial:Z$,MeshLambertMaterial:$$,MeshDepthMaterial:d6,MeshDistanceMaterial:u6,MeshBasicMaterial:M8,MeshMatcapMaterial:W$,LineDashedMaterial:H$,LineBasicMaterial:A0,Material:I0}[J]}}class e7{static decodeText(J){if(typeof TextDecoder!=="undefined")return(/*@__PURE__*/new TextDecoder()).decode(J);let Q="";for(let Z=0,$=J.length;Z<$;Z++)Q+=String.fromCharCode(J[Z]);try{return decodeURIComponent(escape(Q))}catch(Z){return Q}}static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}class k$ extends dJ{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}class M$ extends v0{constructor(J){super(J)}load(J,Q,Z,$){let W=this,H=new U8(W.manager);H.setPath(W.path),H.setRequestHeader(W.requestHeader),H.setWithCredentials(W.withCredentials),H.load(J,function(K){try{Q(W.parse(JSON.parse(K)))}catch(Y){if($)$(Y);W.manager.itemError(J)}},Z,$)}parse(J){let Q={},Z={};function $(N,q){if(Q[q]!==void 0)return Q[q];let F=N.interleavedBuffers[q],O=W(N,F.buffer),D=W7(F.type,O),M=new L7(D,F.stride);return M.uuid=F.uuid,Q[q]=M,M}function W(N,q){if(Z[q]!==void 0)return Z[q];let F=N.arrayBuffers[q],O=new Uint32Array(F).buffer;return Z[q]=O,O}let H=J.isInstancedBufferGeometry?new k$:new dJ,K=J.data.index;if(K!==void 0){let N=W7(K.type,K.array);H.setIndex(new K0(N,1))}let Y=J.data.attributes;for(let N in Y){let q=Y[N],R;if(q.isInterleavedBufferAttribute){let F=$(J.data,q.data);R=new n8(F,q.itemSize,q.offset,q.normalized)}else{let F=W7(q.type,q.array);R=new(q.isInstancedBufferAttribute?s8:K0)(F,q.itemSize,q.normalized)}if(q.name!==void 0)R.name=q.name;if(q.usage!==void 0)R.setUsage(q.usage);H.setAttribute(N,R)}let X=J.data.morphAttributes;if(X)for(let N in X){let q=X[N],R=[];for(let F=0,O=q.length;F<O;F++){let D=q[F],M;if(D.isInterleavedBufferAttribute){let k=$(J.data,D.data);M=new n8(k,D.itemSize,D.offset,D.normalized)}else{let k=W7(D.type,D.array);M=new K0(k,D.itemSize,D.normalized)}if(D.name!==void 0)M.name=D.name;R.push(M)}H.morphAttributes[N]=R}if(J.data.morphTargetsRelative)H.morphTargetsRelative=!0;let G=J.data.groups||J.data.drawcalls||J.data.offsets;if(G!==void 0)for(let N=0,q=G.length;N!==q;++N){let R=G[N];H.addGroup(R.start,R.count,R.materialIndex)}let E=J.data.boundingSphere;if(E!==void 0){let N=new A;if(E.center!==void 0)N.fromArray(E.center);H.boundingSphere=new z0(N,E.radius)}if(J.name)H.name=J.name;if(J.userData)H.userData=J.userData;return H}}class eH extends v0{constructor(J){super(J)}load(J,Q,Z,$){let W=this,H=this.path===""?e7.extractUrlBase(J):this.path;this.resourcePath=this.resourcePath||H;let K=new U8(this.manager);K.setPath(this.path),K.setRequestHeader(this.requestHeader),K.setWithCredentials(this.withCredentials),K.load(J,function(Y){let X=null;try{X=JSON.parse(Y)}catch(G){if($!==void 0)$(G);return}let U=X.metadata;if(U===void 0||U.type===void 0||U.type.toLowerCase()==="geometry"){if($!==void 0)$(new Error("THREE.ObjectLoader: Can't load "+J));return}W.parse(X,Q)},Z,$)}async loadAsync(J,Q){let Z=this,$=this.path===""?e7.extractUrlBase(J):this.path;this.resourcePath=this.resourcePath||$;let W=new U8(this.manager);W.setPath(this.path),W.setRequestHeader(this.requestHeader),W.setWithCredentials(this.withCredentials);let H=await W.loadAsync(J,Q),K=JSON.parse(H),Y=K.metadata;if(Y===void 0||Y.type===void 0||Y.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+J);return await Z.parseAsync(K)}parse(J,Q){let Z=this.parseAnimations(J.animations),$=this.parseShapes(J.shapes),W=this.parseGeometries(J.geometries,$),H=this.parseImages(J.images,function(){if(Q!==void 0)Q(X)}),K=this.parseTextures(J.textures,H),Y=this.parseMaterials(J.materials,K),X=this.parseObject(J.object,W,Y,K,Z),U=this.parseSkeletons(J.skeletons,X);if(this.bindSkeletons(X,U),this.bindLightTargets(X),Q!==void 0){let G=!1;for(let E in H)if(H[E].data instanceof HTMLImageElement){G=!0;break}if(G===!1)Q(X)}return X}async parseAsync(J){let Q=this.parseAnimations(J.animations),Z=this.parseShapes(J.shapes),$=this.parseGeometries(J.geometries,Z),W=await this.parseImagesAsync(J.images),H=this.parseTextures(J.textures,W),K=this.parseMaterials(J.materials,H),Y=this.parseObject(J.object,$,K,H,Q),X=this.parseSkeletons(J.skeletons,Y);return this.bindSkeletons(Y,X),this.bindLightTargets(Y),Y}parseShapes(J){let Q={};if(J!==void 0)for(let Z=0,$=J.length;Z<$;Z++){let W=new S8().fromJSON(J[Z]);Q[W.uuid]=W}return Q}parseSkeletons(J,Q){let Z={},$={};if(Q.traverse(function(W){if(W.isBone)$[W.uuid]=W}),J!==void 0)for(let W=0,H=J.length;W<H;W++){let K=new B6().fromJSON(J[W],$);Z[K.uuid]=K}return Z}parseGeometries(J,Q){let Z={};if(J!==void 0){let $=new M$;for(let W=0,H=J.length;W<H;W++){let K,Y=J[W];switch(Y.type){case"BufferGeometry":case"InstancedBufferGeometry":K=$.parse(Y);break;default:if(Y.type in pY)K=pY[Y.type].fromJSON(Y,Q)}if(K.uuid=Y.uuid,Y.name!==void 0)K.name=Y.name;if(Y.userData!==void 0)K.userData=Y.userData;Z[Y.uuid]=K}}return Z}parseMaterials(J,Q){let Z={},$={};if(J!==void 0){let W=new i6;W.setTextures(Q);for(let H=0,K=J.length;H<K;H++){let Y=J[H];if(Z[Y.uuid]===void 0)Z[Y.uuid]=W.parse(Y);$[Y.uuid]=Z[Y.uuid]}}return $}parseAnimations(J){let Q={};if(J!==void 0)for(let Z=0;Z<J.length;Z++){let $=J[Z],W=M9.parse($);Q[W.uuid]=W}return Q}parseImages(J,Q){let Z=this,$={},W;function H(Y){return Z.manager.itemStart(Y),W.load(Y,function(){Z.manager.itemEnd(Y)},void 0,function(){Z.manager.itemError(Y),Z.manager.itemEnd(Y)})}function K(Y){if(typeof Y==="string"){let X=Y,U=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(X)?X:Z.resourcePath+X;return H(U)}else if(Y.data)return{data:W7(Y.type,Y.data),width:Y.width,height:Y.height};else return null}if(J!==void 0&&J.length>0){let Y=new s6(Q);W=new V9(Y),W.setCrossOrigin(this.crossOrigin);for(let X=0,U=J.length;X<U;X++){let G=J[X],E=G.url;if(Array.isArray(E)){let N=[];for(let q=0,R=E.length;q<R;q++){let F=E[q],O=K(F);if(O!==null)if(O instanceof HTMLImageElement)N.push(O);else N.push(new J8(O.data,O.width,O.height))}$[G.uuid]=new P8(N)}else{let N=K(G.url);$[G.uuid]=new P8(N)}}}return $}async parseImagesAsync(J){let Q=this,Z={},$;async function W(H){if(typeof H==="string"){let K=H,Y=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(K)?K:Q.resourcePath+K;return await $.loadAsync(Y)}else if(H.data)return{data:W7(H.type,H.data),width:H.width,height:H.height};else return null}if(J!==void 0&&J.length>0){$=new V9(this.manager),$.setCrossOrigin(this.crossOrigin);for(let H=0,K=J.length;H<K;H++){let Y=J[H],X=Y.url;if(Array.isArray(X)){let U=[];for(let G=0,E=X.length;G<E;G++){let N=X[G],q=await W(N);if(q!==null)if(q instanceof HTMLImageElement)U.push(q);else U.push(new J8(q.data,q.width,q.height))}Z[Y.uuid]=new P8(U)}else{let U=await W(Y.url);Z[Y.uuid]=new P8(U)}}}return Z}parseTextures(J,Q){function Z(W,H){if(typeof W==="number")return W;return H[W]}let $={};if(J!==void 0)for(let W=0,H=J.length;W<H;W++){let K=J[W];if(K.image===void 0);if(Q[K.image]===void 0);let Y=Q[K.image],X=Y.data,U;if(Array.isArray(X)){if(U=new S9,X.length===6)U.needsUpdate=!0}else{if(X&&X.data)U=new J8;else U=new E0;if(X)U.needsUpdate=!0}if(U.source=Y,U.uuid=K.uuid,K.name!==void 0)U.name=K.name;if(K.mapping!==void 0)U.mapping=Z(K.mapping,sE);if(K.channel!==void 0)U.channel=K.channel;if(K.offset!==void 0)U.offset.fromArray(K.offset);if(K.repeat!==void 0)U.repeat.fromArray(K.repeat);if(K.center!==void 0)U.center.fromArray(K.center);if(K.rotation!==void 0)U.rotation=K.rotation;if(K.wrap!==void 0)U.wrapS=Z(K.wrap[0],uY),U.wrapT=Z(K.wrap[1],uY);if(K.format!==void 0)U.format=K.format;if(K.internalFormat!==void 0)U.internalFormat=K.internalFormat;if(K.type!==void 0)U.type=K.type;if(K.colorSpace!==void 0)U.colorSpace=K.colorSpace;if(K.minFilter!==void 0)U.minFilter=Z(K.minFilter,cY);if(K.magFilter!==void 0)U.magFilter=Z(K.magFilter,cY);if(K.anisotropy!==void 0)U.anisotropy=K.anisotropy;if(K.flipY!==void 0)U.flipY=K.flipY;if(K.generateMipmaps!==void 0)U.generateMipmaps=K.generateMipmaps;if(K.premultiplyAlpha!==void 0)U.premultiplyAlpha=K.premultiplyAlpha;if(K.unpackAlignment!==void 0)U.unpackAlignment=K.unpackAlignment;if(K.compareFunction!==void 0)U.compareFunction=K.compareFunction;if(K.userData!==void 0)U.userData=K.userData;$[K.uuid]=U}return $}parseObject(J,Q,Z,$,W){let H;function K(E){if(Q[E]===void 0);return Q[E]}function Y(E){if(E===void 0)return;if(Array.isArray(E)){let N=[];for(let q=0,R=E.length;q<R;q++){let F=E[q];if(Z[F]===void 0);N.push(Z[F])}return N}if(Z[E]===void 0);return Z[E]}function X(E){if($[E]===void 0);return $[E]}let U,G;switch(J.type){case"Scene":if(H=new vZ,J.background!==void 0)if(Number.isInteger(J.background))H.background=new qJ(J.background);else H.background=X(J.background);if(J.environment!==void 0)H.environment=X(J.environment);if(J.fog!==void 0){if(J.fog.type==="Fog")H.fog=new M6(J.fog.color,J.fog.near,J.fog.far);else if(J.fog.type==="FogExp2")H.fog=new k6(J.fog.color,J.fog.density);if(J.fog.name!=="")H.fog.name=J.fog.name}if(J.backgroundBlurriness!==void 0)H.backgroundBlurriness=J.backgroundBlurriness;if(J.backgroundIntensity!==void 0)H.backgroundIntensity=J.backgroundIntensity;if(J.backgroundRotation!==void 0)H.backgroundRotation.fromArray(J.backgroundRotation);if(J.environmentIntensity!==void 0)H.environmentIntensity=J.environmentIntensity;if(J.environmentRotation!==void 0)H.environmentRotation.fromArray(J.environmentRotation);break;case"PerspectiveCamera":if(H=new M0(J.fov,J.aspect,J.near,J.far),J.focus!==void 0)H.focus=J.focus;if(J.zoom!==void 0)H.zoom=J.zoom;if(J.filmGauge!==void 0)H.filmGauge=J.filmGauge;if(J.filmOffset!==void 0)H.filmOffset=J.filmOffset;if(J.view!==void 0)H.view=Object.assign({},J.view);break;case"OrthographicCamera":if(H=new w7(J.left,J.right,J.top,J.bottom,J.near,J.far),J.zoom!==void 0)H.zoom=J.zoom;if(J.view!==void 0)H.view=Object.assign({},J.view);break;case"AmbientLight":H=new D$(J.color,J.intensity);break;case"DirectionalLight":H=new q$(J.color,J.intensity),H.target=J.target||"";break;case"PointLight":H=new N$(J.color,J.intensity,J.distance,J.decay);break;case"RectAreaLight":H=new O$(J.color,J.intensity,J.width,J.height);break;case"SpotLight":H=new E$(J.color,J.intensity,J.distance,J.angle,J.penumbra,J.decay),H.target=J.target||"";break;case"HemisphereLight":H=new U$(J.color,J.groundColor,J.intensity);break;case"LightProbe":H=new F$().fromJSON(J);break;case"SkinnedMesh":if(U=K(J.geometry),G=Y(J.material),H=new hZ(U,G),J.bindMode!==void 0)H.bindMode=J.bindMode;if(J.bindMatrix!==void 0)H.bindMatrix.fromArray(J.bindMatrix);if(J.skeleton!==void 0)H.skeleton=J.skeleton;break;case"Mesh":U=K(J.geometry),G=Y(J.material),H=new O0(U,G);break;case"InstancedMesh":U=K(J.geometry),G=Y(J.material);let{count:E,instanceMatrix:N,instanceColor:q}=J;if(H=new xZ(U,G,E),H.instanceMatrix=new s8(new Float32Array(N.array),16),q!==void 0)H.instanceColor=new s8(new Float32Array(q.array),q.itemSize);break;case"BatchedMesh":if(U=K(J.geometry),G=Y(J.material),H=new gZ(J.maxInstanceCount,J.maxVertexCount,J.maxIndexCount,G),H.geometry=U,H.perObjectFrustumCulled=J.perObjectFrustumCulled,H.sortObjects=J.sortObjects,H._drawRanges=J.drawRanges,H._reservedRanges=J.reservedRanges,H._visibility=J.visibility,H._active=J.active,H._bounds=J.bounds.map((R)=>{let F=new w0;F.min.fromArray(R.boxMin),F.max.fromArray(R.boxMax);let O=new z0;return O.radius=R.sphereRadius,O.center.fromArray(R.sphereCenter),{boxInitialized:R.boxInitialized,box:F,sphereInitialized:R.sphereInitialized,sphere:O}}),H._maxInstanceCount=J.maxInstanceCount,H._maxVertexCount=J.maxVertexCount,H._maxIndexCount=J.maxIndexCount,H._geometryInitialized=J.geometryInitialized,H._geometryCount=J.geometryCount,H._matricesTexture=X(J.matricesTexture.uuid),J.colorsTexture!==void 0)H._colorsTexture=X(J.colorsTexture.uuid);break;case"LOD":H=new bZ;break;case"Line":H=new F8(K(J.geometry),Y(J.material));break;case"LineLoop":H=new pZ(K(J.geometry),Y(J.material));break;case"LineSegments":H=new $8(K(J.geometry),Y(J.material));break;case"PointCloud":case"Points":H=new mZ(K(J.geometry),Y(J.material));break;case"Sprite":H=new fZ(Y(J.material));break;case"Group":H=new c8;break;case"Bone":H=new L6;break;default:H=new J0}if(H.uuid=J.uuid,J.name!==void 0)H.name=J.name;if(J.matrix!==void 0){if(H.matrix.fromArray(J.matrix),J.matrixAutoUpdate!==void 0)H.matrixAutoUpdate=J.matrixAutoUpdate;if(H.matrixAutoUpdate)H.matrix.decompose(H.position,H.quaternion,H.scale)}else{if(J.position!==void 0)H.position.fromArray(J.position);if(J.rotation!==void 0)H.rotation.fromArray(J.rotation);if(J.quaternion!==void 0)H.quaternion.fromArray(J.quaternion);if(J.scale!==void 0)H.scale.fromArray(J.scale)}if(J.up!==void 0)H.up.fromArray(J.up);if(J.castShadow!==void 0)H.castShadow=J.castShadow;if(J.receiveShadow!==void 0)H.receiveShadow=J.receiveShadow;if(J.shadow){if(J.shadow.intensity!==void 0)H.shadow.intensity=J.shadow.intensity;if(J.shadow.bias!==void 0)H.shadow.bias=J.shadow.bias;if(J.shadow.normalBias!==void 0)H.shadow.normalBias=J.shadow.normalBias;if(J.shadow.radius!==void 0)H.shadow.radius=J.shadow.radius;if(J.shadow.mapSize!==void 0)H.shadow.mapSize.fromArray(J.shadow.mapSize);if(J.shadow.camera!==void 0)H.shadow.camera=this.parseObject(J.shadow.camera)}if(J.visible!==void 0)H.visible=J.visible;if(J.frustumCulled!==void 0)H.frustumCulled=J.frustumCulled;if(J.renderOrder!==void 0)H.renderOrder=J.renderOrder;if(J.userData!==void 0)H.userData=J.userData;if(J.layers!==void 0)H.layers.mask=J.layers;if(J.children!==void 0){let E=J.children;for(let N=0;N<E.length;N++)H.add(this.parseObject(E[N],Q,Z,$,W))}if(J.animations!==void 0){let E=J.animations;for(let N=0;N<E.length;N++){let q=E[N];H.animations.push(W[q])}}if(J.type==="LOD"){if(J.autoUpdate!==void 0)H.autoUpdate=J.autoUpdate;let E=J.levels;for(let N=0;N<E.length;N++){let q=E[N],R=H.getObjectByProperty("uuid",q.object);if(R!==void 0)H.addLevel(R,q.distance,q.hysteresis)}}return H}bindSkeletons(J,Q){if(Object.keys(Q).length===0)return;J.traverse(function(Z){if(Z.isSkinnedMesh===!0&&Z.skeleton!==void 0){let $=Q[Z.skeleton];if($===void 0);else Z.bind($,Z.bindMatrix)}})}bindLightTargets(J){J.traverse(function(Q){if(Q.isDirectionalLight||Q.isSpotLight){let Z=Q.target,$=J.getObjectByProperty("uuid",Z);if($!==void 0)Q.target=$;else Q.target=new J0}})}}var sE={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,CubeUVReflectionMapping:306},uY={RepeatWrapping:1000,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},cY={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008};class JK extends v0{constructor(J){super(J);this.isImageBitmapLoader=!0,this.options={premultiplyAlpha:"none"}}setOptions(J){return this.options=J,this}load(J,Q,Z,$){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=R8.get(J);if(H!==void 0){if(W.manager.itemStart(J),H.then){H.then((X)=>{if(Q)Q(X);W.manager.itemEnd(J)}).catch((X)=>{if($)$(X)});return}return setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0),H}let K={};K.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",K.headers=this.requestHeader;let Y=fetch(J,K).then(function(X){return X.blob()}).then(function(X){return createImageBitmap(X,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(X){if(R8.add(J,X),Q)Q(X);return W.manager.itemEnd(J),X}).catch(function(X){if($)$(X);R8.remove(J),W.manager.itemError(J),W.manager.itemEnd(J)});R8.add(J,Y),W.manager.itemStart(J)}}var fQ;class o6{static getContext(){if(fQ===void 0)fQ=new(window.AudioContext||window.webkitAudioContext);return fQ}static setContext(J){fQ=J}}class QK extends v0{constructor(J){super(J)}load(J,Q,Z,$){let W=this,H=new U8(this.manager);H.setResponseType("arraybuffer"),H.setPath(this.path),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load(J,function(Y){try{let X=Y.slice(0);o6.getContext().decodeAudioData(X,function(G){Q(G)}).catch(K)}catch(X){K(X)}},Z,$);function K(Y){if($)$(Y);W.manager.itemError(J)}}}var nY=/*@__PURE__*/new jJ,sY=/*@__PURE__*/new jJ,Y9=/*@__PURE__*/new jJ;class ZK{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=0.064,this.cameraL=new M0,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new M0,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(J){let Q=this._cache;if(Q.focus!==J.focus||Q.fov!==J.fov||Q.aspect!==J.aspect*this.aspect||Q.near!==J.near||Q.far!==J.far||Q.zoom!==J.zoom||Q.eyeSep!==this.eyeSep){Q.focus=J.focus,Q.fov=J.fov,Q.aspect=J.aspect*this.aspect,Q.near=J.near,Q.far=J.far,Q.zoom=J.zoom,Q.eyeSep=this.eyeSep,Y9.copy(J.projectionMatrix);let $=Q.eyeSep/2,W=$*Q.near/Q.focus,H=Q.near*Math.tan(q9*Q.fov*0.5)/Q.zoom,K,Y;sY.elements[12]=-$,nY.elements[12]=$,K=-H*Q.aspect+W,Y=H*Q.aspect+W,Y9.elements[0]=2*Q.near/(Y-K),Y9.elements[8]=(Y+K)/(Y-K),this.cameraL.projectionMatrix.copy(Y9),K=-H*Q.aspect-W,Y=H*Q.aspect-W,Y9.elements[0]=2*Q.near/(Y-K),Y9.elements[8]=(Y+K)/(Y-K),this.cameraR.projectionMatrix.copy(Y9)}this.cameraL.matrixWorld.copy(J.matrixWorld).multiply(sY),this.cameraR.matrixWorld.copy(J.matrixWorld).multiply(nY)}}class V$ extends M0{constructor(J=[]){super();this.isArrayCamera=!0,this.cameras=J,this.index=0}}class L${constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=iY(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=iY();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}function iY(){return performance.now()}var X9=/*@__PURE__*/new A,oY=/*@__PURE__*/new j0,iE=/*@__PURE__*/new A,U9=/*@__PURE__*/new A;class $K extends J0{constructor(){super();this.type="AudioListener",this.context=o6.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new L$}getInput(){return this.gain}removeFilter(){if(this.filter!==null)this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null;return this}getFilter(){return this.filter}setFilter(J){if(this.filter!==null)this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination);else this.gain.disconnect(this.context.destination);return this.filter=J,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(J){return this.gain.gain.setTargetAtTime(J,this.context.currentTime,0.01),this}updateMatrixWorld(J){super.updateMatrixWorld(J);let Q=this.context.listener,Z=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(X9,oY,iE),U9.set(0,0,-1).applyQuaternion(oY),Q.positionX){let $=this.context.currentTime+this.timeDelta;Q.positionX.linearRampToValueAtTime(X9.x,$),Q.positionY.linearRampToValueAtTime(X9.y,$),Q.positionZ.linearRampToValueAtTime(X9.z,$),Q.forwardX.linearRampToValueAtTime(U9.x,$),Q.forwardY.linearRampToValueAtTime(U9.y,$),Q.forwardZ.linearRampToValueAtTime(U9.z,$),Q.upX.linearRampToValueAtTime(Z.x,$),Q.upY.linearRampToValueAtTime(Z.y,$),Q.upZ.linearRampToValueAtTime(Z.z,$)}else Q.setPosition(X9.x,X9.y,X9.z),Q.setOrientation(U9.x,U9.y,U9.z,Z.x,Z.y,Z.z)}}class B$ extends J0{constructor(J){super();this.type="Audio",this.listener=J,this.context=J.context,this.gain=this.context.createGain(),this.gain.connect(J.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(J){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=J,this.connect(),this}setMediaElementSource(J){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(J),this.connect(),this}setMediaStreamSource(J){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(J),this.connect(),this}setBuffer(J){if(this.buffer=J,this.sourceType="buffer",this.autoplay)this.play();return this}play(J=0){if(this.isPlaying===!0)return;if(this.hasPlaybackControl===!1)return;this._startedAt=this.context.currentTime+J;let Q=this.context.createBufferSource();return Q.buffer=this.buffer,Q.loop=this.loop,Q.loopStart=this.loopStart,Q.loopEnd=this.loopEnd,Q.onended=this.onEnded.bind(this),Q.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=Q,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1)return;if(this.isPlaying===!0){if(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0)this._progress=this._progress%(this.duration||this.buffer.duration);this.source.stop(),this.source.onended=null,this.isPlaying=!1}return this}stop(J=0){if(this.hasPlaybackControl===!1)return;if(this._progress=0,this.source!==null)this.source.stop(this.context.currentTime+J),this.source.onended=null;return this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let J=1,Q=this.filters.length;J<Q;J++)this.filters[J-1].connect(this.filters[J]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected===!1)return;if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let J=1,Q=this.filters.length;J<Q;J++)this.filters[J-1].disconnect(this.filters[J]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(J){if(!J)J=[];if(this._connected===!0)this.disconnect(),this.filters=J.slice(),this.connect();else this.filters=J.slice();return this}setDetune(J){if(this.detune=J,this.isPlaying===!0&&this.source.detune!==void 0)this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,0.01);return this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(J){return this.setFilters(J?[J]:[])}setPlaybackRate(J){if(this.hasPlaybackControl===!1)return;if(this.playbackRate=J,this.isPlaying===!0)this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,0.01);return this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){if(this.hasPlaybackControl===!1)return!1;return this.loop}setLoop(J){if(this.hasPlaybackControl===!1)return;if(this.loop=J,this.isPlaying===!0)this.source.loop=this.loop;return this}setLoopStart(J){return this.loopStart=J,this}setLoopEnd(J){return this.loopEnd=J,this}getVolume(){return this.gain.gain.value}setVolume(J){return this.gain.gain.setTargetAtTime(J,this.context.currentTime,0.01),this}copy(J,Q){if(super.copy(J,Q),J.sourceType!=="buffer")return this;return this.autoplay=J.autoplay,this.buffer=J.buffer,this.detune=J.detune,this.loop=J.loop,this.loopStart=J.loopStart,this.loopEnd=J.loopEnd,this.offset=J.offset,this.duration=J.duration,this.playbackRate=J.playbackRate,this.hasPlaybackControl=J.hasPlaybackControl,this.sourceType=J.sourceType,this.filters=J.filters.slice(),this}clone(J){return new this.constructor(this.listener).copy(this,J)}}var G9=/*@__PURE__*/new A,aY=/*@__PURE__*/new j0,oE=/*@__PURE__*/new A,E9=/*@__PURE__*/new A;class WK extends B${constructor(J){super(J);this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(J){return this.panner.refDistance=J,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(J){return this.panner.rolloffFactor=J,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(J){return this.panner.distanceModel=J,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(J){return this.panner.maxDistance=J,this}setDirectionalCone(J,Q,Z){return this.panner.coneInnerAngle=J,this.panner.coneOuterAngle=Q,this.panner.coneOuterGain=Z,this}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(G9,aY,oE),E9.set(0,0,1).applyQuaternion(aY);let Q=this.panner;if(Q.positionX){let Z=this.context.currentTime+this.listener.timeDelta;Q.positionX.linearRampToValueAtTime(G9.x,Z),Q.positionY.linearRampToValueAtTime(G9.y,Z),Q.positionZ.linearRampToValueAtTime(G9.z,Z),Q.orientationX.linearRampToValueAtTime(E9.x,Z),Q.orientationY.linearRampToValueAtTime(E9.y,Z),Q.orientationZ.linearRampToValueAtTime(E9.z,Z)}else Q.setPosition(G9.x,G9.y,G9.z),Q.setOrientation(E9.x,E9.y,E9.z)}}class HK{constructor(J,Q=2048){this.analyser=J.context.createAnalyser(),this.analyser.fftSize=Q,this.data=new Uint8Array(this.analyser.frequencyBinCount),J.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let J=0,Q=this.getFrequencyData();for(let Z=0;Z<Q.length;Z++)J+=Q[Z];return J/Q.length}}class z${constructor(J,Q,Z){this.binding=J,this.valueSize=Z;let $,W,H;switch(Q){case"quaternion":$=this._slerp,W=this._slerpAdditive,H=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(Z*6),this._workIndex=5;break;case"string":case"bool":$=this._select,W=this._select,H=this._setAdditiveIdentityOther,this.buffer=new Array(Z*5);break;default:$=this._lerp,W=this._lerpAdditive,H=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(Z*5)}this._mixBufferRegion=$,this._mixBufferRegionAdditive=W,this._setIdentity=H,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let Z=this.buffer,$=this.valueSize,W=J*$+$,H=this.cumulativeWeight;if(H===0){for(let K=0;K!==$;++K)Z[W+K]=Z[K];H=Q}else{H+=Q;let K=Q/H;this._mixBufferRegion(Z,W,0,K,$)}this.cumulativeWeight=H}accumulateAdditive(J){let Q=this.buffer,Z=this.valueSize,$=Z*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,$,0,J,Z),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,Z=this.buffer,$=J*Q+Q,W=this.cumulativeWeight,H=this.cumulativeWeightAdditive,K=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,W<1){let Y=Q*this._origIndex;this._mixBufferRegion(Z,$,Y,1-W,Q)}if(H>0)this._mixBufferRegionAdditive(Z,$,this._addIndex*Q,1,Q);for(let Y=Q,X=Q+Q;Y!==X;++Y)if(Z[Y]!==Z[Y+Q]){K.setValue(Z,$);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,Z=this.valueSize,$=Z*this._origIndex;J.getValue(Q,$);for(let W=Z,H=$;W!==H;++W)Q[W]=Q[$+W%Z];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let Z=J;Z<Q;Z++)this.buffer[Z]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let Z=0;Z<this.valueSize;Z++)this.buffer[Q+Z]=this.buffer[J+Z]}_select(J,Q,Z,$,W){if($>=0.5)for(let H=0;H!==W;++H)J[Q+H]=J[Z+H]}_slerp(J,Q,Z,$){j0.slerpFlat(J,Q,J,Q,J,Z,$)}_slerpAdditive(J,Q,Z,$,W){let H=this._workIndex*W;j0.multiplyQuaternionsFlat(J,H,J,Q,J,Z),j0.slerpFlat(J,Q,J,Q,J,H,$)}_lerp(J,Q,Z,$,W){let H=1-$;for(let K=0;K!==W;++K){let Y=Q+K;J[Y]=J[Y]*H+J[Z+K]*$}}_lerpAdditive(J,Q,Z,$,W){for(let H=0;H!==W;++H){let K=Q+H;J[K]=J[K]+J[Z+H]*$}}}var KK="\\[\\]\\.:\\/",aE=new RegExp("["+KK+"]","g"),YK="[^"+KK+"]",rE="[^"+KK.replace("\\.","")+"]",tE=/*@__PURE__*/ /((?:WC+[\/:])*)/.source.replace("WC",YK),eE=/*@__PURE__*/ /(WCOD+)?/.source.replace("WCOD",rE),JN=/*@__PURE__*/ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",YK),QN=/*@__PURE__*/ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC",YK),ZN=new RegExp("^"+tE+eE+JN+QN+"$"),$N=["material","materials","bones","map"];class AU{constructor(J,Q,Z){let $=Z||tJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,$)}getValue(J,Q){this.bind();let Z=this._targetGroup.nCachedObjects_,$=this._bindings[Z];if($!==void 0)$.getValue(J,Q)}setValue(J,Q){let Z=this._bindings;for(let $=this._targetGroup.nCachedObjects_,W=Z.length;$!==W;++$)Z[$].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].unbind()}}class tJ{constructor(J,Q,Z){this.path=Q,this.parsedPath=Z||tJ.parseTrackName(Q),this.node=tJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,Z){if(!(J&&J.isAnimationObjectGroup))return new tJ(J,Q,Z);else return new tJ.Composite(J,Q,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(aE,"")}static parseTrackName(J){let Q=ZN.exec(J);if(Q===null)throw new Error("PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},$=Z.nodeName&&Z.nodeName.lastIndexOf(".");if($!==void 0&&$!==-1){let W=Z.nodeName.substring($+1);if($N.indexOf(W)!==-1)Z.nodeName=Z.nodeName.substring(0,$),Z.objectName=W}if(Z.propertyName===null||Z.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(Q);if(Z!==void 0)return Z}if(J.children){let Z=function(W){for(let H=0;H<W.length;H++){let K=W[H];if(K.name===Q||K.uuid===Q)return K;let Y=Z(K.children);if(Y)return Y}return null},$=Z(J.children);if($)return $}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)J[Q++]=Z[$]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,Z=Q.objectName,$=Q.propertyName,W=Q.propertyIndex;if(!J)J=tJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J)return;if(Z){let X=Q.objectIndex;switch(Z){case"materials":if(!J.material)return;if(!J.material.materials)return;J=J.material.materials;break;case"bones":if(!J.skeleton)return;J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material)return;if(!J.material.map)return;J=J.material.map;break;default:if(J[Z]===void 0)return;J=J[Z]}if(X!==void 0){if(J[X]===void 0)return;J=J[X]}}let H=J[$];if(H===void 0){let X=Q.nodeName;return}let K=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)K=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)K=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if($==="morphTargetInfluences"){if(!J.geometry)return;if(!J.geometry.morphAttributes)return;if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=W}else if(H.fromArray!==void 0&&H.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))Y=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=$;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][K]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tJ.Composite=AU;tJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tJ.prototype.GetterByBindingType=[tJ.prototype._getValue_direct,tJ.prototype._getValue_array,tJ.prototype._getValue_arrayElement,tJ.prototype._getValue_toArray];tJ.prototype.SetterByBindingTypeAndVersioning=[[tJ.prototype._setValue_direct,tJ.prototype._setValue_direct_setNeedsUpdate,tJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tJ.prototype._setValue_array,tJ.prototype._setValue_array_setNeedsUpdate,tJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tJ.prototype._setValue_arrayElement,tJ.prototype._setValue_arrayElement_setNeedsUpdate,tJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tJ.prototype._setValue_fromArray,tJ.prototype._setValue_fromArray_setNeedsUpdate,tJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class XK{constructor(){this.isAnimationObjectGroup=!0,this.uuid=s0(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let J={};this._indicesByUUID=J;for(let Z=0,$=arguments.length;Z!==$;++Z)J[arguments[Z].uuid]=Z;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let Q=this;this.stats={objects:{get total(){return Q._objects.length},get inUse(){return this.total-Q.nCachedObjects_}},get bindingsPerObject(){return Q._bindings.length}}}add(){let J=this._objects,Q=this._indicesByUUID,Z=this._paths,$=this._parsedPaths,W=this._bindings,H=W.length,K=void 0,Y=J.length,X=this.nCachedObjects_;for(let U=0,G=arguments.length;U!==G;++U){let E=arguments[U],N=E.uuid,q=Q[N];if(q===void 0){q=Y++,Q[N]=q,J.push(E);for(let R=0,F=H;R!==F;++R)W[R].push(new tJ(E,Z[R],$[R]))}else if(q<X){K=J[q];let R=--X,F=J[R];Q[F.uuid]=q,J[q]=F,Q[N]=R,J[R]=E;for(let O=0,D=H;O!==D;++O){let M=W[O],k=M[R],I=M[q];if(M[q]=k,I===void 0)I=new tJ(E,Z[O],$[O]);M[R]=I}}else if(J[q]!==K);}this.nCachedObjects_=X}remove(){let J=this._objects,Q=this._indicesByUUID,Z=this._bindings,$=Z.length,W=this.nCachedObjects_;for(let H=0,K=arguments.length;H!==K;++H){let Y=arguments[H],X=Y.uuid,U=Q[X];if(U!==void 0&&U>=W){let G=W++,E=J[G];Q[E.uuid]=U,J[U]=E,Q[X]=G,J[G]=Y;for(let N=0,q=$;N!==q;++N){let R=Z[N],F=R[G],O=R[U];R[U]=F,R[G]=O}}}this.nCachedObjects_=W}uncache(){let J=this._objects,Q=this._indicesByUUID,Z=this._bindings,$=Z.length,W=this.nCachedObjects_,H=J.length;for(let K=0,Y=arguments.length;K!==Y;++K){let X=arguments[K],U=X.uuid,G=Q[U];if(G!==void 0)if(delete Q[U],G<W){let E=--W,N=J[E],q=--H,R=J[q];Q[N.uuid]=G,J[G]=N,Q[R.uuid]=E,J[E]=R,J.pop();for(let F=0,O=$;F!==O;++F){let D=Z[F],M=D[E],k=D[q];D[G]=M,D[E]=k,D.pop()}}else{let E=--H,N=J[E];if(E>0)Q[N.uuid]=G;J[G]=N,J.pop();for(let q=0,R=$;q!==R;++q){let F=Z[q];F[G]=F[E],F.pop()}}}this.nCachedObjects_=W}subscribe_(J,Q){let Z=this._bindingsIndicesByPath,$=Z[J],W=this._bindings;if($!==void 0)return W[$];let H=this._paths,K=this._parsedPaths,Y=this._objects,X=Y.length,U=this.nCachedObjects_,G=new Array(X);$=W.length,Z[J]=$,H.push(J),K.push(Q),W.push(G);for(let E=U,N=Y.length;E!==N;++E){let q=Y[E];G[E]=new tJ(q,J,Q)}return G}unsubscribe_(J){let Q=this._bindingsIndicesByPath,Z=Q[J];if(Z!==void 0){let $=this._paths,W=this._parsedPaths,H=this._bindings,K=H.length-1,Y=H[K],X=J[K];Q[X]=Z,H[Z]=Y,H.pop(),W[Z]=W[K],W.pop(),$[Z]=$[K],$.pop()}}}class I${constructor(J,Q,Z=null,$=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=Z,this.blendMode=$;let W=Q.tracks,H=W.length,K=new Array(H),Y={endingStart:2400,endingEnd:2400};for(let X=0;X!==H;++X){let U=W[X].createInterpolant(null);K[X]=U,U.settings=Y}this._interpolantSettings=Y,this._interpolants=K,this._propertyBindings=new Array(H),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,Z){if(J.fadeOut(Q),this.fadeIn(Q),Z){let $=this._clip.duration,W=J._clip.duration,H=W/$,K=$/W;J.warp(1,H,Q),this.warp(K,1,Q)}return this}crossFadeTo(J,Q,Z){return J.crossFadeFrom(this,Q,Z)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,Z){let $=this._mixer,W=$.time,H=this.timeScale,K=this._timeScaleInterpolant;if(K===null)K=$._lendControlInterpolant(),this._timeScaleInterpolant=K;let{parameterPositions:Y,sampleValues:X}=K;return Y[0]=W,Y[1]=W+Z,X[0]=J/H,X[1]=Q/H,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,Z,$){if(!this.enabled){this._updateWeight(J);return}let W=this._startTime;if(W!==null){let Y=(J-W)*Z;if(Y<0||Z===0)Q=0;else this._startTime=null,Q=Z*Y}Q*=this._updateTimeScale(J);let H=this._updateTime(Q),K=this._updateWeight(J);if(K>0){let Y=this._interpolants,X=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,G=Y.length;U!==G;++U)Y[U].evaluate(H),X[U].accumulateAdditive(K);break;case 2500:default:for(let U=0,G=Y.length;U!==G;++U)Y[U].evaluate(H),X[U].accumulate($,K)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let Z=this._weightInterpolant;if(Z!==null){let $=Z.evaluate(J)[0];if(Q*=$,J>Z.parameterPositions[1]){if(this.stopFading(),$===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let Z=this._timeScaleInterpolant;if(Z!==null){let $=Z.evaluate(J)[0];if(Q*=$,J>Z.parameterPositions[1])if(this.stopWarping(),Q===0)this.paused=!0;else this.timeScale=Q}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,Z=this.loop,$=this.time+J,W=this._loopCount,H=Z===2202;if(J===0){if(W===-1)return $;return H&&(W&1)===1?Q-$:$}if(Z===2200){if(W===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if($>=Q)$=Q;else if($<0)$=0;else{this.time=$;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=$,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(W===-1)if(J>=0)W=0,this._setEndings(!0,this.repetitions===0,H);else this._setEndings(this.repetitions===0,!0,H);if($>=Q||$<0){let K=Math.floor($/Q);$-=Q*K,W+=Math.abs(K);let Y=this.repetitions-W;if(Y<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;$=J>0?Q:0,this.time=$,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(Y===1){let X=J<0;this._setEndings(X,!X,H)}else this._setEndings(!1,!1,H);this._loopCount=W,this.time=$,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:K})}}else this.time=$;if(H&&(W&1)===1)return Q-$}return $}_setEndings(J,Q,Z){let $=this._interpolantSettings;if(Z)$.endingStart=2401,$.endingEnd=2401;else{if(J)$.endingStart=this.zeroSlopeAtStart?2401:2400;else $.endingStart=2402;if(Q)$.endingEnd=this.zeroSlopeAtEnd?2401:2400;else $.endingEnd=2402}}_scheduleFading(J,Q,Z){let $=this._mixer,W=$.time,H=this._weightInterpolant;if(H===null)H=$._lendControlInterpolant(),this._weightInterpolant=H;let{parameterPositions:K,sampleValues:Y}=H;return K[0]=W,Y[0]=Q,K[1]=W+J,Y[1]=Z,this}}var WN=new Float32Array(1);class UK extends Q8{constructor(J){super();this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(J,Q){let Z=J._localRoot||this._root,$=J._clip.tracks,W=$.length,H=J._propertyBindings,K=J._interpolants,Y=Z.uuid,X=this._bindingsByRootAndName,U=X[Y];if(U===void 0)U={},X[Y]=U;for(let G=0;G!==W;++G){let E=$[G],N=E.name,q=U[N];if(q!==void 0)++q.referenceCount,H[G]=q;else{if(q=H[G],q!==void 0){if(q._cacheIndex===null)++q.referenceCount,this._addInactiveBinding(q,Y,N);continue}let R=Q&&Q._propertyBindings[G].binding.parsedPath;q=new z$(tJ.create(Z,N,R),E.ValueTypeName,E.getValueSize()),++q.referenceCount,this._addInactiveBinding(q,Y,N),H[G]=q}K[G].resultBuffer=q.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let Z=(J._localRoot||this._root).uuid,$=J._clip.uuid,W=this._actionsByClip[$];this._bindAction(J,W&&W.knownActions[0]),this._addInactiveAction(J,$,Z)}let Q=J._propertyBindings;for(let Z=0,$=Q.length;Z!==$;++Z){let W=Q[Z];if(W.useCount++===0)this._lendBinding(W),W.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let Z=0,$=Q.length;Z!==$;++Z){let W=Q[Z];if(--W.useCount===0)W.restoreOriginalState(),this._takeBackBinding(W)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,Z){let $=this._actions,W=this._actionsByClip,H=W[Q];if(H===void 0)H={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,W[Q]=H;else{let K=H.knownActions;J._byClipCacheIndex=K.length,K.push(J)}J._cacheIndex=$.length,$.push(J),H.actionByRoot[Z]=J}_removeInactiveAction(J){let Q=this._actions,Z=Q[Q.length-1],$=J._cacheIndex;Z._cacheIndex=$,Q[$]=Z,Q.pop(),J._cacheIndex=null;let W=J._clip.uuid,H=this._actionsByClip,K=H[W],Y=K.knownActions,X=Y[Y.length-1],U=J._byClipCacheIndex;X._byClipCacheIndex=U,Y[U]=X,Y.pop(),J._byClipCacheIndex=null;let G=K.actionByRoot,E=(J._localRoot||this._root).uuid;if(delete G[E],Y.length===0)delete H[W];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let Z=0,$=Q.length;Z!==$;++Z){let W=Q[Z];if(--W.referenceCount===0)this._removeInactiveBinding(W)}}_lendAction(J){let Q=this._actions,Z=J._cacheIndex,$=this._nActiveActions++,W=Q[$];J._cacheIndex=$,Q[$]=J,W._cacheIndex=Z,Q[Z]=W}_takeBackAction(J){let Q=this._actions,Z=J._cacheIndex,$=--this._nActiveActions,W=Q[$];J._cacheIndex=$,Q[$]=J,W._cacheIndex=Z,Q[Z]=W}_addInactiveBinding(J,Q,Z){let $=this._bindingsByRootAndName,W=this._bindings,H=$[Q];if(H===void 0)H={},$[Q]=H;H[Z]=J,J._cacheIndex=W.length,W.push(J)}_removeInactiveBinding(J){let Q=this._bindings,Z=J.binding,$=Z.rootNode.uuid,W=Z.path,H=this._bindingsByRootAndName,K=H[$],Y=Q[Q.length-1],X=J._cacheIndex;if(Y._cacheIndex=X,Q[X]=Y,Q.pop(),delete K[W],Object.keys(K).length===0)delete H[$]}_lendBinding(J){let Q=this._bindings,Z=J._cacheIndex,$=this._nActiveBindings++,W=Q[$];J._cacheIndex=$,Q[$]=J,W._cacheIndex=Z,Q[Z]=W}_takeBackBinding(J){let Q=this._bindings,Z=J._cacheIndex,$=--this._nActiveBindings,W=Q[$];J._cacheIndex=$,Q[$]=J,W._cacheIndex=Z,Q[Z]=W}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,Z=J[Q];if(Z===void 0)Z=new c6(new Float32Array(2),new Float32Array(2),1,WN),Z.__cacheIndex=Q,J[Q]=Z;return Z}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,Z=J.__cacheIndex,$=--this._nActiveControlInterpolants,W=Q[$];J.__cacheIndex=$,Q[$]=J,W.__cacheIndex=Z,Q[Z]=W}clipAction(J,Q,Z){let $=Q||this._root,W=$.uuid,H=typeof J==="string"?M9.findByName($,J):J,K=H!==null?H.uuid:J,Y=this._actionsByClip[K],X=null;if(Z===void 0)if(H!==null)Z=H.blendMode;else Z=2500;if(Y!==void 0){let G=Y.actionByRoot[W];if(G!==void 0&&G.blendMode===Z)return G;if(X=Y.knownActions[0],H===null)H=X._clip}if(H===null)return null;let U=new I$(this,H,Q,Z);return this._bindAction(U,X),this._addInactiveAction(U,K,W),U}existingAction(J,Q){let Z=Q||this._root,$=Z.uuid,W=typeof J==="string"?M9.findByName(Z,J):J,H=W?W.uuid:J,K=this._actionsByClip[H];if(K!==void 0)return K.actionByRoot[$]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let Z=Q-1;Z>=0;--Z)J[Z].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,Z=this._nActiveActions,$=this.time+=J,W=Math.sign(J),H=this._accuIndex^=1;for(let X=0;X!==Z;++X)Q[X]._update($,J,W,H);let K=this._bindings,Y=this._nActiveBindings;for(let X=0;X!==Y;++X)K[X].apply(H);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,Z=J.uuid,$=this._actionsByClip,W=$[Z];if(W!==void 0){let H=W.knownActions;for(let K=0,Y=H.length;K!==Y;++K){let X=H[K];this._deactivateAction(X);let U=X._cacheIndex,G=Q[Q.length-1];X._cacheIndex=null,X._byClipCacheIndex=null,G._cacheIndex=U,Q[U]=G,Q.pop(),this._removeInactiveBindingsForAction(X)}delete $[Z]}}uncacheRoot(J){let Q=J.uuid,Z=this._actionsByClip;for(let H in Z){let K=Z[H].actionByRoot,Y=K[Q];if(Y!==void 0)this._deactivateAction(Y),this._removeInactiveAction(Y)}let $=this._bindingsByRootAndName,W=$[Q];if(W!==void 0)for(let H in W){let K=W[H];K.restoreOriginalState(),this._removeInactiveBinding(K)}}uncacheAction(J,Q){let Z=this.existingAction(J,Q);if(Z!==null)this._deactivateAction(Z),this._removeInactiveAction(Z)}}class GK extends R7{constructor(J=1,Q=1,Z=1,$={}){super(J,Q,$);this.isRenderTarget3D=!0,this.depth=Z,this.texture=new F7(null,J,Q,Z),this.texture.isRenderTargetTexture=!0}}class EK extends R7{constructor(J=1,Q=1,Z=1,$={}){super(J,Q,$);this.isRenderTargetArray=!0,this.depth=Z,this.texture=new P9(null,J,Q,Z),this.texture.isRenderTargetTexture=!0}}class _${constructor(J){this.value=J}clone(){return new _$(this.value.clone===void 0?this.value:this.value.clone())}}var HN=0;class NK extends Q8{constructor(){super();this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:HN++}),this.name="",this.usage=35044,this.uniforms=[]}add(J){return this.uniforms.push(J),this}remove(J){let Q=this.uniforms.indexOf(J);if(Q!==-1)this.uniforms.splice(Q,1);return this}setName(J){return this.name=J,this}setUsage(J){return this.usage=J,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(J){this.name=J.name,this.usage=J.usage;let Q=J.uniforms;this.uniforms.length=0;for(let Z=0,$=Q.length;Z<$;Z++){let W=Array.isArray(Q[Z])?Q[Z]:[Q[Z]];for(let H=0;H<W.length;H++)this.uniforms.push(W[H].clone())}return this}clone(){return new this.constructor().copy(this)}}class qK extends L7{constructor(J,Q,Z=1){super(J,Q);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}clone(J){let Q=super.clone(J);return Q.meshPerAttribute=this.meshPerAttribute,Q}toJSON(J){let Q=super.toJSON(J);return Q.isInstancedInterleavedBuffer=!0,Q.meshPerAttribute=this.meshPerAttribute,Q}}class DK{constructor(J,Q,Z,$,W){this.isGLBufferAttribute=!0,this.name="",this.buffer=J,this.type=Q,this.itemSize=Z,this.elementSize=$,this.count=W,this.version=0}set needsUpdate(J){if(J===!0)this.version++}setBuffer(J){return this.buffer=J,this}setType(J,Q){return this.type=J,this.elementSize=Q,this}setItemSize(J){return this.itemSize=J,this}setCount(J){return this.count=J,this}}var rY=/*@__PURE__*/new jJ;class OK{constructor(J,Q,Z=0,$=1/0){this.ray=new r8(J,Q),this.near=Z,this.far=$,this.camera=null,this.layers=new k7,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(J,Q){this.ray.set(J,Q)}setFromCamera(J,Q){if(Q.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(Q.matrixWorld),this.ray.direction.set(J.x,J.y,0.5).unproject(Q).sub(this.ray.origin).normalize(),this.camera=Q;else if(Q.isOrthographicCamera)this.ray.origin.set(J.x,J.y,(Q.near+Q.far)/(Q.near-Q.far)).unproject(Q),this.ray.direction.set(0,0,-1).transformDirection(Q.matrixWorld),this.camera=Q}setFromXRController(J){return rY.identity().extractRotation(J.matrixWorld),this.ray.origin.setFromMatrixPosition(J.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rY),this}intersectObject(J,Q=!0,Z=[]){return VW(J,this,Z,Q),Z.sort(tY),Z}intersectObjects(J,Q=!0,Z=[]){for(let $=0,W=J.length;$<W;$++)VW(J[$],this,Z,Q);return Z.sort(tY),Z}}function tY(J,Q){return J.distance-Q.distance}function VW(J,Q,Z,$){let W=!0;if(J.layers.test(Q.layers)){if(J.raycast(Q,Z)===!1)W=!1}if(W===!0&&$===!0){let H=J.children;for(let K=0,Y=H.length;K<Y;K++)VW(H[K],Q,Z,!0)}}class RK{constructor(J=1,Q=0,Z=0){return this.radius=J,this.phi=Q,this.theta=Z,this}set(J,Q,Z){return this.radius=J,this.phi=Q,this.theta=Z,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=gJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,Z){if(this.radius=Math.sqrt(J*J+Q*Q+Z*Z),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,Z),this.phi=Math.acos(gJ(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class FK{constructor(J=1,Q=0,Z=0){return this.radius=J,this.theta=Q,this.y=Z,this}set(J,Q,Z){return this.radius=J,this.theta=Q,this.y=Z,this}copy(J){return this.radius=J.radius,this.theta=J.theta,this.y=J.y,this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,Z){return this.radius=Math.sqrt(J*J+Z*Z),this.theta=Math.atan2(J,Z),this.y=Q,this}clone(){return new this.constructor().copy(this)}}class C${constructor(J,Q,Z,$){if(C$.prototype.isMatrix2=!0,this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,Z,$)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let Z=0;Z<4;Z++)this.elements[Z]=J[Z+Q];return this}set(J,Q,Z,$){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=Z,W[3]=$,this}}var eY=/*@__PURE__*/new i;class kK{constructor(J=new i(1/0,1/0),Q=new i(-1/0,-1/0)){this.isBox2=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=eY.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(J){return this.isEmpty()?J.set(0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,eY).distanceTo(J)}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}}var JX=/*@__PURE__*/new A,bQ=/*@__PURE__*/new A;class MK{constructor(J=new A,Q=new A){this.start=J,this.end=Q}set(J,Q){return this.start.copy(J),this.end.copy(Q),this}copy(J){return this.start.copy(J.start),this.end.copy(J.end),this}getCenter(J){return J.addVectors(this.start,this.end).multiplyScalar(0.5)}delta(J){return J.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(J,Q){return this.delta(Q).multiplyScalar(J).add(this.start)}closestPointToPointParameter(J,Q){JX.subVectors(J,this.start),bQ.subVectors(this.end,this.start);let Z=bQ.dot(bQ),W=bQ.dot(JX)/Z;if(Q)W=gJ(W,0,1);return W}closestPointToPoint(J,Q,Z){let $=this.closestPointToPointParameter(J,Q);return this.delta(Z).multiplyScalar($).add(this.start)}applyMatrix4(J){return this.start.applyMatrix4(J),this.end.applyMatrix4(J),this}equals(J){return J.start.equals(this.start)&&J.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}var QX=/*@__PURE__*/new A;class VK extends J0{constructor(J,Q){super();this.light=J,this.matrixAutoUpdate=!1,this.color=Q,this.type="SpotLightHelper";let Z=new dJ,$=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let H=0,K=1,Y=32;H<Y;H++,K++){let X=H/Y*Math.PI*2,U=K/Y*Math.PI*2;$.push(Math.cos(X),Math.sin(X),1,Math.cos(U),Math.sin(U),1)}Z.setAttribute("position",new BJ($,3));let W=new A0({fog:!1,toneMapped:!1});this.cone=new $8(Z,W),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){if(this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent)this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld);else this.matrix.copy(this.light.matrixWorld);this.matrixWorld.copy(this.light.matrixWorld);let J=this.light.distance?this.light.distance:1000,Q=J*Math.tan(this.light.angle);if(this.cone.scale.set(Q,Q,J),QX.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(QX),this.color!==void 0)this.cone.material.color.set(this.color);else this.cone.material.color.copy(this.light.color)}}var u8=/*@__PURE__*/new A,hQ=/*@__PURE__*/new jJ,DW=/*@__PURE__*/new jJ;class LK extends $8{constructor(J){let Q=PU(J),Z=new dJ,$=[],W=[],H=new qJ(0,0,1),K=new qJ(0,1,0);for(let X=0;X<Q.length;X++){let U=Q[X];if(U.parent&&U.parent.isBone)$.push(0,0,0),$.push(0,0,0),W.push(H.r,H.g,H.b),W.push(K.r,K.g,K.b)}Z.setAttribute("position",new BJ($,3)),Z.setAttribute("color",new BJ(W,3));let Y=new A0({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(Z,Y);this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=J,this.bones=Q,this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(J){let Q=this.bones,Z=this.geometry,$=Z.getAttribute("position");DW.copy(this.root.matrixWorld).invert();for(let W=0,H=0;W<Q.length;W++){let K=Q[W];if(K.parent&&K.parent.isBone)hQ.multiplyMatrices(DW,K.matrixWorld),u8.setFromMatrixPosition(hQ),$.setXYZ(H,u8.x,u8.y,u8.z),hQ.multiplyMatrices(DW,K.parent.matrixWorld),u8.setFromMatrixPosition(hQ),$.setXYZ(H+1,u8.x,u8.y,u8.z),H+=2}Z.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(J)}dispose(){this.geometry.dispose(),this.material.dispose()}}function PU(J){let Q=[];if(J.isBone===!0)Q.push(J);for(let Z=0;Z<J.children.length;Z++)Q.push.apply(Q,PU(J.children[Z]));return Q}class BK extends O0{constructor(J,Q,Z){let $=new C7(Q,4,2),W=new M8({wireframe:!0,fog:!1,toneMapped:!1});super($,W);this.light=J,this.color=Z,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){if(this.light.updateWorldMatrix(!0,!1),this.color!==void 0)this.material.color.set(this.color);else this.material.color.copy(this.light.color)}}var KN=/*@__PURE__*/new A,ZX=/*@__PURE__*/new qJ,$X=/*@__PURE__*/new qJ;class zK extends J0{constructor(J,Q,Z){super();this.light=J,this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1,this.color=Z,this.type="HemisphereLightHelper";let $=new _7(Q);if($.rotateY(Math.PI*0.5),this.material=new M8({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0)this.material.vertexColors=!0;let W=$.getAttribute("position"),H=new Float32Array(W.count*3);$.setAttribute("color",new K0(H,3)),this.add(new O0($,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let J=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let Q=J.geometry.getAttribute("color");ZX.copy(this.light.color),$X.copy(this.light.groundColor);for(let Z=0,$=Q.count;Z<$;Z++){let W=Z<$/2?ZX:$X;Q.setXYZ(Z,W.r,W.g,W.b)}Q.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),J.lookAt(KN.setFromMatrixPosition(this.light.matrixWorld).negate())}}class IK extends $8{constructor(J=10,Q=10,Z=4473924,$=8947848){Z=new qJ(Z),$=new qJ($);let W=Q/2,H=J/Q,K=J/2,Y=[],X=[];for(let E=0,N=0,q=-K;E<=Q;E++,q+=H){Y.push(-K,0,q,K,0,q),Y.push(q,0,-K,q,0,K);let R=E===W?Z:$;R.toArray(X,N),N+=3,R.toArray(X,N),N+=3,R.toArray(X,N),N+=3,R.toArray(X,N),N+=3}let U=new dJ;U.setAttribute("position",new BJ(Y,3)),U.setAttribute("color",new BJ(X,3));let G=new A0({vertexColors:!0,toneMapped:!1});super(U,G);this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class _K extends $8{constructor(J=10,Q=16,Z=8,$=64,W=4473924,H=8947848){W=new qJ(W),H=new qJ(H);let K=[],Y=[];if(Q>1)for(let G=0;G<Q;G++){let E=G/Q*(Math.PI*2),N=Math.sin(E)*J,q=Math.cos(E)*J;K.push(0,0,0),K.push(N,0,q);let R=G&1?W:H;Y.push(R.r,R.g,R.b),Y.push(R.r,R.g,R.b)}for(let G=0;G<Z;G++){let E=G&1?W:H,N=J-J/Z*G;for(let q=0;q<$;q++){let R=q/$*(Math.PI*2),F=Math.sin(R)*N,O=Math.cos(R)*N;K.push(F,0,O),Y.push(E.r,E.g,E.b),R=(q+1)/$*(Math.PI*2),F=Math.sin(R)*N,O=Math.cos(R)*N,K.push(F,0,O),Y.push(E.r,E.g,E.b)}}let X=new dJ;X.setAttribute("position",new BJ(K,3)),X.setAttribute("color",new BJ(Y,3));let U=new A0({vertexColors:!0,toneMapped:!1});super(X,U);this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}var WX=/*@__PURE__*/new A,xQ=/*@__PURE__*/new A,HX=/*@__PURE__*/new A;class CK extends J0{constructor(J,Q,Z){super();if(this.light=J,this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1,this.color=Z,this.type="DirectionalLightHelper",Q===void 0)Q=1;let $=new dJ;$.setAttribute("position",new BJ([-Q,Q,0,Q,Q,0,Q,-Q,0,-Q,-Q,0,-Q,Q,0],3));let W=new A0({fog:!1,toneMapped:!1});this.lightPlane=new F8($,W),this.add(this.lightPlane),$=new dJ,$.setAttribute("position",new BJ([0,0,0,0,0,1],3)),this.targetLine=new F8($,W),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){if(this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),WX.setFromMatrixPosition(this.light.matrixWorld),xQ.setFromMatrixPosition(this.light.target.matrixWorld),HX.subVectors(xQ,WX),this.lightPlane.lookAt(xQ),this.color!==void 0)this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color);else this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color);this.targetLine.lookAt(xQ),this.targetLine.scale.z=HX.length()}}var gQ=/*@__PURE__*/new A,D0=/*@__PURE__*/new M7;class wK extends $8{constructor(J){let Q=new dJ,Z=new A0({color:16777215,vertexColors:!0,toneMapped:!1}),$=[],W=[],H={};K("n1","n2"),K("n2","n4"),K("n4","n3"),K("n3","n1"),K("f1","f2"),K("f2","f4"),K("f4","f3"),K("f3","f1"),K("n1","f1"),K("n2","f2"),K("n3","f3"),K("n4","f4"),K("p","n1"),K("p","n2"),K("p","n3"),K("p","n4"),K("u1","u2"),K("u2","u3"),K("u3","u1"),K("c","t"),K("p","c"),K("cn1","cn2"),K("cn3","cn4"),K("cf1","cf2"),K("cf3","cf4");function K(q,R){Y(q),Y(R)}function Y(q){if($.push(0,0,0),W.push(0,0,0),H[q]===void 0)H[q]=[];H[q].push($.length/3-1)}Q.setAttribute("position",new BJ($,3)),Q.setAttribute("color",new BJ(W,3));super(Q,Z);if(this.type="CameraHelper",this.camera=J,this.camera.updateProjectionMatrix)this.camera.updateProjectionMatrix();this.matrix=J.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=H,this.update();let X=new qJ(16755200),U=new qJ(16711680),G=new qJ(43775),E=new qJ(16777215),N=new qJ(3355443);this.setColors(X,U,G,E,N)}setColors(J,Q,Z,$,W){let K=this.geometry.getAttribute("color");K.setXYZ(0,J.r,J.g,J.b),K.setXYZ(1,J.r,J.g,J.b),K.setXYZ(2,J.r,J.g,J.b),K.setXYZ(3,J.r,J.g,J.b),K.setXYZ(4,J.r,J.g,J.b),K.setXYZ(5,J.r,J.g,J.b),K.setXYZ(6,J.r,J.g,J.b),K.setXYZ(7,J.r,J.g,J.b),K.setXYZ(8,J.r,J.g,J.b),K.setXYZ(9,J.r,J.g,J.b),K.setXYZ(10,J.r,J.g,J.b),K.setXYZ(11,J.r,J.g,J.b),K.setXYZ(12,J.r,J.g,J.b),K.setXYZ(13,J.r,J.g,J.b),K.setXYZ(14,J.r,J.g,J.b),K.setXYZ(15,J.r,J.g,J.b),K.setXYZ(16,J.r,J.g,J.b),K.setXYZ(17,J.r,J.g,J.b),K.setXYZ(18,J.r,J.g,J.b),K.setXYZ(19,J.r,J.g,J.b),K.setXYZ(20,J.r,J.g,J.b),K.setXYZ(21,J.r,J.g,J.b),K.setXYZ(22,J.r,J.g,J.b),K.setXYZ(23,J.r,J.g,J.b),K.setXYZ(24,Q.r,Q.g,Q.b),K.setXYZ(25,Q.r,Q.g,Q.b),K.setXYZ(26,Q.r,Q.g,Q.b),K.setXYZ(27,Q.r,Q.g,Q.b),K.setXYZ(28,Q.r,Q.g,Q.b),K.setXYZ(29,Q.r,Q.g,Q.b),K.setXYZ(30,Q.r,Q.g,Q.b),K.setXYZ(31,Q.r,Q.g,Q.b),K.setXYZ(32,Z.r,Z.g,Z.b),K.setXYZ(33,Z.r,Z.g,Z.b),K.setXYZ(34,Z.r,Z.g,Z.b),K.setXYZ(35,Z.r,Z.g,Z.b),K.setXYZ(36,Z.r,Z.g,Z.b),K.setXYZ(37,Z.r,Z.g,Z.b),K.setXYZ(38,$.r,$.g,$.b),K.setXYZ(39,$.r,$.g,$.b),K.setXYZ(40,W.r,W.g,W.b),K.setXYZ(41,W.r,W.g,W.b),K.setXYZ(42,W.r,W.g,W.b),K.setXYZ(43,W.r,W.g,W.b),K.setXYZ(44,W.r,W.g,W.b),K.setXYZ(45,W.r,W.g,W.b),K.setXYZ(46,W.r,W.g,W.b),K.setXYZ(47,W.r,W.g,W.b),K.setXYZ(48,W.r,W.g,W.b),K.setXYZ(49,W.r,W.g,W.b),K.needsUpdate=!0}update(){let J=this.geometry,Q=this.pointMap,Z=1,$=1;D0.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);let W=this.camera.coordinateSystem===2000?-1:0;R0("c",Q,J,D0,0,0,W),R0("t",Q,J,D0,0,0,1),R0("n1",Q,J,D0,-1,-1,W),R0("n2",Q,J,D0,1,-1,W),R0("n3",Q,J,D0,-1,1,W),R0("n4",Q,J,D0,1,1,W),R0("f1",Q,J,D0,-1,-1,1),R0("f2",Q,J,D0,1,-1,1),R0("f3",Q,J,D0,-1,1,1),R0("f4",Q,J,D0,1,1,1),R0("u1",Q,J,D0,0.7,1.1,W),R0("u2",Q,J,D0,-0.7,1.1,W),R0("u3",Q,J,D0,0,2,W),R0("cf1",Q,J,D0,-1,0,1),R0("cf2",Q,J,D0,1,0,1),R0("cf3",Q,J,D0,0,-1,1),R0("cf4",Q,J,D0,0,1,1),R0("cn1",Q,J,D0,-1,0,W),R0("cn2",Q,J,D0,1,0,W),R0("cn3",Q,J,D0,0,-1,W),R0("cn4",Q,J,D0,0,1,W),J.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function R0(J,Q,Z,$,W,H,K){gQ.set(W,H,K).unproject($);let Y=Q[J];if(Y!==void 0){let X=Z.getAttribute("position");for(let U=0,G=Y.length;U<G;U++)X.setXYZ(Y[U],gQ.x,gQ.y,gQ.z)}}var pQ=/*@__PURE__*/new w0;class AK extends $8{constructor(J,Q=16776960){let Z=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),$=new Float32Array(24),W=new dJ;W.setIndex(new K0(Z,1)),W.setAttribute("position",new K0($,3));super(W,new A0({color:Q,toneMapped:!1}));this.object=J,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(J){if(this.object!==void 0)pQ.setFromObject(this.object);if(pQ.isEmpty())return;let{min:Q,max:Z}=pQ,$=this.geometry.attributes.position,W=$.array;W[0]=Z.x,W[1]=Z.y,W[2]=Z.z,W[3]=Q.x,W[4]=Z.y,W[5]=Z.z,W[6]=Q.x,W[7]=Q.y,W[8]=Z.z,W[9]=Z.x,W[10]=Q.y,W[11]=Z.z,W[12]=Z.x,W[13]=Z.y,W[14]=Q.z,W[15]=Q.x,W[16]=Z.y,W[17]=Q.z,W[18]=Q.x,W[19]=Q.y,W[20]=Q.z,W[21]=Z.x,W[22]=Q.y,W[23]=Q.z,$.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(J){return this.object=J,this.update(),this}copy(J,Q){return super.copy(J,Q),this.object=J.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class PK extends $8{constructor(J,Q=16776960){let Z=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),$=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],W=new dJ;W.setIndex(new K0(Z,1)),W.setAttribute("position",new BJ($,3));super(W,new A0({color:Q,toneMapped:!1}));this.box=J,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(J){let Q=this.box;if(Q.isEmpty())return;Q.getCenter(this.position),Q.getSize(this.scale),this.scale.multiplyScalar(0.5),super.updateMatrixWorld(J)}dispose(){this.geometry.dispose(),this.material.dispose()}}class TK extends F8{constructor(J,Q=1,Z=16776960){let $=Z,W=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],H=new dJ;H.setAttribute("position",new BJ(W,3)),H.computeBoundingSphere();super(H,new A0({color:$,toneMapped:!1}));this.type="PlaneHelper",this.plane=J,this.size=Q;let K=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],Y=new dJ;Y.setAttribute("position",new BJ(K,3)),Y.computeBoundingSphere(),this.add(new O0(Y,new M8({color:$,opacity:0.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(J){this.position.set(0,0,0),this.scale.set(0.5*this.size,0.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(J)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}var KX=/*@__PURE__*/new A,mQ,OW;class SK extends J0{constructor(J=new A(0,0,1),Q=new A(0,0,0),Z=1,$=16776960,W=Z*0.2,H=W*0.2){super();if(this.type="ArrowHelper",mQ===void 0)mQ=new dJ,mQ.setAttribute("position",new BJ([0,0,0,0,1,0],3)),OW=new y9(0,0.5,1,5,1),OW.translate(0,-0.5,0);this.position.copy(Q),this.line=new F8(mQ,new A0({color:$,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new O0(OW,new M8({color:$,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(J),this.setLength(Z,W,H)}setDirection(J){if(J.y>0.99999)this.quaternion.set(0,0,0,1);else if(J.y<-0.99999)this.quaternion.set(1,0,0,0);else{KX.set(J.z,0,-J.x).normalize();let Q=Math.acos(J.y);this.quaternion.setFromAxisAngle(KX,Q)}}setLength(J,Q=J*0.2,Z=Q*0.2){this.line.scale.set(1,Math.max(0.0001,J-Q),1),this.line.updateMatrix(),this.cone.scale.set(Z,Q,Z),this.cone.position.y=J,this.cone.updateMatrix()}setColor(J){this.line.material.color.set(J),this.cone.material.color.set(J)}copy(J){return super.copy(J,!1),this.line.copy(J.line),this.cone.copy(J.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class jK extends $8{constructor(J=1){let Q=[0,0,0,J,0,0,0,0,0,0,J,0,0,0,0,0,0,J],Z=[1,0,0,1,0.6,0,0,1,0,0.6,1,0,0,0,1,0,0.6,1],$=new dJ;$.setAttribute("position",new BJ(Q,3)),$.setAttribute("color",new BJ(Z,3));let W=new A0({vertexColors:!0,toneMapped:!1});super($,W);this.type="AxesHelper"}setColors(J,Q,Z){let $=new qJ,W=this.geometry.attributes.color.array;return $.set(J),$.toArray(W,0),$.toArray(W,3),$.set(Q),$.toArray(W,6),$.toArray(W,9),$.set(Z),$.toArray(W,12),$.toArray(W,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class yK{constructor(){this.type="ShapePath",this.color=new qJ,this.subPaths=[],this.currentPath=null}moveTo(J,Q){return this.currentPath=new O9,this.subPaths.push(this.currentPath),this.currentPath.moveTo(J,Q),this}lineTo(J,Q){return this.currentPath.lineTo(J,Q),this}quadraticCurveTo(J,Q,Z,$){return this.currentPath.quadraticCurveTo(J,Q,Z,$),this}bezierCurveTo(J,Q,Z,$,W,H){return this.currentPath.bezierCurveTo(J,Q,Z,$,W,H),this}splineThru(J){return this.currentPath.splineThru(J),this}toShapes(J){function Q(O){let D=[];for(let M=0,k=O.length;M<k;M++){let I=O[M],P=new S8;P.curves=I.curves,D.push(P)}return D}function Z(O,D){let M=D.length,k=!1;for(let I=M-1,P=0;P<M;I=P++){let _=D[I],w=D[P],y=w.x-_.x,L=w.y-_.y;if(Math.abs(L)>Number.EPSILON){if(L<0)_=D[P],y=-y,w=D[I],L=-L;if(O.y<_.y||O.y>w.y)continue;if(O.y===_.y){if(O.x===_.x)return!0}else{let z=L*(O.x-_.x)-y*(O.y-_.y);if(z===0)return!0;if(z<0)continue;k=!k}}else{if(O.y!==_.y)continue;if(w.x<=O.x&&O.x<=_.x||_.x<=O.x&&O.x<=w.x)return!0}}return k}let $=X8.isClockWise,W=this.subPaths;if(W.length===0)return[];let H,K,Y,X=[];if(W.length===1)return K=W[0],Y=new S8,Y.curves=K.curves,X.push(Y),X;let U=!$(W[0].getPoints());U=J?!U:U;let G=[],E=[],N=[],q=0,R;E[q]=void 0,N[q]=[];for(let O=0,D=W.length;O<D;O++)if(K=W[O],R=K.getPoints(),H=$(R),H=J?!H:H,H){if(!U&&E[q])q++;if(E[q]={s:new S8,p:R},E[q].s.curves=K.curves,U)q++;N[q]=[]}else N[q].push({h:K,p:R[0]});if(!E[0])return Q(W);if(E.length>1){let O=!1,D=0;for(let M=0,k=E.length;M<k;M++)G[M]=[];for(let M=0,k=E.length;M<k;M++){let I=N[M];for(let P=0;P<I.length;P++){let _=I[P],w=!0;for(let y=0;y<E.length;y++)if(Z(_.p,E[y].p)){if(M!==y)D++;if(w)w=!1,G[y].push(_);else O=!0}if(w)G[M].push(_)}}if(D>0&&O===!1)N=G}let F;for(let O=0,D=E.length;O<D;O++){Y=E[O].s,X.push(Y),F=N[O];for(let M=0,k=F.length;M<k;M++)Y.holes.push(F[M].h)}return X}}class vK extends Q8{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function YN(J,Q){let Z=J.image&&J.image.width?J.image.width/J.image.height:1;if(Z>Q)J.repeat.x=1,J.repeat.y=Z/Q,J.offset.x=0,J.offset.y=(1-J.repeat.y)/2;else J.repeat.x=Q/Z,J.repeat.y=1,J.offset.x=(1-J.repeat.x)/2,J.offset.y=0;return J}function XN(J,Q){let Z=J.image&&J.image.width?J.image.width/J.image.height:1;if(Z>Q)J.repeat.x=Q/Z,J.repeat.y=1,J.offset.x=(1-J.repeat.x)/2,J.offset.y=0;else J.repeat.x=1,J.repeat.y=Z/Q,J.offset.x=0,J.offset.y=(1-J.repeat.y)/2;return J}function UN(J){return J.repeat.x=1,J.repeat.y=1,J.offset.x=0,J.offset.y=0,J}function w$(J,Q,Z,$){let W=GN($);switch(Z){case 1021:return J*Q;case 1024:return J*Q;case 1025:return J*Q*2;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw new Error(`Unable to determine texture byte length for ${Z} format.`)}function GN(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${J}.`)}var TU={contain:YN,cover:XN,fill:UN,getByteLength:w$};if(typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"173"}}));if(typeof window!=="undefined")if(window.__THREE__);else window.__THREE__="173";function JG(){let J=null,Q=!1,Z=null,$=null;function W(H,K){Z(H,K),$=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if(Z===null)return;$=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame($),Q=!1},setAnimationLoop:function(H){Z=H},setContext:function(H){J=H}}}function EN(J){let Q=/*@__PURE__*/new WeakMap;function Z(Y,X){let{array:U,usage:G}=Y,E=U.byteLength,N=J.createBuffer();J.bindBuffer(X,N),J.bufferData(X,U,G),Y.onUploadCallback();let q;if(U instanceof Float32Array)q=J.FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)q=J.HALF_FLOAT;else q=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)q=J.SHORT;else if(U instanceof Uint32Array)q=J.UNSIGNED_INT;else if(U instanceof Int32Array)q=J.INT;else if(U instanceof Int8Array)q=J.BYTE;else if(U instanceof Uint8Array)q=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)q=J.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:N,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:E}}function $(Y,X,U){let{array:G,updateRanges:E}=X;if(J.bindBuffer(U,Y),E.length===0)J.bufferSubData(U,0,G);else{E.sort((q,R)=>q.start-R.start);let N=0;for(let q=1;q<E.length;q++){let R=E[N],F=E[q];if(F.start<=R.start+R.count+1)R.count=Math.max(R.count,F.start+F.count-R.start);else++N,E[N]=F}E.length=N+1;for(let q=0,R=E.length;q<R;q++){let F=E[q];J.bufferSubData(U,F.start*G.BYTES_PER_ELEMENT,G,F.start,F.count)}X.clearUpdateRanges()}X.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function H(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function K(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=Q.get(Y);if(!G||G.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,Z(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");$(U.buffer,Y,X),U.version=Y.version}}return{get:W,remove:H,update:K}}var NN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qN=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ON=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RN=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FN=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kN=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MN=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VN=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,LN=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BN=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IN=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_N=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CN=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wN=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SN=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yN=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vN=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fN=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bN=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hN=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lN="gl_FragColor = linearToOutputTexel( gl_FragColor );",dN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cN=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nN=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eN=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,J1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,W1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,H1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,G1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,E1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,N1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,L1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,A1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,m1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,i1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,o1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,a1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,r1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,e1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jq=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qq=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zq=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$q=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wq=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hq=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kq=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yq=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xq=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uq=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gq=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Eq=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nq=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qq=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dq=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oq=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rq=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fq=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kq=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mq=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vq=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lq=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bq=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zq=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iq=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_q=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cq=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wq=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Aq=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pq=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tq=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sq=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jq=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yq=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vq=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fq=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bq=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hq=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xq=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gq=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pq=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mq=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lq=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dq=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uq=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cJ={alphahash_fragment:NN,alphahash_pars_fragment:qN,alphamap_fragment:DN,alphamap_pars_fragment:ON,alphatest_fragment:RN,alphatest_pars_fragment:FN,aomap_fragment:kN,aomap_pars_fragment:MN,batching_pars_vertex:VN,batching_vertex:LN,begin_vertex:BN,beginnormal_vertex:zN,bsdfs:IN,iridescence_fragment:_N,bumpmap_pars_fragment:CN,clipping_planes_fragment:wN,clipping_planes_pars_fragment:AN,clipping_planes_pars_vertex:PN,clipping_planes_vertex:TN,color_fragment:SN,color_pars_fragment:jN,color_pars_vertex:yN,color_vertex:vN,common:fN,cube_uv_reflection_fragment:bN,defaultnormal_vertex:hN,displacementmap_pars_vertex:xN,displacementmap_vertex:gN,emissivemap_fragment:pN,emissivemap_pars_fragment:mN,colorspace_fragment:lN,colorspace_pars_fragment:dN,envmap_fragment:uN,envmap_common_pars_fragment:cN,envmap_pars_fragment:nN,envmap_pars_vertex:sN,envmap_physical_pars_fragment:W1,envmap_vertex:iN,fog_vertex:oN,fog_pars_vertex:aN,fog_fragment:rN,fog_pars_fragment:tN,gradientmap_pars_fragment:eN,lightmap_pars_fragment:J1,lights_lambert_fragment:Q1,lights_lambert_pars_fragment:Z1,lights_pars_begin:$1,lights_toon_fragment:H1,lights_toon_pars_fragment:K1,lights_phong_fragment:Y1,lights_phong_pars_fragment:X1,lights_physical_fragment:U1,lights_physical_pars_fragment:G1,lights_fragment_begin:E1,lights_fragment_maps:N1,lights_fragment_end:q1,logdepthbuf_fragment:D1,logdepthbuf_pars_fragment:O1,logdepthbuf_pars_vertex:R1,logdepthbuf_vertex:F1,map_fragment:k1,map_pars_fragment:M1,map_particle_fragment:V1,map_particle_pars_fragment:L1,metalnessmap_fragment:B1,metalnessmap_pars_fragment:z1,morphinstance_vertex:I1,morphcolor_vertex:_1,morphnormal_vertex:C1,morphtarget_pars_vertex:w1,morphtarget_vertex:A1,normal_fragment_begin:P1,normal_fragment_maps:T1,normal_pars_fragment:S1,normal_pars_vertex:j1,normal_vertex:y1,normalmap_pars_fragment:v1,clearcoat_normal_fragment_begin:f1,clearcoat_normal_fragment_maps:b1,clearcoat_pars_fragment:h1,iridescence_pars_fragment:x1,opaque_fragment:g1,packing:p1,premultiplied_alpha_fragment:m1,project_vertex:l1,dithering_fragment:d1,dithering_pars_fragment:u1,roughnessmap_fragment:c1,roughnessmap_pars_fragment:n1,shadowmap_pars_fragment:s1,shadowmap_pars_vertex:i1,shadowmap_vertex:o1,shadowmask_pars_fragment:a1,skinbase_vertex:r1,skinning_pars_vertex:t1,skinning_vertex:e1,skinnormal_vertex:Jq,specularmap_fragment:Qq,specularmap_pars_fragment:Zq,tonemapping_fragment:$q,tonemapping_pars_fragment:Wq,transmission_fragment:Hq,transmission_pars_fragment:Kq,uv_pars_fragment:Yq,uv_pars_vertex:Xq,uv_vertex:Uq,worldpos_vertex:Gq,background_vert:Eq,background_frag:Nq,backgroundCube_vert:qq,backgroundCube_frag:Dq,cube_vert:Oq,cube_frag:Rq,depth_vert:Fq,depth_frag:kq,distanceRGBA_vert:Mq,distanceRGBA_frag:Vq,equirect_vert:Lq,equirect_frag:Bq,linedashed_vert:zq,linedashed_frag:Iq,meshbasic_vert:_q,meshbasic_frag:Cq,meshlambert_vert:wq,meshlambert_frag:Aq,meshmatcap_vert:Pq,meshmatcap_frag:Tq,meshnormal_vert:Sq,meshnormal_frag:jq,meshphong_vert:yq,meshphong_frag:vq,meshphysical_vert:fq,meshphysical_frag:bq,meshtoon_vert:hq,meshtoon_frag:xq,points_vert:gq,points_frag:pq,shadow_vert:mq,shadow_frag:lq,sprite_vert:dq,sprite_frag:uq},XJ={common:{diffuse:{value:/*@__PURE__*/new qJ(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:/*@__PURE__*/new pJ},alphaMap:{value:null},alphaMapTransform:{value:/*@__PURE__*/new pJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:/*@__PURE__*/new pJ}},envmap:{envMap:{value:null},envMapRotation:{value:/*@__PURE__*/new pJ},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:/*@__PURE__*/new pJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:/*@__PURE__*/new pJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:/*@__PURE__*/new pJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:/*@__PURE__*/new pJ},normalScale:{value:/*@__PURE__*/new i(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:/*@__PURE__*/new pJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:/*@__PURE__*/new pJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:/*@__PURE__*/new pJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:/*@__PURE__*/new pJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:/*@__PURE__*/new qJ(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:/*@__PURE__*/new qJ(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:/*@__PURE__*/new pJ},alphaTest:{value:0},uvTransform:{value:/*@__PURE__*/new pJ}},sprite:{diffuse:{value:/*@__PURE__*/new qJ(16777215)},opacity:{value:1},center:{value:/*@__PURE__*/new i(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:/*@__PURE__*/new pJ},alphaMap:{value:null},alphaMapTransform:{value:/*@__PURE__*/new pJ},alphaTest:{value:0}}},q8={basic:{uniforms:/*@__PURE__*/y0([XJ.common,XJ.specularmap,XJ.envmap,XJ.aomap,XJ.lightmap,XJ.fog]),vertexShader:cJ.meshbasic_vert,fragmentShader:cJ.meshbasic_frag},lambert:{uniforms:/*@__PURE__*/y0([XJ.common,XJ.specularmap,XJ.envmap,XJ.aomap,XJ.lightmap,XJ.emissivemap,XJ.bumpmap,XJ.normalmap,XJ.displacementmap,XJ.fog,XJ.lights,{emissive:{value:/*@__PURE__*/new qJ(0)}}]),vertexShader:cJ.meshlambert_vert,fragmentShader:cJ.meshlambert_frag},phong:{uniforms:/*@__PURE__*/y0([XJ.common,XJ.specularmap,XJ.envmap,XJ.aomap,XJ.lightmap,XJ.emissivemap,XJ.bumpmap,XJ.normalmap,XJ.displacementmap,XJ.fog,XJ.lights,{emissive:{value:/*@__PURE__*/new qJ(0)},specular:{value:/*@__PURE__*/new qJ(1118481)},shininess:{value:30}}]),vertexShader:cJ.meshphong_vert,fragmentShader:cJ.meshphong_frag},standard:{uniforms:/*@__PURE__*/y0([XJ.common,XJ.envmap,XJ.aomap,XJ.lightmap,XJ.emissivemap,XJ.bumpmap,XJ.normalmap,XJ.displacementmap,XJ.roughnessmap,XJ.metalnessmap,XJ.fog,XJ.lights,{emissive:{value:/*@__PURE__*/new qJ(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:cJ.meshphysical_vert,fragmentShader:cJ.meshphysical_frag},toon:{uniforms:/*@__PURE__*/y0([XJ.common,XJ.aomap,XJ.lightmap,XJ.emissivemap,XJ.bumpmap,XJ.normalmap,XJ.displacementmap,XJ.gradientmap,XJ.fog,XJ.lights,{emissive:{value:/*@__PURE__*/new qJ(0)}}]),vertexShader:cJ.meshtoon_vert,fragmentShader:cJ.meshtoon_frag},matcap:{uniforms:/*@__PURE__*/y0([XJ.common,XJ.bumpmap,XJ.normalmap,XJ.displacementmap,XJ.fog,{matcap:{value:null}}]),vertexShader:cJ.meshmatcap_vert,fragmentShader:cJ.meshmatcap_frag},points:{uniforms:/*@__PURE__*/y0([XJ.points,XJ.fog]),vertexShader:cJ.points_vert,fragmentShader:cJ.points_frag},dashed:{uniforms:/*@__PURE__*/y0([XJ.common,XJ.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:cJ.linedashed_vert,fragmentShader:cJ.linedashed_frag},depth:{uniforms:/*@__PURE__*/y0([XJ.common,XJ.displacementmap]),vertexShader:cJ.depth_vert,fragmentShader:cJ.depth_frag},normal:{uniforms:/*@__PURE__*/y0([XJ.common,XJ.bumpmap,XJ.normalmap,XJ.displacementmap,{opacity:{value:1}}]),vertexShader:cJ.meshnormal_vert,fragmentShader:cJ.meshnormal_frag},sprite:{uniforms:/*@__PURE__*/y0([XJ.sprite,XJ.fog]),vertexShader:cJ.sprite_vert,fragmentShader:cJ.sprite_frag},background:{uniforms:{uvTransform:{value:/*@__PURE__*/new pJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:cJ.background_vert,fragmentShader:cJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:/*@__PURE__*/new pJ}},vertexShader:cJ.backgroundCube_vert,fragmentShader:cJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:cJ.cube_vert,fragmentShader:cJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:cJ.equirect_vert,fragmentShader:cJ.equirect_frag},distanceRGBA:{uniforms:/*@__PURE__*/y0([XJ.common,XJ.displacementmap,{referencePosition:{value:/*@__PURE__*/new A},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:cJ.distanceRGBA_vert,fragmentShader:cJ.distanceRGBA_frag},shadow:{uniforms:/*@__PURE__*/y0([XJ.lights,XJ.fog,{color:{value:/*@__PURE__*/new qJ(0)},opacity:{value:1}}]),vertexShader:cJ.shadow_vert,fragmentShader:cJ.shadow_frag}};q8.physical={uniforms:/*@__PURE__*/y0([q8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:/*@__PURE__*/new pJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:/*@__PURE__*/new pJ},clearcoatNormalScale:{value:/*@__PURE__*/new i(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:/*@__PURE__*/new pJ},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:/*@__PURE__*/new pJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:/*@__PURE__*/new pJ},sheen:{value:0},sheenColor:{value:/*@__PURE__*/new qJ(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:/*@__PURE__*/new pJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:/*@__PURE__*/new pJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:/*@__PURE__*/new pJ},transmissionSamplerSize:{value:/*@__PURE__*/new i},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:/*@__PURE__*/new pJ},attenuationDistance:{value:0},attenuationColor:{value:/*@__PURE__*/new qJ(0)},specularColor:{value:/*@__PURE__*/new qJ(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:/*@__PURE__*/new pJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:/*@__PURE__*/new pJ},anisotropyVector:{value:/*@__PURE__*/new i},anisotropyMap:{value:null},anisotropyMapTransform:{value:/*@__PURE__*/new pJ}}]),vertexShader:cJ.meshphysical_vert,fragmentShader:cJ.meshphysical_frag};var A$={r:0,b:0,g:0},h9=/*@__PURE__*/new l0,cq=/*@__PURE__*/new jJ;function nq(J,Q,Z,$,W,H,K){let Y=new qJ(0),X=H===!0?0:1,U,G,E=null,N=0,q=null;function R(k){let I=k.isScene===!0?k.background:null;if(I&&I.isTexture)I=(k.backgroundBlurriness>0?Z:Q).get(I);return I}function F(k){let I=!1,P=R(k);if(P===null)D(Y,X);else if(P&&P.isColor)D(P,1),I=!0;let _=J.xr.getEnvironmentBlendMode();if(_==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(_==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||I)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function O(k,I){let P=R(I);if(P&&(P.isCubeTexture||P.mapping===G7)){if(G===void 0)G=new O0(new t8(1,1,1),new i0({name:"BackgroundCubeMaterial",uniforms:T9(q8.backgroundCube.uniforms),vertexShader:q8.backgroundCube.vertexShader,fragmentShader:q8.backgroundCube.fragmentShader,side:d0,depthTest:!1,depthWrite:!1,fog:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(_,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(h9.copy(I.backgroundRotation),h9.x*=-1,h9.y*=-1,h9.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1)h9.y*=-1,h9.z*=-1;if(G.material.uniforms.envMap.value=P,G.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(cq.makeRotationFromEuler(h9)),G.material.toneMapped=rJ.getTransfer(P.colorSpace)!==Y0,E!==P||N!==P.version||q!==J.toneMapping)G.material.needsUpdate=!0,E=P,N=P.version,q=J.toneMapping;G.layers.enableAll(),k.unshift(G,G.geometry,G.material,0,0,null)}else if(P&&P.isTexture){if(U===void 0)U=new O0(new v9(2,2),new i0({name:"BackgroundMaterial",uniforms:T9(q8.background.uniforms),vertexShader:q8.background.vertexShader,fragmentShader:q8.background.fragmentShader,side:L9,depthTest:!1,depthWrite:!1,fog:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=P,U.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,U.material.toneMapped=rJ.getTransfer(P.colorSpace)!==Y0,P.matrixAutoUpdate===!0)P.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(P.matrix),E!==P||N!==P.version||q!==J.toneMapping)U.material.needsUpdate=!0,E=P,N=P.version,q=J.toneMapping;U.layers.enableAll(),k.unshift(U,U.geometry,U.material,0,0,null)}}function D(k,I){k.getRGB(A$,xH(J)),$.buffers.color.setClear(A$.r,A$.g,A$.b,I,K)}function M(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return Y},setClearColor:function(k,I=1){Y.set(k),X=I,D(Y,X)},getClearAlpha:function(){return X},setClearAlpha:function(k){X=k,D(Y,X)},render:F,addToRenderList:O,dispose:M}}function sq(J,Q){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),$={},W=N(null),H=W,K=!1;function Y(z,S,g,p,l){let s=!1,d=E(p,g,S);if(H!==d)H=d,U(H.object);if(s=q(z,p,g,l),s)R(z,p,g,l);if(l!==null)Q.update(l,J.ELEMENT_ARRAY_BUFFER);if(s||K){if(K=!1,I(z,S,g,p),l!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(l).buffer)}}function X(){return J.createVertexArray()}function U(z){return J.bindVertexArray(z)}function G(z){return J.deleteVertexArray(z)}function E(z,S,g){let p=g.wireframe===!0,l=$[z.id];if(l===void 0)l={},$[z.id]=l;let s=l[S.id];if(s===void 0)s={},l[S.id]=s;let d=s[p];if(d===void 0)d=N(X()),s[p]=d;return d}function N(z){let S=[],g=[],p=[];for(let l=0;l<Z;l++)S[l]=0,g[l]=0,p[l]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:g,attributeDivisors:p,object:z,attributes:{},index:null}}function q(z,S,g,p){let l=H.attributes,s=S.attributes,d=0,ZJ=g.getAttributes();for(let m in ZJ)if(ZJ[m].location>=0){let UJ=l[m],SJ=s[m];if(SJ===void 0){if(m==="instanceMatrix"&&z.instanceMatrix)SJ=z.instanceMatrix;if(m==="instanceColor"&&z.instanceColor)SJ=z.instanceColor}if(UJ===void 0)return!0;if(UJ.attribute!==SJ)return!0;if(SJ&&UJ.data!==SJ.data)return!0;d++}if(H.attributesNum!==d)return!0;if(H.index!==p)return!0;return!1}function R(z,S,g,p){let l={},s=S.attributes,d=0,ZJ=g.getAttributes();for(let m in ZJ)if(ZJ[m].location>=0){let UJ=s[m];if(UJ===void 0){if(m==="instanceMatrix"&&z.instanceMatrix)UJ=z.instanceMatrix;if(m==="instanceColor"&&z.instanceColor)UJ=z.instanceColor}let SJ={};if(SJ.attribute=UJ,UJ&&UJ.data)SJ.data=UJ.data;l[m]=SJ,d++}H.attributes=l,H.attributesNum=d,H.index=p}function F(){let z=H.newAttributes;for(let S=0,g=z.length;S<g;S++)z[S]=0}function O(z){D(z,0)}function D(z,S){let{newAttributes:g,enabledAttributes:p,attributeDivisors:l}=H;if(g[z]=1,p[z]===0)J.enableVertexAttribArray(z),p[z]=1;if(l[z]!==S)J.vertexAttribDivisor(z,S),l[z]=S}function M(){let{newAttributes:z,enabledAttributes:S}=H;for(let g=0,p=S.length;g<p;g++)if(S[g]!==z[g])J.disableVertexAttribArray(g),S[g]=0}function k(z,S,g,p,l,s,d){if(d===!0)J.vertexAttribIPointer(z,S,g,l,s);else J.vertexAttribPointer(z,S,g,p,l,s)}function I(z,S,g,p){F();let l=p.attributes,s=g.getAttributes(),d=S.defaultAttributeValues;for(let ZJ in s){let m=s[ZJ];if(m.location>=0){let EJ=l[ZJ];if(EJ===void 0){if(ZJ==="instanceMatrix"&&z.instanceMatrix)EJ=z.instanceMatrix;if(ZJ==="instanceColor"&&z.instanceColor)EJ=z.instanceColor}if(EJ!==void 0){let{normalized:UJ,itemSize:SJ}=EJ,sJ=Q.get(EJ);if(sJ===void 0)continue;let{buffer:c,type:KJ,bytesPerElement:wJ}=sJ,IJ=KJ===J.INT||KJ===J.UNSIGNED_INT||EJ.gpuType===aQ;if(EJ.isInterleavedBufferAttribute){let YJ=EJ.data,oJ=YJ.stride,yJ=EJ.offset;if(YJ.isInstancedInterleavedBuffer){for(let mJ=0;mJ<m.locationSize;mJ++)D(m.location+mJ,YJ.meshPerAttribute);if(z.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=YJ.meshPerAttribute*YJ.count}else for(let mJ=0;mJ<m.locationSize;mJ++)O(m.location+mJ);J.bindBuffer(J.ARRAY_BUFFER,c);for(let mJ=0;mJ<m.locationSize;mJ++)k(m.location+mJ,SJ/m.locationSize,KJ,UJ,oJ*wJ,(yJ+SJ/m.locationSize*mJ)*wJ,IJ)}else{if(EJ.isInstancedBufferAttribute){for(let YJ=0;YJ<m.locationSize;YJ++)D(m.location+YJ,EJ.meshPerAttribute);if(z.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=EJ.meshPerAttribute*EJ.count}else for(let YJ=0;YJ<m.locationSize;YJ++)O(m.location+YJ);J.bindBuffer(J.ARRAY_BUFFER,c);for(let YJ=0;YJ<m.locationSize;YJ++)k(m.location+YJ,SJ/m.locationSize,KJ,UJ,SJ*wJ,SJ/m.locationSize*YJ*wJ,IJ)}}else if(d!==void 0){let UJ=d[ZJ];if(UJ!==void 0)switch(UJ.length){case 2:J.vertexAttrib2fv(m.location,UJ);break;case 3:J.vertexAttrib3fv(m.location,UJ);break;case 4:J.vertexAttrib4fv(m.location,UJ);break;default:J.vertexAttrib1fv(m.location,UJ)}}}}M()}function P(){y();for(let z in $){let S=$[z];for(let g in S){let p=S[g];for(let l in p)G(p[l].object),delete p[l];delete S[g]}delete $[z]}}function _(z){if($[z.id]===void 0)return;let S=$[z.id];for(let g in S){let p=S[g];for(let l in p)G(p[l].object),delete p[l];delete S[g]}delete $[z.id]}function w(z){for(let S in $){let g=$[S];if(g[z.id]===void 0)continue;let p=g[z.id];for(let l in p)G(p[l].object),delete p[l];delete g[z.id]}}function y(){if(L(),K=!0,H===W)return;H=W,U(H.object)}function L(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:y,resetDefaultState:L,dispose:P,releaseStatesOfGeometry:_,releaseStatesOfProgram:w,initAttributes:F,enableAttribute:O,disableUnusedAttributes:M}}function iq(J,Q,Z){let $;function W(U){$=U}function H(U,G){J.drawArrays($,U,G),Z.update(G,$,1)}function K(U,G,E){if(E===0)return;J.drawArraysInstanced($,U,G,E),Z.update(G,$,E)}function Y(U,G,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL($,U,0,G,0,E);let q=0;for(let R=0;R<E;R++)q+=G[R];Z.update(q,$,1)}function X(U,G,E,N){if(E===0)return;let q=Q.get("WEBGL_multi_draw");if(q===null)for(let R=0;R<U.length;R++)K(U[R],G[R],N[R]);else{q.multiDrawArraysInstancedWEBGL($,U,0,G,0,N,0,E);let R=0;for(let F=0;F<E;F++)R+=G[F]*N[F];Z.update(R,$,1)}}this.setMode=W,this.render=H,this.renderInstances=K,this.renderMultiDraw=Y,this.renderMultiDrawInstances=X}function oq(J,Q,Z,$){let W;function H(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let w=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function K(w){if(w!==N8&&$.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(w){let y=w===q7&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(w!==y8&&$.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==v8&&!y)return!1;return!0}function X(w){if(w==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";w="mediump"}if(w==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Z.precision!==void 0?Z.precision:"highp",G=X(U);if(G!==U)U=G;let E=Z.logarithmicDepthBuffer===!0,N=Z.reverseDepthBuffer===!0&&Q.has("EXT_clip_control"),q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),F=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),D=J.getParameter(J.MAX_VERTEX_ATTRIBS),M=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),k=J.getParameter(J.MAX_VARYING_VECTORS),I=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),P=R>0,_=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:X,textureFormatReadable:K,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:E,reverseDepthBuffer:N,maxTextures:q,maxVertexTextures:R,maxTextureSize:F,maxCubemapSize:O,maxAttributes:D,maxVertexUniforms:M,maxVaryings:k,maxFragmentUniforms:I,vertexTextures:P,maxSamples:_}}function aq(J){let Q=this,Z=null,$=0,W=!1,H=!1,K=new O8,Y=new pJ,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(E,N){let q=E.length!==0||N||$!==0||W;return W=N,$=E.length,q},this.beginShadows=function(){H=!0,G(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(E,N){Z=G(E,N,0)},this.setState=function(E,N,q){let{clippingPlanes:R,clipIntersection:F,clipShadows:O}=E,D=J.get(E);if(!W||R===null||R.length===0||H&&!O)if(H)G(null);else U();else{let M=H?0:$,k=M*4,I=D.clippingState||null;X.value=I,I=G(R,N,k,q);for(let P=0;P!==k;++P)I[P]=Z[P];D.clippingState=I,this.numIntersection=F?this.numPlanes:0,this.numPlanes+=M}};function U(){if(X.value!==Z)X.value=Z,X.needsUpdate=$>0;Q.numPlanes=$,Q.numIntersection=0}function G(E,N,q,R){let F=E!==null?E.length:0,O=null;if(F!==0){if(O=X.value,R!==!0||O===null){let D=q+F*4,M=N.matrixWorldInverse;if(Y.getNormalMatrix(M),O===null||O.length<D)O=new Float32Array(D);for(let k=0,I=q;k!==F;++k,I+=4)K.copy(E[k]).applyMatrix4(M,Y),K.normal.toArray(O,I),O[I+3]=K.constant}X.value=O,X.needsUpdate=!0}return Q.numPlanes=F,Q.numIntersection=0,O}}function rq(J){let Q=/*@__PURE__*/new WeakMap;function Z(K,Y){if(Y===Y6)K.mapping=z9;else if(Y===X6)K.mapping=i8;return K}function $(K){if(K&&K.isTexture){let Y=K.mapping;if(Y===Y6||Y===X6)if(Q.has(K)){let X=Q.get(K).texture;return Z(X,K.mapping)}else{let X=K.image;if(X&&X.height>0){let U=new yZ(X.height);return U.fromEquirectangularTexture(J,K),Q.set(K,U),K.addEventListener("dispose",W),Z(U.texture,K.mapping)}else return null}}return K}function W(K){let Y=K.target;Y.removeEventListener("dispose",W);let X=Q.get(Y);if(X!==void 0)Q.delete(Y),X.dispose()}function H(){Q=/*@__PURE__*/new WeakMap}return{get:$,dispose:H}}var P7=4,SU=[0.125,0.215,0.35,0.446,0.526,0.582],T7=20,fK=/*@__PURE__*/new w7,jU=/*@__PURE__*/new qJ,bK=null,hK=0,xK=0,gK=!1,g9=(1+Math.sqrt(5))/2,A7=1/g9,yU=[/*@__PURE__*/new A(-g9,A7,0),/*@__PURE__*/new A(g9,A7,0),/*@__PURE__*/new A(-A7,0,g9),/*@__PURE__*/new A(A7,0,g9),/*@__PURE__*/new A(0,g9,-A7),/*@__PURE__*/new A(0,g9,A7),/*@__PURE__*/new A(-1,1,-1),/*@__PURE__*/new A(1,1,-1),/*@__PURE__*/new A(-1,1,1),/*@__PURE__*/new A(1,1,1)];class S${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Q=0,Z=0.1,$=100){bK=this._renderer.getRenderTarget(),hK=this._renderer.getActiveCubeFace(),xK=this._renderer.getActiveMipmapLevel(),gK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let W=this._allocateTargets();if(W.depthBuffer=!0,this._sceneToCubeUV(J,Z,$,W),Q>0)this._blur(W,0,0,Q);return this._applyPMREM(W),this._cleanup(W),W}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=bU(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=fU(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(bK,hK,xK),this._renderer.xr.enabled=gK,J.scissorTest=!1,P$(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===z9||J.mapping===i8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);bK=this._renderer.getRenderTarget(),hK=this._renderer.getActiveCubeFace(),xK=this._renderer.getActiveMipmapLevel(),gK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Z=Q||this._allocateTargets();return this._textureToCubeUV(J,Z),this._applyPMREM(Z),this._cleanup(Z),Z}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,Z={magFilter:o8,minFilter:o8,generateMipmaps:!1,type:q7,format:N8,colorSpace:O7,depthBuffer:!1},$=vU(J,Q,Z);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=vU(J,Q,Z);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tq(W)),this._blurMaterial=eq(W,J,Q)}return $}_compileMaterial(J){let Q=new O0(this._lodPlanes[0],J);this._renderer.compile(Q,fK)}_sceneToCubeUV(J,Q,Z,$){let K=new M0(90,1,Q,Z),Y=[1,-1,1,1,1,1],X=[1,1,1,-1,-1,-1],U=this._renderer,G=U.autoClear,E=U.toneMapping;U.getClearColor(jU),U.toneMapping=k8,U.autoClear=!1;let N=new M8({name:"PMREM.Background",side:d0,depthWrite:!1,depthTest:!1}),q=new O0(new t8,N),R=!1,F=J.background;if(F){if(F.isColor)N.color.copy(F),J.background=null,R=!0}else N.color.copy(jU),R=!0;for(let O=0;O<6;O++){let D=O%3;if(D===0)K.up.set(0,Y[O],0),K.lookAt(X[O],0,0);else if(D===1)K.up.set(0,0,Y[O]),K.lookAt(0,X[O],0);else K.up.set(0,Y[O],0),K.lookAt(0,0,X[O]);let M=this._cubeSize;if(P$($,D*M,O>2?M:0,M,M),U.setRenderTarget($),R)U.render(q,K);U.render(J,K)}q.geometry.dispose(),q.material.dispose(),U.toneMapping=E,U.autoClear=G,J.background=F}_textureToCubeUV(J,Q){let Z=this._renderer,$=J.mapping===z9||J.mapping===i8;if($){if(this._cubemapMaterial===null)this._cubemapMaterial=bU();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=fU();let W=$?this._cubemapMaterial:this._equirectMaterial,H=new O0(this._lodPlanes[0],W),K=W.uniforms;K.envMap.value=J;let Y=this._cubeSize;P$(Q,0,0,3*Y,2*Y),Z.setRenderTarget(Q),Z.render(H,fK)}_applyPMREM(J){let Q=this._renderer,Z=Q.autoClear;Q.autoClear=!1;let $=this._lodPlanes.length;for(let W=1;W<$;W++){let H=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),K=yU[($-W-1)%yU.length];this._blur(J,W-1,W,H,K)}Q.autoClear=Z}_blur(J,Q,Z,$,W){let H=this._pingPongRenderTarget;this._halfBlur(J,H,Q,Z,$,"latitudinal",W),this._halfBlur(H,J,Z,Z,$,"longitudinal",W)}_halfBlur(J,Q,Z,$,W,H,K){let Y=this._renderer,X=this._blurMaterial,U=3,G=new O0(this._lodPlanes[$],X),E=X.uniforms,N=this._sizeLods[Z]-1,q=isFinite(W)?Math.PI/(2*N):2*Math.PI/(2*T7-1),R=W/q,F=isFinite(W)?1+Math.floor(U*R):T7;if(F>T7);let O=[],D=0;for(let _=0;_<T7;++_){let w=_/R,y=Math.exp(-w*w/2);if(O.push(y),_===0)D+=y;else if(_<F)D+=2*y}for(let _=0;_<O.length;_++)O[_]=O[_]/D;if(E.envMap.value=J.texture,E.samples.value=F,E.weights.value=O,E.latitudinal.value=H==="latitudinal",K)E.poleAxis.value=K;let{_lodMax:M}=this;E.dTheta.value=q,E.mipInt.value=M-Z;let k=this._sizeLods[$],I=3*k*($>M-P7?$-M+P7:0),P=4*(this._cubeSize-k);P$(Q,I,P,3*k,2*k),Y.setRenderTarget(Q),Y.render(G,fK)}}function tq(J){let Q=[],Z=[],$=[],W=J,H=J-P7+1+SU.length;for(let K=0;K<H;K++){let Y=Math.pow(2,W);Z.push(Y);let X=1/Y;if(K>J-P7)X=SU[K-J+P7-1];else if(K===0)X=0;$.push(X);let U=1/(Y-2),G=-U,E=1+U,N=[G,G,E,G,E,E,G,G,E,E,G,E],q=6,R=6,F=3,O=2,D=1,M=new Float32Array(F*R*q),k=new Float32Array(O*R*q),I=new Float32Array(D*R*q);for(let _=0;_<q;_++){let w=_%3*2/3-1,y=_>2?0:-1,L=[w,y,0,w+0.6666666666666666,y,0,w+0.6666666666666666,y+1,0,w,y,0,w+0.6666666666666666,y+1,0,w,y+1,0];M.set(L,F*R*_),k.set(N,O*R*_);let z=[_,_,_,_,_,_];I.set(z,D*R*_)}let P=new dJ;if(P.setAttribute("position",new K0(M,F)),P.setAttribute("uv",new K0(k,O)),P.setAttribute("faceIndex",new K0(I,D)),Q.push(P),W>P7)W--}return{lodPlanes:Q,sizeLods:Z,sigmas:$}}function vU(J,Q,Z){let $=new Z8(J,Q,Z);return $.texture.mapping=G7,$.texture.name="PMREM.cubeUv",$.scissorTest=!0,$}function P$(J,Q,Z,$,W){J.viewport.set(Q,Z,$,W),J.scissor.set(Q,Z,$,W)}function eq(J,Q,Z){let $=new Float32Array(T7),W=new A(0,1,0);return new i0({name:"SphericalGaussianBlur",defines:{n:T7,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:$},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:lK(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:j8,depthTest:!1,depthWrite:!1})}function fU(){return new i0({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lK(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:j8,depthTest:!1,depthWrite:!1})}function bU(){return new i0({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lK(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:j8,depthTest:!1,depthWrite:!1})}function lK(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JD(J){let Q=/*@__PURE__*/new WeakMap,Z=null;function $(Y){if(Y&&Y.isTexture){let X=Y.mapping,U=X===Y6||X===X6,G=X===z9||X===i8;if(U||G){let E=Q.get(Y),N=E!==void 0?E.texture.pmremVersion:0;if(Y.isRenderTargetTexture&&Y.pmremVersion!==N){if(Z===null)Z=new S$(J);return E=U?Z.fromEquirectangular(Y,E):Z.fromCubemap(Y,E),E.texture.pmremVersion=Y.pmremVersion,Q.set(Y,E),E.texture}else if(E!==void 0)return E.texture;else{let q=Y.image;if(U&&q&&q.height>0||G&&q&&W(q)){if(Z===null)Z=new S$(J);return E=U?Z.fromEquirectangular(Y):Z.fromCubemap(Y),E.texture.pmremVersion=Y.pmremVersion,Q.set(Y,E),Y.addEventListener("dispose",H),E.texture}else return null}}}return Y}function W(Y){let X=0,U=6;for(let G=0;G<U;G++)if(Y[G]!==void 0)X++;return X===U}function H(Y){let X=Y.target;X.removeEventListener("dispose",H);let U=Q.get(X);if(U!==void 0)Q.delete(X),U.dispose()}function K(){if(Q=/*@__PURE__*/new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:$,dispose:K}}function QD(J){let Q={};function Z($){if(Q[$]!==void 0)return Q[$];let W;switch($){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension($)}return Q[$]=W,W}return{has:function($){return Z($)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function($){let W=Z($);if(W===null)A9("THREE.WebGLRenderer: "+$+" extension not supported.");return W}}}function ZD(J,Q,Z,$){let W={},H=/*@__PURE__*/new WeakMap;function K(E){let N=E.target;if(N.index!==null)Q.remove(N.index);for(let R in N.attributes)Q.remove(N.attributes[R]);N.removeEventListener("dispose",K),delete W[N.id];let q=H.get(N);if(q)Q.remove(q),H.delete(N);if($.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;Z.memory.geometries--}function Y(E,N){if(W[N.id]===!0)return N;return N.addEventListener("dispose",K),W[N.id]=!0,Z.memory.geometries++,N}function X(E){let N=E.attributes;for(let q in N)Q.update(N[q],J.ARRAY_BUFFER)}function U(E){let N=[],q=E.index,R=E.attributes.position,F=0;if(q!==null){let M=q.array;F=q.version;for(let k=0,I=M.length;k<I;k+=3){let P=M[k+0],_=M[k+1],w=M[k+2];N.push(P,_,_,w,w,P)}}else if(R!==void 0){let M=R.array;F=R.version;for(let k=0,I=M.length/3-1;k<I;k+=3){let P=k+0,_=k+1,w=k+2;N.push(P,_,_,w,w,P)}}else return;let O=new((AH(N))?F6:R6)(N,1);O.version=F;let D=H.get(E);if(D)Q.remove(D);H.set(E,O)}function G(E){let N=H.get(E);if(N){let q=E.index;if(q!==null){if(N.version<q.version)U(E)}}else U(E);return H.get(E)}return{get:Y,update:X,getWireframeAttribute:G}}function $D(J,Q,Z){let $;function W(N){$=N}let H,K;function Y(N){H=N.type,K=N.bytesPerElement}function X(N,q){J.drawElements($,q,H,N*K),Z.update(q,$,1)}function U(N,q,R){if(R===0)return;J.drawElementsInstanced($,q,H,N*K,R),Z.update(q,$,R)}function G(N,q,R){if(R===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL($,q,0,H,N,0,R);let O=0;for(let D=0;D<R;D++)O+=q[D];Z.update(O,$,1)}function E(N,q,R,F){if(R===0)return;let O=Q.get("WEBGL_multi_draw");if(O===null)for(let D=0;D<N.length;D++)U(N[D]/K,q[D],F[D]);else{O.multiDrawElementsInstancedWEBGL($,q,0,H,N,0,F,0,R);let D=0;for(let M=0;M<R;M++)D+=q[M]*F[M];Z.update(D,$,1)}}this.setMode=W,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=E}function WD(J){let Q={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function $(H,K,Y){switch(Z.calls++,K){case J.TRIANGLES:Z.triangles+=Y*(H/3);break;case J.LINES:Z.lines+=Y*(H/2);break;case J.LINE_STRIP:Z.lines+=Y*(H-1);break;case J.LINE_LOOP:Z.lines+=Y*H;break;case J.POINTS:Z.points+=Y*H;break;default:break}}function W(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:Q,render:Z,programs:null,autoReset:!0,reset:W,update:$}}function HD(J,Q,Z){let $=/*@__PURE__*/new WeakMap,W=new eJ;function H(K,Y,X){let U=K.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,E=G!==void 0?G.length:0,N=$.get(Y);if(N===void 0||N.count!==E){let L=function(){w.dispose(),$.delete(Y),Y.removeEventListener("dispose",L)};if(N!==void 0)N.texture.dispose();let q=Y.morphAttributes.position!==void 0,R=Y.morphAttributes.normal!==void 0,F=Y.morphAttributes.color!==void 0,O=Y.morphAttributes.position||[],D=Y.morphAttributes.normal||[],M=Y.morphAttributes.color||[],k=0;if(q===!0)k=1;if(R===!0)k=2;if(F===!0)k=3;let I=Y.attributes.position.count*k,P=1;if(I>Q.maxTextureSize)P=Math.ceil(I/Q.maxTextureSize),I=Q.maxTextureSize;let _=new Float32Array(I*P*4*E),w=new P9(_,I,P,E);w.type=v8,w.needsUpdate=!0;let y=k*4;for(let z=0;z<E;z++){let S=O[z],g=D[z],p=M[z],l=I*P*4*z;for(let s=0;s<S.count;s++){let d=s*y;if(q===!0)W.fromBufferAttribute(S,s),_[l+d+0]=W.x,_[l+d+1]=W.y,_[l+d+2]=W.z,_[l+d+3]=0;if(R===!0)W.fromBufferAttribute(g,s),_[l+d+4]=W.x,_[l+d+5]=W.y,_[l+d+6]=W.z,_[l+d+7]=0;if(F===!0)W.fromBufferAttribute(p,s),_[l+d+8]=W.x,_[l+d+9]=W.y,_[l+d+10]=W.z,_[l+d+11]=p.itemSize===4?W.w:1}}N={count:E,texture:w,size:new i(I,P)},$.set(Y,N),Y.addEventListener("dispose",L)}if(K.isInstancedMesh===!0&&K.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",K.morphTexture,Z);else{let q=0;for(let F=0;F<U.length;F++)q+=U[F];let R=Y.morphTargetsRelative?1:1-q;X.getUniforms().setValue(J,"morphTargetBaseInfluence",R),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",N.texture,Z),X.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:H}}function KD(J,Q,Z,$){let W=/*@__PURE__*/new WeakMap;function H(X){let U=$.render.frame,G=X.geometry,E=Q.get(X,G);if(W.get(E)!==U)Q.update(E),W.set(E,U);if(X.isInstancedMesh){if(X.hasEventListener("dispose",Y)===!1)X.addEventListener("dispose",Y);if(W.get(X)!==U){if(Z.update(X.instanceMatrix,J.ARRAY_BUFFER),X.instanceColor!==null)Z.update(X.instanceColor,J.ARRAY_BUFFER);W.set(X,U)}}if(X.isSkinnedMesh){let N=X.skeleton;if(W.get(N)!==U)N.update(),W.set(N,U)}return E}function K(){W=/*@__PURE__*/new WeakMap}function Y(X){let U=X.target;if(U.removeEventListener("dispose",Y),Z.remove(U.instanceMatrix),U.instanceColor!==null)Z.remove(U.instanceColor)}return{update:H,dispose:K}}var QG=/*@__PURE__*/new E0,hU=/*@__PURE__*/new I6(1,1),ZG=/*@__PURE__*/new P9,$G=/*@__PURE__*/new F7,WG=/*@__PURE__*/new S9,xU=[],gU=[],pU=new Float32Array(16),mU=new Float32Array(9),lU=new Float32Array(4);function S7(J,Q,Z){let $=J[0];if($<=0||$>0)return J;let W=Q*Z,H=xU[W];if(H===void 0)H=new Float32Array(W),xU[W]=H;if(Q!==0){$.toArray(H,0);for(let K=1,Y=0;K!==Q;++K)Y+=Z,J[K].toArray(H,Y)}return H}function V0(J,Q){if(J.length!==Q.length)return!1;for(let Z=0,$=J.length;Z<$;Z++)if(J[Z]!==Q[Z])return!1;return!0}function L0(J,Q){for(let Z=0,$=Q.length;Z<$;Z++)J[Z]=Q[Z]}function j$(J,Q){let Z=gU[Q];if(Z===void 0)Z=new Int32Array(Q),gU[Q]=Z;for(let $=0;$!==Q;++$)Z[$]=J.allocateTextureUnit();return Z}function YD(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1f(this.addr,Q),Z[0]=Q}function XD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(V0(Z,Q))return;J.uniform2fv(this.addr,Q),L0(Z,Q)}}function UD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else if(Q.r!==void 0){if(Z[0]!==Q.r||Z[1]!==Q.g||Z[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),Z[0]=Q.r,Z[1]=Q.g,Z[2]=Q.b}else{if(V0(Z,Q))return;J.uniform3fv(this.addr,Q),L0(Z,Q)}}function GD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(V0(Z,Q))return;J.uniform4fv(this.addr,Q),L0(Z,Q)}}function ED(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(V0(Z,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),L0(Z,Q)}else{if(V0(Z,$))return;lU.set($),J.uniformMatrix2fv(this.addr,!1,lU),L0(Z,$)}}function ND(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(V0(Z,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),L0(Z,Q)}else{if(V0(Z,$))return;mU.set($),J.uniformMatrix3fv(this.addr,!1,mU),L0(Z,$)}}function qD(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(V0(Z,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),L0(Z,Q)}else{if(V0(Z,$))return;pU.set($),J.uniformMatrix4fv(this.addr,!1,pU),L0(Z,$)}}function DD(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1i(this.addr,Q),Z[0]=Q}function OD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(V0(Z,Q))return;J.uniform2iv(this.addr,Q),L0(Z,Q)}}function RD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(V0(Z,Q))return;J.uniform3iv(this.addr,Q),L0(Z,Q)}}function FD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(V0(Z,Q))return;J.uniform4iv(this.addr,Q),L0(Z,Q)}}function kD(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1ui(this.addr,Q),Z[0]=Q}function MD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(V0(Z,Q))return;J.uniform2uiv(this.addr,Q),L0(Z,Q)}}function VD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(V0(Z,Q))return;J.uniform3uiv(this.addr,Q),L0(Z,Q)}}function LD(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(V0(Z,Q))return;J.uniform4uiv(this.addr,Q),L0(Z,Q)}}function BD(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;let H;if(this.type===J.SAMPLER_2D_SHADOW)hU.compareFunction=PZ,H=hU;else H=QG;Z.setTexture2D(Q||H,W)}function zD(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTexture3D(Q||$G,W)}function ID(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTextureCube(Q||WG,W)}function _D(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTexture2DArray(Q||ZG,W)}function CD(J){switch(J){case 5126:return YD;case 35664:return XD;case 35665:return UD;case 35666:return GD;case 35674:return ED;case 35675:return ND;case 35676:return qD;case 5124:case 35670:return DD;case 35667:case 35671:return OD;case 35668:case 35672:return RD;case 35669:case 35673:return FD;case 5125:return kD;case 36294:return MD;case 36295:return VD;case 36296:return LD;case 35678:case 36198:case 36298:case 36306:case 35682:return BD;case 35679:case 36299:case 36307:return zD;case 35680:case 36300:case 36308:case 36293:return ID;case 36289:case 36303:case 36311:case 36292:return _D}}function wD(J,Q){J.uniform1fv(this.addr,Q)}function AD(J,Q){let Z=S7(Q,this.size,2);J.uniform2fv(this.addr,Z)}function PD(J,Q){let Z=S7(Q,this.size,3);J.uniform3fv(this.addr,Z)}function TD(J,Q){let Z=S7(Q,this.size,4);J.uniform4fv(this.addr,Z)}function SD(J,Q){let Z=S7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function jD(J,Q){let Z=S7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function yD(J,Q){let Z=S7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function vD(J,Q){J.uniform1iv(this.addr,Q)}function fD(J,Q){J.uniform2iv(this.addr,Q)}function bD(J,Q){J.uniform3iv(this.addr,Q)}function hD(J,Q){J.uniform4iv(this.addr,Q)}function xD(J,Q){J.uniform1uiv(this.addr,Q)}function gD(J,Q){J.uniform2uiv(this.addr,Q)}function pD(J,Q){J.uniform3uiv(this.addr,Q)}function mD(J,Q){J.uniform4uiv(this.addr,Q)}function lD(J,Q,Z){let $=this.cache,W=Q.length,H=j$(Z,W);if(!V0($,H))J.uniform1iv(this.addr,H),L0($,H);for(let K=0;K!==W;++K)Z.setTexture2D(Q[K]||QG,H[K])}function dD(J,Q,Z){let $=this.cache,W=Q.length,H=j$(Z,W);if(!V0($,H))J.uniform1iv(this.addr,H),L0($,H);for(let K=0;K!==W;++K)Z.setTexture3D(Q[K]||$G,H[K])}function uD(J,Q,Z){let $=this.cache,W=Q.length,H=j$(Z,W);if(!V0($,H))J.uniform1iv(this.addr,H),L0($,H);for(let K=0;K!==W;++K)Z.setTextureCube(Q[K]||WG,H[K])}function cD(J,Q,Z){let $=this.cache,W=Q.length,H=j$(Z,W);if(!V0($,H))J.uniform1iv(this.addr,H),L0($,H);for(let K=0;K!==W;++K)Z.setTexture2DArray(Q[K]||ZG,H[K])}function nD(J){switch(J){case 5126:return wD;case 35664:return AD;case 35665:return PD;case 35666:return TD;case 35674:return SD;case 35675:return jD;case 35676:return yD;case 5124:case 35670:return vD;case 35667:case 35671:return fD;case 35668:case 35672:return bD;case 35669:case 35673:return hD;case 5125:return xD;case 36294:return gD;case 36295:return pD;case 36296:return mD;case 35678:case 36198:case 36298:case 36306:case 35682:return lD;case 35679:case 36299:case 36307:return dD;case 35680:case 36300:case 36308:case 36293:return uD;case 36289:case 36303:case 36311:case 36292:return cD}}class HG{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.setValue=CD(Q.type)}}class KG{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=nD(Q.type)}}class YG{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,Z){let $=this.seq;for(let W=0,H=$.length;W!==H;++W){let K=$[W];K.setValue(J,Q[K.id],Z)}}}var pK=/(\w+)(\])?(\[|\.)?/g;function dU(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function sD(J,Q,Z){let $=J.name,W=$.length;pK.lastIndex=0;while(!0){let H=pK.exec($),K=pK.lastIndex,Y=H[1],X=H[2]==="]",U=H[3];if(X)Y=Y|0;if(U===void 0||U==="["&&K+2===W){dU(Z,U===void 0?new HG(Y,J,Q):new KG(Y,J,Q));break}else{let E=Z.map[Y];if(E===void 0)E=new YG(Y),dU(Z,E);Z=E}}}class r6{constructor(J,Q){this.seq=[],this.map={};let Z=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let $=0;$<Z;++$){let W=J.getActiveUniform(Q,$),H=J.getUniformLocation(Q,W.name);sD(W,H,this)}}setValue(J,Q,Z,$){let W=this.map[Q];if(W!==void 0)W.setValue(J,Z,$)}setOptional(J,Q,Z){let $=Q[Z];if($!==void 0)this.setValue(J,Z,$)}static upload(J,Q,Z,$){for(let W=0,H=Q.length;W!==H;++W){let K=Q[W],Y=Z[K.id];if(Y.needsUpdate!==!1)K.setValue(J,Y.value,$)}}static seqWithValue(J,Q){let Z=[];for(let $=0,W=J.length;$!==W;++$){let H=J[$];if(H.id in Q)Z.push(H)}return Z}}function uU(J,Q,Z){let $=J.createShader(Q);return J.shaderSource($,Z),J.compileShader($),$}var iD=37297,oD=0;function aD(J,Q){let Z=J.split(`
`),$=[],W=Math.max(Q-6,0),H=Math.min(Q+6,Z.length);for(let K=W;K<H;K++){let Y=K+1;$.push(`${Y===Q?">":" "} ${Y}: ${Z[K]}`)}return $.join(`
`)}var cU=/*@__PURE__*/new pJ;function rD(J){rJ._getMatrix(cU,rJ.workingColorSpace,J);let Q=`mat3( ${cU.elements.map((Z)=>Z.toFixed(4))} )`;switch(rJ.getTransfer(J)){case AZ:return[Q,"LinearTransferOETF"];case Y0:return[Q,"sRGBTransferOETF"];default:return[Q,"LinearTransferOETF"]}}function nU(J,Q,Z){let $=J.getShaderParameter(Q,J.COMPILE_STATUS),W=J.getShaderInfoLog(Q).trim();if($&&W==="")return"";let H=/ERROR: 0:(\d+)/.exec(W);if(H){let K=parseInt(H[1]);return Z.toUpperCase()+`

`+W+`

`+aD(J.getShaderSource(Q),K)}else return W}function tD(J,Q){let Z=rD(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( value.rgb * ${Z[0]}, value.a ) );`,"}"].join(`
`)}function eD(J,Q){let Z;switch(Q){case iW:Z="Linear";break;case oW:Z="Reinhard";break;case aW:Z="Cineon";break;case rW:Z="ACESFilmic";break;case eW:Z="AgX";break;case JH:Z="Neutral";break;case tW:Z="Custom";break;default:Z="Linear"}return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var T$=/*@__PURE__*/new A;function J5(){rJ.getLuminanceCoefficients(T$);let J=T$.x.toFixed(4),Q=T$.y.toFixed(4),Z=T$.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Q5(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(a6).join(`
`)}function Z5(J){let Q=[];for(let Z in J){let $=J[Z];if($===!1)continue;Q.push("#define "+Z+" "+$)}return Q.join(`
`)}function $5(J,Q){let Z={},$=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<$;W++){let H=J.getActiveAttrib(Q,W),K=H.name,Y=1;if(H.type===J.FLOAT_MAT2)Y=2;if(H.type===J.FLOAT_MAT3)Y=3;if(H.type===J.FLOAT_MAT4)Y=4;Z[K]={type:H.type,location:J.getAttribLocation(Q,K),locationSize:Y}}return Z}function a6(J){return J!==""}function sU(J,Q){let Z=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function iU(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var W5=/^[ \t]*#include +<([\w\d./]+)>/gm;function mK(J){return J.replace(W5,K5)}var H5=/*@__PURE__*/new Map;function K5(J,Q){let Z=cJ[Q];if(Z===void 0){let $=H5.get(Q);if($!==void 0)Z=cJ[$];else throw new Error("Can not resolve #include <"+Q+">")}return mK(Z)}var Y5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oU(J){return J.replace(Y5,X5)}function X5(J,Q,Z,$){let W="";for(let H=parseInt(Q);H<parseInt(Z);H++)W+=$.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return W}function aU(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}function U5(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===nQ)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===IW)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===G8)Q="SHADOWMAP_TYPE_VSM";return Q}function G5(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case z9:case i8:Q="ENVMAP_TYPE_CUBE";break;case G7:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function E5(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case i8:Q="ENVMAP_MODE_REFRACTION";break}return Q}function N5(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case cW:Q="ENVMAP_BLENDING_MULTIPLY";break;case nW:Q="ENVMAP_BLENDING_MIX";break;case sW:Q="ENVMAP_BLENDING_ADD";break}return Q}function q5(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let Z=Math.log2(Q)-2,$=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:$,maxMip:Z}}function D5(J,Q,Z,$){let W=J.getContext(),H=Z.defines,K=Z.vertexShader,Y=Z.fragmentShader,X=U5(Z),U=G5(Z),G=E5(Z),E=N5(Z),N=q5(Z),q=Q5(Z),R=Z5(H),F=W.createProgram(),O,D,M=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(O=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,R].filter(a6).join(`
`),O.length>0)O+=`
`;if(D=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,R].filter(a6).join(`
`),D.length>0)D+=`
`}else O=[aU(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,R,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+G:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+X:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Z.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(a6).join(`
`),D=[aU(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,R,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+U:"",Z.envMap?"#define "+G:"",Z.envMap?"#define "+E:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor||Z.batchingColor?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+X:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",Z.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==k8?"#define TONE_MAPPING":"",Z.toneMapping!==k8?cJ.tonemapping_pars_fragment:"",Z.toneMapping!==k8?eD("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",cJ.colorspace_pars_fragment,tD("linearToOutputTexel",Z.outputColorSpace),J5(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(a6).join(`
`);if(K=mK(K),K=sU(K,Z),K=iU(K,Z),Y=mK(Y),Y=sU(Y,Z),Y=iU(Y,Z),K=oU(K),Y=oU(Y),Z.isRawShaderMaterial!==!0)M=`#version 300 es
`,O=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,D=["#define varying in",Z.glslVersion===TZ?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===TZ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D;let k=M+O+K,I=M+D+Y,P=uU(W,W.VERTEX_SHADER,k),_=uU(W,W.FRAGMENT_SHADER,I);if(W.attachShader(F,P),W.attachShader(F,_),Z.index0AttributeName!==void 0)W.bindAttribLocation(F,0,Z.index0AttributeName);else if(Z.morphTargets===!0)W.bindAttribLocation(F,0,"position");W.linkProgram(F);function w(S){if(J.debug.checkShaderErrors){let g=W.getProgramInfoLog(F).trim(),p=W.getShaderInfoLog(P).trim(),l=W.getShaderInfoLog(_).trim(),s=!0,d=!0;if(W.getProgramParameter(F,W.LINK_STATUS)===!1)if(s=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,F,P,_);else{let ZJ=nU(W,P,"vertex"),m=nU(W,_,"fragment")}else if(g!=="");else if(p===""||l==="")d=!1;if(d)S.diagnostics={runnable:s,programLog:g,vertexShader:{log:p,prefix:O},fragmentShader:{log:l,prefix:D}}}W.deleteShader(P),W.deleteShader(_),y=new r6(W,F),L=$5(W,F)}let y;this.getUniforms=function(){if(y===void 0)w(this);return y};let L;this.getAttributes=function(){if(L===void 0)w(this);return L};let z=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(z===!1)z=W.getProgramParameter(F,iD);return z},this.destroy=function(){$.releaseStatesOfProgram(this),W.deleteProgram(F),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=oD++,this.cacheKey=Q,this.usedTimes=1,this.program=F,this.vertexShader=P,this.fragmentShader=_,this}var O5=0;class XG{constructor(){this.shaderCache=/*@__PURE__*/new Map,this.materialCache=/*@__PURE__*/new Map}update(J){let{vertexShader:Q,fragmentShader:Z}=J,$=this._getShaderStage(Q),W=this._getShaderStage(Z),H=this._getShaderCacheForMaterial(J);if(H.has($)===!1)H.add($),$.usedTimes++;if(H.has(W)===!1)H.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let Z of Q)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,Z=Q.get(J);if(Z===void 0)Z=/*@__PURE__*/new Set,Q.set(J,Z);return Z}_getShaderStage(J){let Q=this.shaderCache,Z=Q.get(J);if(Z===void 0)Z=new UG(J),Q.set(J,Z);return Z}}class UG{constructor(J){this.id=O5++,this.code=J,this.usedTimes=0}}function R5(J,Q,Z,$,W,H,K){let Y=new k7,X=new XG,U=/*@__PURE__*/new Set,G=[],E=W.logarithmicDepthBuffer,N=W.vertexTextures,q=W.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function F(L){if(U.add(L),L===0)return"uv";return`uv${L}`}function O(L,z,S,g,p){let l=g.fog,s=p.geometry,d=L.isMeshStandardMaterial?g.environment:null,ZJ=(L.isMeshStandardMaterial?Z:Q).get(L.envMap||d),m=!!ZJ&&ZJ.mapping===G7?ZJ.image.height:null,EJ=R[L.type];if(L.precision!==null){if(q=W.getMaxPrecision(L.precision),q!==L.precision);}let UJ=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,SJ=UJ!==void 0?UJ.length:0,sJ=0;if(s.morphAttributes.position!==void 0)sJ=1;if(s.morphAttributes.normal!==void 0)sJ=2;if(s.morphAttributes.color!==void 0)sJ=3;let c,KJ,wJ,IJ;if(EJ){let $0=q8[EJ];c=$0.vertexShader,KJ=$0.fragmentShader}else c=L.vertexShader,KJ=L.fragmentShader,X.update(L),wJ=X.getVertexShaderID(L),IJ=X.getFragmentShaderID(L);let YJ=J.getRenderTarget(),oJ=J.state.buffers.depth.getReversed(),yJ=p.isInstancedMesh===!0,mJ=p.isBatchedMesh===!0,JJ=!!L.map,t=!!L.matcap,C=!!ZJ,zJ=!!L.aoMap,WJ=!!L.lightMap,CJ=!!L.bumpMap,e=!!L.normalMap,vJ=!!L.displacementMap,DJ=!!L.emissiveMap,_J=!!L.metalnessMap,T=!!L.roughnessMap,V=L.anisotropy>0,b=L.clearcoat>0,o=L.dispersion>0,r=L.iridescence>0,u=L.sheen>0,PJ=L.transmission>0,GJ=V&&!!L.anisotropyMap,FJ=b&&!!L.clearcoatMap,hJ=b&&!!L.clearcoatNormalMap,HJ=b&&!!L.clearcoatRoughnessMap,kJ=r&&!!L.iridescenceMap,aJ=r&&!!L.iridescenceThicknessMap,fJ=u&&!!L.sheenColorMap,VJ=u&&!!L.sheenRoughnessMap,uJ=!!L.specularMap,iJ=!!L.specularColorMap,U0=!!L.specularIntensityMap,f=PJ&&!!L.transmissionMap,$J=PJ&&!!L.thicknessMap,n=!!L.gradientMap,a=!!L.alphaMap,RJ=L.alphaTest>0,OJ=!!L.alphaHash,nJ=!!L.extensions,N0=k8;if(L.toneMapped){if(YJ===null||YJ.isXRRenderTarget===!0)N0=J.toneMapping}let _0={shaderID:EJ,shaderType:L.type,shaderName:L.name,vertexShader:c,fragmentShader:KJ,defines:L.defines,customVertexShaderID:wJ,customFragmentShaderID:IJ,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:q,batching:mJ,batchingColor:mJ&&p._colorsTexture!==null,instancing:yJ,instancingColor:yJ&&p.instanceColor!==null,instancingMorph:yJ&&p.morphTexture!==null,supportsVertexTextures:N,outputColorSpace:YJ===null?J.outputColorSpace:YJ.isXRRenderTarget===!0?YJ.texture.colorSpace:O7,alphaToCoverage:!!L.alphaToCoverage,map:JJ,matcap:t,envMap:C,envMapMode:C&&ZJ.mapping,envMapCubeUVHeight:m,aoMap:zJ,lightMap:WJ,bumpMap:CJ,normalMap:e,displacementMap:N&&vJ,emissiveMap:DJ,normalMapObjectSpace:e&&L.normalMapType===FH,normalMapTangentSpace:e&&L.normalMapType===RH,metalnessMap:_J,roughnessMap:T,anisotropy:V,anisotropyMap:GJ,clearcoat:b,clearcoatMap:FJ,clearcoatNormalMap:hJ,clearcoatRoughnessMap:HJ,dispersion:o,iridescence:r,iridescenceMap:kJ,iridescenceThicknessMap:aJ,sheen:u,sheenColorMap:fJ,sheenRoughnessMap:VJ,specularMap:uJ,specularColorMap:iJ,specularIntensityMap:U0,transmission:PJ,transmissionMap:f,thicknessMap:$J,gradientMap:n,opaque:L.transparent===!1&&L.blending===X7&&L.alphaToCoverage===!1,alphaMap:a,alphaTest:RJ,alphaHash:OJ,combine:L.combine,mapUv:JJ&&F(L.map.channel),aoMapUv:zJ&&F(L.aoMap.channel),lightMapUv:WJ&&F(L.lightMap.channel),bumpMapUv:CJ&&F(L.bumpMap.channel),normalMapUv:e&&F(L.normalMap.channel),displacementMapUv:vJ&&F(L.displacementMap.channel),emissiveMapUv:DJ&&F(L.emissiveMap.channel),metalnessMapUv:_J&&F(L.metalnessMap.channel),roughnessMapUv:T&&F(L.roughnessMap.channel),anisotropyMapUv:GJ&&F(L.anisotropyMap.channel),clearcoatMapUv:FJ&&F(L.clearcoatMap.channel),clearcoatNormalMapUv:hJ&&F(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:HJ&&F(L.clearcoatRoughnessMap.channel),iridescenceMapUv:kJ&&F(L.iridescenceMap.channel),iridescenceThicknessMapUv:aJ&&F(L.iridescenceThicknessMap.channel),sheenColorMapUv:fJ&&F(L.sheenColorMap.channel),sheenRoughnessMapUv:VJ&&F(L.sheenRoughnessMap.channel),specularMapUv:uJ&&F(L.specularMap.channel),specularColorMapUv:iJ&&F(L.specularColorMap.channel),specularIntensityMapUv:U0&&F(L.specularIntensityMap.channel),transmissionMapUv:f&&F(L.transmissionMap.channel),thicknessMapUv:$J&&F(L.thicknessMap.channel),alphaMapUv:a&&F(L.alphaMap.channel),vertexTangents:!!s.attributes.tangent&&(e||V),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!s.attributes.color&&s.attributes.color.itemSize===4,pointsUvs:p.isPoints===!0&&!!s.attributes.uv&&(JJ||a),fog:!!l,useFog:L.fog===!0,fogExp2:!!l&&l.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:E,reverseDepthBuffer:oJ,skinning:p.isSkinnedMesh===!0,morphTargets:s.morphAttributes.position!==void 0,morphNormals:s.morphAttributes.normal!==void 0,morphColors:s.morphAttributes.color!==void 0,morphTargetsCount:SJ,morphTextureStride:sJ,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:L.dithering,shadowMapEnabled:J.shadowMap.enabled&&S.length>0,shadowMapType:J.shadowMap.type,toneMapping:N0,decodeVideoTexture:JJ&&L.map.isVideoTexture===!0&&rJ.getTransfer(L.map.colorSpace)===Y0,decodeVideoTextureEmissive:DJ&&L.emissiveMap.isVideoTexture===!0&&rJ.getTransfer(L.emissiveMap.colorSpace)===Y0,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===E8,flipSided:L.side===d0,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:nJ&&L.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nJ&&L.extensions.multiDraw===!0||mJ)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return _0.vertexUv1s=U.has(1),_0.vertexUv2s=U.has(2),_0.vertexUv3s=U.has(3),U.clear(),_0}function D(L){let z=[];if(L.shaderID)z.push(L.shaderID);else z.push(L.customVertexShaderID),z.push(L.customFragmentShaderID);if(L.defines!==void 0)for(let S in L.defines)z.push(S),z.push(L.defines[S]);if(L.isRawShaderMaterial===!1)M(z,L),k(z,L),z.push(J.outputColorSpace);return z.push(L.customProgramCacheKey),z.join()}function M(L,z){L.push(z.precision),L.push(z.outputColorSpace),L.push(z.envMapMode),L.push(z.envMapCubeUVHeight),L.push(z.mapUv),L.push(z.alphaMapUv),L.push(z.lightMapUv),L.push(z.aoMapUv),L.push(z.bumpMapUv),L.push(z.normalMapUv),L.push(z.displacementMapUv),L.push(z.emissiveMapUv),L.push(z.metalnessMapUv),L.push(z.roughnessMapUv),L.push(z.anisotropyMapUv),L.push(z.clearcoatMapUv),L.push(z.clearcoatNormalMapUv),L.push(z.clearcoatRoughnessMapUv),L.push(z.iridescenceMapUv),L.push(z.iridescenceThicknessMapUv),L.push(z.sheenColorMapUv),L.push(z.sheenRoughnessMapUv),L.push(z.specularMapUv),L.push(z.specularColorMapUv),L.push(z.specularIntensityMapUv),L.push(z.transmissionMapUv),L.push(z.thicknessMapUv),L.push(z.combine),L.push(z.fogExp2),L.push(z.sizeAttenuation),L.push(z.morphTargetsCount),L.push(z.morphAttributeCount),L.push(z.numDirLights),L.push(z.numPointLights),L.push(z.numSpotLights),L.push(z.numSpotLightMaps),L.push(z.numHemiLights),L.push(z.numRectAreaLights),L.push(z.numDirLightShadows),L.push(z.numPointLightShadows),L.push(z.numSpotLightShadows),L.push(z.numSpotLightShadowsWithMaps),L.push(z.numLightProbes),L.push(z.shadowMapType),L.push(z.toneMapping),L.push(z.numClippingPlanes),L.push(z.numClipIntersection),L.push(z.depthPacking)}function k(L,z){if(Y.disableAll(),z.supportsVertexTextures)Y.enable(0);if(z.instancing)Y.enable(1);if(z.instancingColor)Y.enable(2);if(z.instancingMorph)Y.enable(3);if(z.matcap)Y.enable(4);if(z.envMap)Y.enable(5);if(z.normalMapObjectSpace)Y.enable(6);if(z.normalMapTangentSpace)Y.enable(7);if(z.clearcoat)Y.enable(8);if(z.iridescence)Y.enable(9);if(z.alphaTest)Y.enable(10);if(z.vertexColors)Y.enable(11);if(z.vertexAlphas)Y.enable(12);if(z.vertexUv1s)Y.enable(13);if(z.vertexUv2s)Y.enable(14);if(z.vertexUv3s)Y.enable(15);if(z.vertexTangents)Y.enable(16);if(z.anisotropy)Y.enable(17);if(z.alphaHash)Y.enable(18);if(z.batching)Y.enable(19);if(z.dispersion)Y.enable(20);if(z.batchingColor)Y.enable(21);if(L.push(Y.mask),Y.disableAll(),z.fog)Y.enable(0);if(z.useFog)Y.enable(1);if(z.flatShading)Y.enable(2);if(z.logarithmicDepthBuffer)Y.enable(3);if(z.reverseDepthBuffer)Y.enable(4);if(z.skinning)Y.enable(5);if(z.morphTargets)Y.enable(6);if(z.morphNormals)Y.enable(7);if(z.morphColors)Y.enable(8);if(z.premultipliedAlpha)Y.enable(9);if(z.shadowMapEnabled)Y.enable(10);if(z.doubleSided)Y.enable(11);if(z.flipSided)Y.enable(12);if(z.useDepthPacking)Y.enable(13);if(z.dithering)Y.enable(14);if(z.transmission)Y.enable(15);if(z.sheen)Y.enable(16);if(z.opaque)Y.enable(17);if(z.pointsUvs)Y.enable(18);if(z.decodeVideoTexture)Y.enable(19);if(z.decodeVideoTextureEmissive)Y.enable(20);if(z.alphaToCoverage)Y.enable(21);L.push(Y.mask)}function I(L){let z=R[L.type],S;if(z){let g=q8[z];S=gH.clone(g.uniforms)}else S=L.uniforms;return S}function P(L,z){let S;for(let g=0,p=G.length;g<p;g++){let l=G[g];if(l.cacheKey===z){S=l,++S.usedTimes;break}}if(S===void 0)S=new D5(J,z,L,H),G.push(S);return S}function _(L){if(--L.usedTimes===0){let z=G.indexOf(L);G[z]=G[G.length-1],G.pop(),L.destroy()}}function w(L){X.remove(L)}function y(){X.dispose()}return{getParameters:O,getProgramCacheKey:D,getUniforms:I,acquireProgram:P,releaseProgram:_,releaseShaderCache:w,programs:G,dispose:y}}function F5(){let J=/*@__PURE__*/new WeakMap;function Q(K){return J.has(K)}function Z(K){let Y=J.get(K);if(Y===void 0)Y={},J.set(K,Y);return Y}function $(K){J.delete(K)}function W(K,Y,X){J.get(K)[Y]=X}function H(){J=/*@__PURE__*/new WeakMap}return{has:Q,get:Z,remove:$,update:W,dispose:H}}function k5(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function rU(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function tU(){let J=[],Q=0,Z=[],$=[],W=[];function H(){Q=0,Z.length=0,$.length=0,W.length=0}function K(E,N,q,R,F,O){let D=J[Q];if(D===void 0)D={id:E.id,object:E,geometry:N,material:q,groupOrder:R,renderOrder:E.renderOrder,z:F,group:O},J[Q]=D;else D.id=E.id,D.object=E,D.geometry=N,D.material=q,D.groupOrder=R,D.renderOrder=E.renderOrder,D.z=F,D.group=O;return Q++,D}function Y(E,N,q,R,F,O){let D=K(E,N,q,R,F,O);if(q.transmission>0)$.push(D);else if(q.transparent===!0)W.push(D);else Z.push(D)}function X(E,N,q,R,F,O){let D=K(E,N,q,R,F,O);if(q.transmission>0)$.unshift(D);else if(q.transparent===!0)W.unshift(D);else Z.unshift(D)}function U(E,N){if(Z.length>1)Z.sort(E||k5);if($.length>1)$.sort(N||rU);if(W.length>1)W.sort(N||rU)}function G(){for(let E=Q,N=J.length;E<N;E++){let q=J[E];if(q.id===null)break;q.id=null,q.object=null,q.geometry=null,q.material=null,q.group=null}}return{opaque:Z,transmissive:$,transparent:W,init:H,push:Y,unshift:X,finish:G,sort:U}}function M5(){let J=/*@__PURE__*/new WeakMap;function Q($,W){let H=J.get($),K;if(H===void 0)K=new tU,J.set($,[K]);else if(W>=H.length)K=new tU,H.push(K);else K=H[W];return K}function Z(){J=/*@__PURE__*/new WeakMap}return{get:Q,dispose:Z}}function V5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"DirectionalLight":Z={direction:new A,color:new qJ};break;case"SpotLight":Z={position:new A,direction:new A,color:new qJ,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new A,color:new qJ,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new A,skyColor:new qJ,groundColor:new qJ};break;case"RectAreaLight":Z={color:new qJ,position:new A,halfWidth:new A,halfHeight:new A};break}return J[Q.id]=Z,Z}}}function L5(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=Z,Z}}}var B5=0;function z5(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function I5(J){let Q=new V5,Z=L5(),$={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)$.probe.push(new A);let W=new A,H=new jJ,K=new jJ;function Y(U){let G=0,E=0,N=0;for(let L=0;L<9;L++)$.probe[L].set(0,0,0);let q=0,R=0,F=0,O=0,D=0,M=0,k=0,I=0,P=0,_=0,w=0;U.sort(z5);for(let L=0,z=U.length;L<z;L++){let S=U[L],g=S.color,p=S.intensity,l=S.distance,s=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)G+=g.r*p,E+=g.g*p,N+=g.b*p;else if(S.isLightProbe){for(let d=0;d<9;d++)$.probe[d].addScaledVector(S.sh.coefficients[d],p);w++}else if(S.isDirectionalLight){let d=Q.get(S);if(d.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let ZJ=S.shadow,m=Z.get(S);m.shadowIntensity=ZJ.intensity,m.shadowBias=ZJ.bias,m.shadowNormalBias=ZJ.normalBias,m.shadowRadius=ZJ.radius,m.shadowMapSize=ZJ.mapSize,$.directionalShadow[q]=m,$.directionalShadowMap[q]=s,$.directionalShadowMatrix[q]=S.shadow.matrix,M++}$.directional[q]=d,q++}else if(S.isSpotLight){let d=Q.get(S);d.position.setFromMatrixPosition(S.matrixWorld),d.color.copy(g).multiplyScalar(p),d.distance=l,d.coneCos=Math.cos(S.angle),d.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),d.decay=S.decay,$.spot[F]=d;let ZJ=S.shadow;if(S.map){if($.spotLightMap[P]=S.map,P++,ZJ.updateMatrices(S),S.castShadow)_++}if($.spotLightMatrix[F]=ZJ.matrix,S.castShadow){let m=Z.get(S);m.shadowIntensity=ZJ.intensity,m.shadowBias=ZJ.bias,m.shadowNormalBias=ZJ.normalBias,m.shadowRadius=ZJ.radius,m.shadowMapSize=ZJ.mapSize,$.spotShadow[F]=m,$.spotShadowMap[F]=s,I++}F++}else if(S.isRectAreaLight){let d=Q.get(S);d.color.copy(g).multiplyScalar(p),d.halfWidth.set(S.width*0.5,0,0),d.halfHeight.set(0,S.height*0.5,0),$.rectArea[O]=d,O++}else if(S.isPointLight){let d=Q.get(S);if(d.color.copy(S.color).multiplyScalar(S.intensity),d.distance=S.distance,d.decay=S.decay,S.castShadow){let ZJ=S.shadow,m=Z.get(S);m.shadowIntensity=ZJ.intensity,m.shadowBias=ZJ.bias,m.shadowNormalBias=ZJ.normalBias,m.shadowRadius=ZJ.radius,m.shadowMapSize=ZJ.mapSize,m.shadowCameraNear=ZJ.camera.near,m.shadowCameraFar=ZJ.camera.far,$.pointShadow[R]=m,$.pointShadowMap[R]=s,$.pointShadowMatrix[R]=S.shadow.matrix,k++}$.point[R]=d,R++}else if(S.isHemisphereLight){let d=Q.get(S);d.skyColor.copy(S.color).multiplyScalar(p),d.groundColor.copy(S.groundColor).multiplyScalar(p),$.hemi[D]=d,D++}}if(O>0)if(J.has("OES_texture_float_linear")===!0)$.rectAreaLTC1=XJ.LTC_FLOAT_1,$.rectAreaLTC2=XJ.LTC_FLOAT_2;else $.rectAreaLTC1=XJ.LTC_HALF_1,$.rectAreaLTC2=XJ.LTC_HALF_2;$.ambient[0]=G,$.ambient[1]=E,$.ambient[2]=N;let y=$.hash;if(y.directionalLength!==q||y.pointLength!==R||y.spotLength!==F||y.rectAreaLength!==O||y.hemiLength!==D||y.numDirectionalShadows!==M||y.numPointShadows!==k||y.numSpotShadows!==I||y.numSpotMaps!==P||y.numLightProbes!==w)$.directional.length=q,$.spot.length=F,$.rectArea.length=O,$.point.length=R,$.hemi.length=D,$.directionalShadow.length=M,$.directionalShadowMap.length=M,$.pointShadow.length=k,$.pointShadowMap.length=k,$.spotShadow.length=I,$.spotShadowMap.length=I,$.directionalShadowMatrix.length=M,$.pointShadowMatrix.length=k,$.spotLightMatrix.length=I+P-_,$.spotLightMap.length=P,$.numSpotLightShadowsWithMaps=_,$.numLightProbes=w,y.directionalLength=q,y.pointLength=R,y.spotLength=F,y.rectAreaLength=O,y.hemiLength=D,y.numDirectionalShadows=M,y.numPointShadows=k,y.numSpotShadows=I,y.numSpotMaps=P,y.numLightProbes=w,$.version=B5++}function X(U,G){let E=0,N=0,q=0,R=0,F=0,O=G.matrixWorldInverse;for(let D=0,M=U.length;D<M;D++){let k=U[D];if(k.isDirectionalLight){let I=$.directional[E];I.direction.setFromMatrixPosition(k.matrixWorld),W.setFromMatrixPosition(k.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(O),E++}else if(k.isSpotLight){let I=$.spot[q];I.position.setFromMatrixPosition(k.matrixWorld),I.position.applyMatrix4(O),I.direction.setFromMatrixPosition(k.matrixWorld),W.setFromMatrixPosition(k.target.matrixWorld),I.direction.sub(W),I.direction.transformDirection(O),q++}else if(k.isRectAreaLight){let I=$.rectArea[R];I.position.setFromMatrixPosition(k.matrixWorld),I.position.applyMatrix4(O),K.identity(),H.copy(k.matrixWorld),H.premultiply(O),K.extractRotation(H),I.halfWidth.set(k.width*0.5,0,0),I.halfHeight.set(0,k.height*0.5,0),I.halfWidth.applyMatrix4(K),I.halfHeight.applyMatrix4(K),R++}else if(k.isPointLight){let I=$.point[N];I.position.setFromMatrixPosition(k.matrixWorld),I.position.applyMatrix4(O),N++}else if(k.isHemisphereLight){let I=$.hemi[F];I.direction.setFromMatrixPosition(k.matrixWorld),I.direction.transformDirection(O),F++}}}return{setup:Y,setupView:X,state:$}}function eU(J){let Q=new I5(J),Z=[],$=[];function W(G){U.camera=G,Z.length=0,$.length=0}function H(G){Z.push(G)}function K(G){$.push(G)}function Y(){Q.setup(Z)}function X(G){Q.setupView(Z,G)}let U={lightsArray:Z,shadowsArray:$,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:Y,setupLightsView:X,pushLight:H,pushShadow:K}}function _5(J){let Q=/*@__PURE__*/new WeakMap;function Z(W,H=0){let K=Q.get(W),Y;if(K===void 0)Y=new eU(J),Q.set(W,[Y]);else if(H>=K.length)Y=new eU(J),K.push(Y);else Y=K[H];return Y}function $(){Q=/*@__PURE__*/new WeakMap}return{get:Z,dispose:$}}var C5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function A5(J,Q,Z){let $=new j9,W=new i,H=new i,K=new eJ,Y=new d6({depthPacking:OH}),X=new u6,U={},G=Z.maxTextureSize,E={[L9]:d0,[d0]:L9,[E8]:E8},N=new i0({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new i},radius:{value:4}},vertexShader:C5,fragmentShader:w5}),q=N.clone();q.defines.HORIZONTAL_PASS=1;let R=new dJ;R.setAttribute("position",new K0(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let F=new O0(R,N),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nQ;let D=this.type;this.render=function(_,w,y){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(_.length===0)return;let L=J.getRenderTarget(),z=J.getActiveCubeFace(),S=J.getActiveMipmapLevel(),g=J.state;g.setBlending(j8),g.buffers.color.setClear(1,1,1,1),g.buffers.depth.setTest(!0),g.setScissorTest(!1);let p=D!==G8&&this.type===G8,l=D===G8&&this.type!==G8;for(let s=0,d=_.length;s<d;s++){let ZJ=_[s],m=ZJ.shadow;if(m===void 0)continue;if(m.autoUpdate===!1&&m.needsUpdate===!1)continue;W.copy(m.mapSize);let EJ=m.getFrameExtents();if(W.multiply(EJ),H.copy(m.mapSize),W.x>G||W.y>G){if(W.x>G)H.x=Math.floor(G/EJ.x),W.x=H.x*EJ.x,m.mapSize.x=H.x;if(W.y>G)H.y=Math.floor(G/EJ.y),W.y=H.y*EJ.y,m.mapSize.y=H.y}if(m.map===null||p===!0||l===!0){let SJ=this.type!==G8?{minFilter:I9,magFilter:I9}:{};if(m.map!==null)m.map.dispose();m.map=new Z8(W.x,W.y,SJ),m.map.texture.name=ZJ.name+".shadowMap",m.camera.updateProjectionMatrix()}J.setRenderTarget(m.map),J.clear();let UJ=m.getViewportCount();for(let SJ=0;SJ<UJ;SJ++){let sJ=m.getViewport(SJ);K.set(H.x*sJ.x,H.y*sJ.y,H.x*sJ.z,H.y*sJ.w),g.viewport(K),m.updateMatrices(ZJ,SJ),$=m.getFrustum(),I(w,y,m.camera,ZJ,this.type)}if(m.isPointLightShadow!==!0&&this.type===G8)M(m,y);m.needsUpdate=!1}D=this.type,O.needsUpdate=!1,J.setRenderTarget(L,z,S)};function M(_,w){let y=Q.update(F);if(N.defines.VSM_SAMPLES!==_.blurSamples)N.defines.VSM_SAMPLES=_.blurSamples,q.defines.VSM_SAMPLES=_.blurSamples,N.needsUpdate=!0,q.needsUpdate=!0;if(_.mapPass===null)_.mapPass=new Z8(W.x,W.y);N.uniforms.shadow_pass.value=_.map.texture,N.uniforms.resolution.value=_.mapSize,N.uniforms.radius.value=_.radius,J.setRenderTarget(_.mapPass),J.clear(),J.renderBufferDirect(w,null,y,N,F,null),q.uniforms.shadow_pass.value=_.mapPass.texture,q.uniforms.resolution.value=_.mapSize,q.uniforms.radius.value=_.radius,J.setRenderTarget(_.map),J.clear(),J.renderBufferDirect(w,null,y,q,F,null)}function k(_,w,y,L){let z=null,S=y.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(S!==void 0)z=S;else if(z=y.isPointLight===!0?X:Y,J.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let g=z.uuid,p=w.uuid,l=U[g];if(l===void 0)l={},U[g]=l;let s=l[p];if(s===void 0)s=z.clone(),l[p]=s,w.addEventListener("dispose",P);z=s}if(z.visible=w.visible,z.wireframe=w.wireframe,L===G8)z.side=w.shadowSide!==null?w.shadowSide:w.side;else z.side=w.shadowSide!==null?w.shadowSide:E[w.side];if(z.alphaMap=w.alphaMap,z.alphaTest=w.alphaTest,z.map=w.map,z.clipShadows=w.clipShadows,z.clippingPlanes=w.clippingPlanes,z.clipIntersection=w.clipIntersection,z.displacementMap=w.displacementMap,z.displacementScale=w.displacementScale,z.displacementBias=w.displacementBias,z.wireframeLinewidth=w.wireframeLinewidth,z.linewidth=w.linewidth,y.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let g=J.properties.get(z);g.light=y}return z}function I(_,w,y,L,z){if(_.visible===!1)return;if(_.layers.test(w.layers)&&(_.isMesh||_.isLine||_.isPoints)){if((_.castShadow||_.receiveShadow&&z===G8)&&(!_.frustumCulled||$.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,_.matrixWorld);let p=Q.update(_),l=_.material;if(Array.isArray(l)){let s=p.groups;for(let d=0,ZJ=s.length;d<ZJ;d++){let m=s[d],EJ=l[m.materialIndex];if(EJ&&EJ.visible){let UJ=k(_,EJ,L,z);_.onBeforeShadow(J,_,w,y,p,UJ,m),J.renderBufferDirect(y,null,p,UJ,_,m),_.onAfterShadow(J,_,w,y,p,UJ,m)}}}else if(l.visible){let s=k(_,l,L,z);_.onBeforeShadow(J,_,w,y,p,s,null),J.renderBufferDirect(y,null,p,s,_,null),_.onAfterShadow(J,_,w,y,p,s,null)}}}let g=_.children;for(let p=0,l=g.length;p<l;p++)I(g[p],w,y,L,z)}function P(_){_.target.removeEventListener("dispose",P);for(let y in U){let L=U[y],z=_.target.uuid;if(z in L)L[z].dispose(),delete L[z]}}}var P5={[J6]:Q6,[Z6]:H6,[$6]:K6,[U7]:W6,[Q6]:J6,[H6]:Z6,[K6]:$6,[W6]:U7};function T5(J,Q){function Z(){let f=!1,$J=new eJ,n=null,a=new eJ(0,0,0,0);return{setMask:function(RJ){if(n!==RJ&&!f)J.colorMask(RJ,RJ,RJ,RJ),n=RJ},setLocked:function(RJ){f=RJ},setClear:function(RJ,OJ,nJ,N0,_0){if(_0===!0)RJ*=N0,OJ*=N0,nJ*=N0;if($J.set(RJ,OJ,nJ,N0),a.equals($J)===!1)J.clearColor(RJ,OJ,nJ,N0),a.copy($J)},reset:function(){f=!1,n=null,a.set(-1,0,0,0)}}}function $(){let f=!1,$J=!1,n=null,a=null,RJ=null;return{setReversed:function(OJ){if($J!==OJ){let nJ=Q.get("EXT_clip_control");if($J)nJ.clipControlEXT(nJ.LOWER_LEFT_EXT,nJ.ZERO_TO_ONE_EXT);else nJ.clipControlEXT(nJ.LOWER_LEFT_EXT,nJ.NEGATIVE_ONE_TO_ONE_EXT);let N0=RJ;RJ=null,this.setClear(N0)}$J=OJ},getReversed:function(){return $J},setTest:function(OJ){if(OJ)YJ(J.DEPTH_TEST);else oJ(J.DEPTH_TEST)},setMask:function(OJ){if(n!==OJ&&!f)J.depthMask(OJ),n=OJ},setFunc:function(OJ){if($J)OJ=P5[OJ];if(a!==OJ){switch(OJ){case J6:J.depthFunc(J.NEVER);break;case Q6:J.depthFunc(J.ALWAYS);break;case Z6:J.depthFunc(J.LESS);break;case U7:J.depthFunc(J.LEQUAL);break;case $6:J.depthFunc(J.EQUAL);break;case W6:J.depthFunc(J.GEQUAL);break;case H6:J.depthFunc(J.GREATER);break;case K6:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}a=OJ}},setLocked:function(OJ){f=OJ},setClear:function(OJ){if(RJ!==OJ){if($J)OJ=1-OJ;J.clearDepth(OJ),RJ=OJ}},reset:function(){f=!1,n=null,a=null,RJ=null,$J=!1}}}function W(){let f=!1,$J=null,n=null,a=null,RJ=null,OJ=null,nJ=null,N0=null,_0=null;return{setTest:function($0){if(!f)if($0)YJ(J.STENCIL_TEST);else oJ(J.STENCIL_TEST)},setMask:function($0){if($J!==$0&&!f)J.stencilMask($0),$J=$0},setFunc:function($0,L8,D8){if(n!==$0||a!==L8||RJ!==D8)J.stencilFunc($0,L8,D8),n=$0,a=L8,RJ=D8},setOp:function($0,L8,D8){if(OJ!==$0||nJ!==L8||N0!==D8)J.stencilOp($0,L8,D8),OJ=$0,nJ=L8,N0=D8},setLocked:function($0){f=$0},setClear:function($0){if(_0!==$0)J.clearStencil($0),_0=$0},reset:function(){f=!1,$J=null,n=null,a=null,RJ=null,OJ=null,nJ=null,N0=null,_0=null}}}let H=new Z,K=new $,Y=new W,X=/*@__PURE__*/new WeakMap,U=/*@__PURE__*/new WeakMap,G={},E={},N=/*@__PURE__*/new WeakMap,q=[],R=null,F=!1,O=null,D=null,M=null,k=null,I=null,P=null,_=null,w=new qJ(0,0,0),y=0,L=!1,z=null,S=null,g=null,p=null,l=null,s=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),d=!1,ZJ=0,m=J.getParameter(J.VERSION);if(m.indexOf("WebGL")!==-1)ZJ=parseFloat(/^WebGL (\d)/.exec(m)[1]),d=ZJ>=1;else if(m.indexOf("OpenGL ES")!==-1)ZJ=parseFloat(/^OpenGL ES (\d)/.exec(m)[1]),d=ZJ>=2;let EJ=null,UJ={},SJ=J.getParameter(J.SCISSOR_BOX),sJ=J.getParameter(J.VIEWPORT),c=new eJ().fromArray(SJ),KJ=new eJ().fromArray(sJ);function wJ(f,$J,n,a){let RJ=new Uint8Array(4),OJ=J.createTexture();J.bindTexture(f,OJ),J.texParameteri(f,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(f,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let nJ=0;nJ<n;nJ++)if(f===J.TEXTURE_3D||f===J.TEXTURE_2D_ARRAY)J.texImage3D($J,0,J.RGBA,1,1,a,0,J.RGBA,J.UNSIGNED_BYTE,RJ);else J.texImage2D($J+nJ,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,RJ);return OJ}let IJ={};IJ[J.TEXTURE_2D]=wJ(J.TEXTURE_2D,J.TEXTURE_2D,1),IJ[J.TEXTURE_CUBE_MAP]=wJ(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),IJ[J.TEXTURE_2D_ARRAY]=wJ(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),IJ[J.TEXTURE_3D]=wJ(J.TEXTURE_3D,J.TEXTURE_3D,1,1),H.setClear(0,0,0,1),K.setClear(1),Y.setClear(0),YJ(J.DEPTH_TEST),K.setFunc(U7),CJ(!1),e(cQ),YJ(J.CULL_FACE),zJ(j8);function YJ(f){if(G[f]!==!0)J.enable(f),G[f]=!0}function oJ(f){if(G[f]!==!1)J.disable(f),G[f]=!1}function yJ(f,$J){if(E[f]!==$J){if(J.bindFramebuffer(f,$J),E[f]=$J,f===J.DRAW_FRAMEBUFFER)E[J.FRAMEBUFFER]=$J;if(f===J.FRAMEBUFFER)E[J.DRAW_FRAMEBUFFER]=$J;return!0}return!1}function mJ(f,$J){let n=q,a=!1;if(f){if(n=N.get($J),n===void 0)n=[],N.set($J,n);let RJ=f.textures;if(n.length!==RJ.length||n[0]!==J.COLOR_ATTACHMENT0){for(let OJ=0,nJ=RJ.length;OJ<nJ;OJ++)n[OJ]=J.COLOR_ATTACHMENT0+OJ;n.length=RJ.length,a=!0}}else if(n[0]!==J.BACK)n[0]=J.BACK,a=!0;if(a)J.drawBuffers(n)}function JJ(f){if(R!==f)return J.useProgram(f),R=f,!0;return!1}let t={[B9]:J.FUNC_ADD,[CW]:J.FUNC_SUBTRACT,[wW]:J.FUNC_REVERSE_SUBTRACT};t[AW]=J.MIN,t[PW]=J.MAX;let C={[TW]:J.ZERO,[SW]:J.ONE,[jW]:J.SRC_COLOR,[vW]:J.SRC_ALPHA,[pW]:J.SRC_ALPHA_SATURATE,[xW]:J.DST_COLOR,[bW]:J.DST_ALPHA,[yW]:J.ONE_MINUS_SRC_COLOR,[fW]:J.ONE_MINUS_SRC_ALPHA,[gW]:J.ONE_MINUS_DST_COLOR,[hW]:J.ONE_MINUS_DST_ALPHA,[mW]:J.CONSTANT_COLOR,[lW]:J.ONE_MINUS_CONSTANT_COLOR,[dW]:J.CONSTANT_ALPHA,[uW]:J.ONE_MINUS_CONSTANT_ALPHA};function zJ(f,$J,n,a,RJ,OJ,nJ,N0,_0,$0){if(f===j8){if(F===!0)oJ(J.BLEND),F=!1;return}if(F===!1)YJ(J.BLEND),F=!0;if(f!==_W){if(f!==O||$0!==L){if(D!==B9||I!==B9)J.blendEquation(J.FUNC_ADD),D=B9,I=B9;if($0)switch(f){case X7:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case sQ:J.blendFunc(J.ONE,J.ONE);break;case iQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case oQ:J.blendFuncSeparate(J.ZERO,J.SRC_COLOR,J.ZERO,J.SRC_ALPHA);break;default:break}else switch(f){case X7:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case sQ:J.blendFunc(J.SRC_ALPHA,J.ONE);break;case iQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case oQ:J.blendFunc(J.ZERO,J.SRC_COLOR);break;default:break}M=null,k=null,P=null,_=null,w.set(0,0,0),y=0,O=f,L=$0}return}if(RJ=RJ||$J,OJ=OJ||n,nJ=nJ||a,$J!==D||RJ!==I)J.blendEquationSeparate(t[$J],t[RJ]),D=$J,I=RJ;if(n!==M||a!==k||OJ!==P||nJ!==_)J.blendFuncSeparate(C[n],C[a],C[OJ],C[nJ]),M=n,k=a,P=OJ,_=nJ;if(N0.equals(w)===!1||_0!==y)J.blendColor(N0.r,N0.g,N0.b,_0),w.copy(N0),y=_0;O=f,L=!1}function WJ(f,$J){f.side===E8?oJ(J.CULL_FACE):YJ(J.CULL_FACE);let n=f.side===d0;if($J)n=!n;CJ(n),f.blending===X7&&f.transparent===!1?zJ(j8):zJ(f.blending,f.blendEquation,f.blendSrc,f.blendDst,f.blendEquationAlpha,f.blendSrcAlpha,f.blendDstAlpha,f.blendColor,f.blendAlpha,f.premultipliedAlpha),K.setFunc(f.depthFunc),K.setTest(f.depthTest),K.setMask(f.depthWrite),H.setMask(f.colorWrite);let a=f.stencilWrite;if(Y.setTest(a),a)Y.setMask(f.stencilWriteMask),Y.setFunc(f.stencilFunc,f.stencilRef,f.stencilFuncMask),Y.setOp(f.stencilFail,f.stencilZFail,f.stencilZPass);DJ(f.polygonOffset,f.polygonOffsetFactor,f.polygonOffsetUnits),f.alphaToCoverage===!0?YJ(J.SAMPLE_ALPHA_TO_COVERAGE):oJ(J.SAMPLE_ALPHA_TO_COVERAGE)}function CJ(f){if(z!==f){if(f)J.frontFace(J.CW);else J.frontFace(J.CCW);z=f}}function e(f){if(f!==BW){if(YJ(J.CULL_FACE),f!==S)if(f===cQ)J.cullFace(J.BACK);else if(f===zW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else oJ(J.CULL_FACE);S=f}function vJ(f){if(f!==g){if(d)J.lineWidth(f);g=f}}function DJ(f,$J,n){if(f){if(YJ(J.POLYGON_OFFSET_FILL),p!==$J||l!==n)J.polygonOffset($J,n),p=$J,l=n}else oJ(J.POLYGON_OFFSET_FILL)}function _J(f){if(f)YJ(J.SCISSOR_TEST);else oJ(J.SCISSOR_TEST)}function T(f){if(f===void 0)f=J.TEXTURE0+s-1;if(EJ!==f)J.activeTexture(f),EJ=f}function V(f,$J,n){if(n===void 0)if(EJ===null)n=J.TEXTURE0+s-1;else n=EJ;let a=UJ[n];if(a===void 0)a={type:void 0,texture:void 0},UJ[n]=a;if(a.type!==f||a.texture!==$J){if(EJ!==n)J.activeTexture(n),EJ=n;J.bindTexture(f,$J||IJ[f]),a.type=f,a.texture=$J}}function b(){let f=UJ[EJ];if(f!==void 0&&f.type!==void 0)J.bindTexture(f.type,null),f.type=void 0,f.texture=void 0}function o(){try{J.compressedTexImage2D.apply(J,arguments)}catch(f){}}function r(){try{J.compressedTexImage3D.apply(J,arguments)}catch(f){}}function u(){try{J.texSubImage2D.apply(J,arguments)}catch(f){}}function PJ(){try{J.texSubImage3D.apply(J,arguments)}catch(f){}}function GJ(){try{J.compressedTexSubImage2D.apply(J,arguments)}catch(f){}}function FJ(){try{J.compressedTexSubImage3D.apply(J,arguments)}catch(f){}}function hJ(){try{J.texStorage2D.apply(J,arguments)}catch(f){}}function HJ(){try{J.texStorage3D.apply(J,arguments)}catch(f){}}function kJ(){try{J.texImage2D.apply(J,arguments)}catch(f){}}function aJ(){try{J.texImage3D.apply(J,arguments)}catch(f){}}function fJ(f){if(c.equals(f)===!1)J.scissor(f.x,f.y,f.z,f.w),c.copy(f)}function VJ(f){if(KJ.equals(f)===!1)J.viewport(f.x,f.y,f.z,f.w),KJ.copy(f)}function uJ(f,$J){let n=U.get($J);if(n===void 0)n=/*@__PURE__*/new WeakMap,U.set($J,n);let a=n.get(f);if(a===void 0)a=J.getUniformBlockIndex($J,f.name),n.set(f,a)}function iJ(f,$J){let a=U.get($J).get(f);if(X.get($J)!==a)J.uniformBlockBinding($J,a,f.__bindingPointIndex),X.set($J,a)}function U0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),K.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),G={},EJ=null,UJ={},E={},N=/*@__PURE__*/new WeakMap,q=[],R=null,F=!1,O=null,D=null,M=null,k=null,I=null,P=null,_=null,w=new qJ(0,0,0),y=0,L=!1,z=null,S=null,g=null,p=null,l=null,c.set(0,0,J.canvas.width,J.canvas.height),KJ.set(0,0,J.canvas.width,J.canvas.height),H.reset(),K.reset(),Y.reset()}return{buffers:{color:H,depth:K,stencil:Y},enable:YJ,disable:oJ,bindFramebuffer:yJ,drawBuffers:mJ,useProgram:JJ,setBlending:zJ,setMaterial:WJ,setFlipSided:CJ,setCullFace:e,setLineWidth:vJ,setPolygonOffset:DJ,setScissorTest:_J,activeTexture:T,bindTexture:V,unbindTexture:b,compressedTexImage2D:o,compressedTexImage3D:r,texImage2D:kJ,texImage3D:aJ,updateUBOMapping:uJ,uniformBlockBinding:iJ,texStorage2D:hJ,texStorage3D:HJ,texSubImage2D:u,texSubImage3D:PJ,compressedTexSubImage2D:GJ,compressedTexSubImage3D:FJ,scissor:fJ,viewport:VJ,reset:U0}}function S5(J,Q,Z,$,W,H,K){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator==="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new i,G=/*@__PURE__*/new WeakMap,E,N=/*@__PURE__*/new WeakMap,q=!1;try{q=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function R(T,V){return q?new OffscreenCanvas(T,V):Y7("canvas")}function F(T,V,b){let o=1,r=_J(T);if(r.width>b||r.height>b)o=b/Math.max(r.width,r.height);if(o<1)if(typeof HTMLImageElement!=="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&T instanceof VideoFrame){let u=Math.floor(o*r.width),PJ=Math.floor(o*r.height);if(E===void 0)E=R(u,PJ);let GJ=V?R(u,PJ):E;return GJ.width=u,GJ.height=PJ,GJ.getContext("2d").drawImage(T,0,0,u,PJ),GJ}else{if("data"in T);return T}return T}function O(T){return T.generateMipmaps}function D(T){J.generateMipmap(T)}function M(T){if(T.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(T.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function k(T,V,b,o,r=!1){if(T!==null){if(J[T]!==void 0)return J[T]}let u=V;if(V===J.RED){if(b===J.FLOAT)u=J.R32F;if(b===J.HALF_FLOAT)u=J.R16F;if(b===J.UNSIGNED_BYTE)u=J.R8}if(V===J.RED_INTEGER){if(b===J.UNSIGNED_BYTE)u=J.R8UI;if(b===J.UNSIGNED_SHORT)u=J.R16UI;if(b===J.UNSIGNED_INT)u=J.R32UI;if(b===J.BYTE)u=J.R8I;if(b===J.SHORT)u=J.R16I;if(b===J.INT)u=J.R32I}if(V===J.RG){if(b===J.FLOAT)u=J.RG32F;if(b===J.HALF_FLOAT)u=J.RG16F;if(b===J.UNSIGNED_BYTE)u=J.RG8}if(V===J.RG_INTEGER){if(b===J.UNSIGNED_BYTE)u=J.RG8UI;if(b===J.UNSIGNED_SHORT)u=J.RG16UI;if(b===J.UNSIGNED_INT)u=J.RG32UI;if(b===J.BYTE)u=J.RG8I;if(b===J.SHORT)u=J.RG16I;if(b===J.INT)u=J.RG32I}if(V===J.RGB_INTEGER){if(b===J.UNSIGNED_BYTE)u=J.RGB8UI;if(b===J.UNSIGNED_SHORT)u=J.RGB16UI;if(b===J.UNSIGNED_INT)u=J.RGB32UI;if(b===J.BYTE)u=J.RGB8I;if(b===J.SHORT)u=J.RGB16I;if(b===J.INT)u=J.RGB32I}if(V===J.RGBA_INTEGER){if(b===J.UNSIGNED_BYTE)u=J.RGBA8UI;if(b===J.UNSIGNED_SHORT)u=J.RGBA16UI;if(b===J.UNSIGNED_INT)u=J.RGBA32UI;if(b===J.BYTE)u=J.RGBA8I;if(b===J.SHORT)u=J.RGBA16I;if(b===J.INT)u=J.RGBA32I}if(V===J.RGB){if(b===J.UNSIGNED_INT_5_9_9_9_REV)u=J.RGB9_E5}if(V===J.RGBA){let PJ=r?AZ:rJ.getTransfer(o);if(b===J.FLOAT)u=J.RGBA32F;if(b===J.HALF_FLOAT)u=J.RGBA16F;if(b===J.UNSIGNED_BYTE)u=PJ===Y0?J.SRGB8_ALPHA8:J.RGBA8;if(b===J.UNSIGNED_SHORT_4_4_4_4)u=J.RGBA4;if(b===J.UNSIGNED_SHORT_5_5_5_1)u=J.RGB5_A1}if(u===J.R16F||u===J.R32F||u===J.RG16F||u===J.RG32F||u===J.RGBA16F||u===J.RGBA32F)Q.get("EXT_color_buffer_float");return u}function I(T,V){let b;if(T){if(V===null||V===C9||V===w9)b=J.DEPTH24_STENCIL8;else if(V===v8)b=J.DEPTH32F_STENCIL8;else if(V===N7)b=J.DEPTH24_STENCIL8}else if(V===null||V===C9||V===w9)b=J.DEPTH_COMPONENT24;else if(V===v8)b=J.DEPTH_COMPONENT32F;else if(V===N7)b=J.DEPTH_COMPONENT16;return b}function P(T,V){if(O(T)===!0||T.isFramebufferTexture&&T.minFilter!==I9&&T.minFilter!==o8)return Math.log2(Math.max(V.width,V.height))+1;else if(T.mipmaps!==void 0&&T.mipmaps.length>0)return T.mipmaps.length;else if(T.isCompressedTexture&&Array.isArray(T.image))return V.mipmaps.length;else return 1}function _(T){let V=T.target;if(V.removeEventListener("dispose",_),y(V),V.isVideoTexture)G.delete(V)}function w(T){let V=T.target;V.removeEventListener("dispose",w),z(V)}function y(T){let V=$.get(T);if(V.__webglInit===void 0)return;let b=T.source,o=N.get(b);if(o){let r=o[V.__cacheKey];if(r.usedTimes--,r.usedTimes===0)L(T);if(Object.keys(o).length===0)N.delete(b)}$.remove(T)}function L(T){let V=$.get(T);J.deleteTexture(V.__webglTexture);let b=T.source,o=N.get(b);delete o[V.__cacheKey],K.memory.textures--}function z(T){let V=$.get(T);if(T.depthTexture)T.depthTexture.dispose(),$.remove(T.depthTexture);if(T.isWebGLCubeRenderTarget)for(let o=0;o<6;o++){if(Array.isArray(V.__webglFramebuffer[o]))for(let r=0;r<V.__webglFramebuffer[o].length;r++)J.deleteFramebuffer(V.__webglFramebuffer[o][r]);else J.deleteFramebuffer(V.__webglFramebuffer[o]);if(V.__webglDepthbuffer)J.deleteRenderbuffer(V.__webglDepthbuffer[o])}else{if(Array.isArray(V.__webglFramebuffer))for(let o=0;o<V.__webglFramebuffer.length;o++)J.deleteFramebuffer(V.__webglFramebuffer[o]);else J.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer)J.deleteRenderbuffer(V.__webglDepthbuffer);if(V.__webglMultisampledFramebuffer)J.deleteFramebuffer(V.__webglMultisampledFramebuffer);if(V.__webglColorRenderbuffer){for(let o=0;o<V.__webglColorRenderbuffer.length;o++)if(V.__webglColorRenderbuffer[o])J.deleteRenderbuffer(V.__webglColorRenderbuffer[o])}if(V.__webglDepthRenderbuffer)J.deleteRenderbuffer(V.__webglDepthRenderbuffer)}let b=T.textures;for(let o=0,r=b.length;o<r;o++){let u=$.get(b[o]);if(u.__webglTexture)J.deleteTexture(u.__webglTexture),K.memory.textures--;$.remove(b[o])}$.remove(T)}let S=0;function g(){S=0}function p(){let T=S;if(T>=W.maxTextures);return S+=1,T}function l(T){let V=[];return V.push(T.wrapS),V.push(T.wrapT),V.push(T.wrapR||0),V.push(T.magFilter),V.push(T.minFilter),V.push(T.anisotropy),V.push(T.internalFormat),V.push(T.format),V.push(T.type),V.push(T.generateMipmaps),V.push(T.premultiplyAlpha),V.push(T.flipY),V.push(T.unpackAlignment),V.push(T.colorSpace),V.join()}function s(T,V){let b=$.get(T);if(T.isVideoTexture)vJ(T);if(T.isRenderTargetTexture===!1&&T.version>0&&b.__version!==T.version){let o=T.image;if(o===null);else if(o.complete===!1);else{KJ(b,T,V);return}}Z.bindTexture(J.TEXTURE_2D,b.__webglTexture,J.TEXTURE0+V)}function d(T,V){let b=$.get(T);if(T.version>0&&b.__version!==T.version){KJ(b,T,V);return}Z.bindTexture(J.TEXTURE_2D_ARRAY,b.__webglTexture,J.TEXTURE0+V)}function ZJ(T,V){let b=$.get(T);if(T.version>0&&b.__version!==T.version){KJ(b,T,V);return}Z.bindTexture(J.TEXTURE_3D,b.__webglTexture,J.TEXTURE0+V)}function m(T,V){let b=$.get(T);if(T.version>0&&b.__version!==T.version){wJ(b,T,V);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,b.__webglTexture,J.TEXTURE0+V)}let EJ={[QH]:J.REPEAT,[ZH]:J.CLAMP_TO_EDGE,[$H]:J.MIRRORED_REPEAT},UJ={[I9]:J.NEAREST,[WH]:J.NEAREST_MIPMAP_NEAREST,[E7]:J.NEAREST_MIPMAP_LINEAR,[o8]:J.LINEAR,[U6]:J.LINEAR_MIPMAP_NEAREST,[_9]:J.LINEAR_MIPMAP_LINEAR},SJ={[MH]:J.NEVER,[_H]:J.ALWAYS,[VH]:J.LESS,[PZ]:J.LEQUAL,[LH]:J.EQUAL,[IH]:J.GEQUAL,[BH]:J.GREATER,[zH]:J.NOTEQUAL};function sJ(T,V){if(V.type===v8&&Q.has("OES_texture_float_linear")===!1&&(V.magFilter===o8||V.magFilter===U6||V.magFilter===E7||V.magFilter===_9||V.minFilter===o8||V.minFilter===U6||V.minFilter===E7||V.minFilter===_9));if(J.texParameteri(T,J.TEXTURE_WRAP_S,EJ[V.wrapS]),J.texParameteri(T,J.TEXTURE_WRAP_T,EJ[V.wrapT]),T===J.TEXTURE_3D||T===J.TEXTURE_2D_ARRAY)J.texParameteri(T,J.TEXTURE_WRAP_R,EJ[V.wrapR]);if(J.texParameteri(T,J.TEXTURE_MAG_FILTER,UJ[V.magFilter]),J.texParameteri(T,J.TEXTURE_MIN_FILTER,UJ[V.minFilter]),V.compareFunction)J.texParameteri(T,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(T,J.TEXTURE_COMPARE_FUNC,SJ[V.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(V.magFilter===I9)return;if(V.minFilter!==E7&&V.minFilter!==_9)return;if(V.type===v8&&Q.has("OES_texture_float_linear")===!1)return;if(V.anisotropy>1||$.get(V).__currentAnisotropy){let b=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(T,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(V.anisotropy,W.getMaxAnisotropy())),$.get(V).__currentAnisotropy=V.anisotropy}}}function c(T,V){let b=!1;if(T.__webglInit===void 0)T.__webglInit=!0,V.addEventListener("dispose",_);let o=V.source,r=N.get(o);if(r===void 0)r={},N.set(o,r);let u=l(V);if(u!==T.__cacheKey){if(r[u]===void 0)r[u]={texture:J.createTexture(),usedTimes:0},K.memory.textures++,b=!0;r[u].usedTimes++;let PJ=r[T.__cacheKey];if(PJ!==void 0){if(r[T.__cacheKey].usedTimes--,PJ.usedTimes===0)L(V)}T.__cacheKey=u,T.__webglTexture=r[u].texture}return b}function KJ(T,V,b){let o=J.TEXTURE_2D;if(V.isDataArrayTexture||V.isCompressedArrayTexture)o=J.TEXTURE_2D_ARRAY;if(V.isData3DTexture)o=J.TEXTURE_3D;let r=c(T,V),u=V.source;Z.bindTexture(o,T.__webglTexture,J.TEXTURE0+b);let PJ=$.get(u);if(u.version!==PJ.__version||r===!0){Z.activeTexture(J.TEXTURE0+b);let GJ=rJ.getPrimaries(rJ.workingColorSpace),FJ=V.colorSpace===a8?null:rJ.getPrimaries(V.colorSpace),hJ=V.colorSpace===a8||GJ===FJ?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,V.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,V.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,hJ);let HJ=F(V.image,!1,W.maxTextureSize);HJ=DJ(V,HJ);let kJ=H.convert(V.format,V.colorSpace),aJ=H.convert(V.type),fJ=k(V.internalFormat,kJ,aJ,V.colorSpace,V.isVideoTexture);sJ(o,V);let VJ,uJ=V.mipmaps,iJ=V.isVideoTexture!==!0,U0=PJ.__version===void 0||r===!0,f=u.dataReady,$J=P(V,HJ);if(V.isDepthTexture){if(fJ=I(V.format===D7,V.type),U0)if(iJ)Z.texStorage2D(J.TEXTURE_2D,1,fJ,HJ.width,HJ.height);else Z.texImage2D(J.TEXTURE_2D,0,fJ,HJ.width,HJ.height,0,kJ,aJ,null)}else if(V.isDataTexture)if(uJ.length>0){if(iJ&&U0)Z.texStorage2D(J.TEXTURE_2D,$J,fJ,uJ[0].width,uJ[0].height);for(let n=0,a=uJ.length;n<a;n++)if(VJ=uJ[n],iJ){if(f)Z.texSubImage2D(J.TEXTURE_2D,n,0,0,VJ.width,VJ.height,kJ,aJ,VJ.data)}else Z.texImage2D(J.TEXTURE_2D,n,fJ,VJ.width,VJ.height,0,kJ,aJ,VJ.data);V.generateMipmaps=!1}else if(iJ){if(U0)Z.texStorage2D(J.TEXTURE_2D,$J,fJ,HJ.width,HJ.height);if(f)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,HJ.width,HJ.height,kJ,aJ,HJ.data)}else Z.texImage2D(J.TEXTURE_2D,0,fJ,HJ.width,HJ.height,0,kJ,aJ,HJ.data);else if(V.isCompressedTexture)if(V.isCompressedArrayTexture){if(iJ&&U0)Z.texStorage3D(J.TEXTURE_2D_ARRAY,$J,fJ,uJ[0].width,uJ[0].height,HJ.depth);for(let n=0,a=uJ.length;n<a;n++)if(VJ=uJ[n],V.format!==N8){if(kJ!==null)if(iJ){if(f)if(V.layerUpdates.size>0){let RJ=w$(VJ.width,VJ.height,V.format,V.type);for(let OJ of V.layerUpdates){let nJ=VJ.data.subarray(OJ*RJ/VJ.data.BYTES_PER_ELEMENT,(OJ+1)*RJ/VJ.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,OJ,VJ.width,VJ.height,1,kJ,nJ)}V.clearLayerUpdates()}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,0,VJ.width,VJ.height,HJ.depth,kJ,VJ.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,n,fJ,VJ.width,VJ.height,HJ.depth,0,VJ.data,0,0)}else if(iJ){if(f)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,n,0,0,0,VJ.width,VJ.height,HJ.depth,kJ,aJ,VJ.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,n,fJ,VJ.width,VJ.height,HJ.depth,0,kJ,aJ,VJ.data)}else{if(iJ&&U0)Z.texStorage2D(J.TEXTURE_2D,$J,fJ,uJ[0].width,uJ[0].height);for(let n=0,a=uJ.length;n<a;n++)if(VJ=uJ[n],V.format!==N8){if(kJ!==null)if(iJ){if(f)Z.compressedTexSubImage2D(J.TEXTURE_2D,n,0,0,VJ.width,VJ.height,kJ,VJ.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,n,fJ,VJ.width,VJ.height,0,VJ.data)}else if(iJ){if(f)Z.texSubImage2D(J.TEXTURE_2D,n,0,0,VJ.width,VJ.height,kJ,aJ,VJ.data)}else Z.texImage2D(J.TEXTURE_2D,n,fJ,VJ.width,VJ.height,0,kJ,aJ,VJ.data)}else if(V.isDataArrayTexture)if(iJ){if(U0)Z.texStorage3D(J.TEXTURE_2D_ARRAY,$J,fJ,HJ.width,HJ.height,HJ.depth);if(f)if(V.layerUpdates.size>0){let n=w$(HJ.width,HJ.height,V.format,V.type);for(let a of V.layerUpdates){let RJ=HJ.data.subarray(a*n/HJ.data.BYTES_PER_ELEMENT,(a+1)*n/HJ.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,a,HJ.width,HJ.height,1,kJ,aJ,RJ)}V.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,HJ.width,HJ.height,HJ.depth,kJ,aJ,HJ.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,fJ,HJ.width,HJ.height,HJ.depth,0,kJ,aJ,HJ.data);else if(V.isData3DTexture)if(iJ){if(U0)Z.texStorage3D(J.TEXTURE_3D,$J,fJ,HJ.width,HJ.height,HJ.depth);if(f)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,HJ.width,HJ.height,HJ.depth,kJ,aJ,HJ.data)}else Z.texImage3D(J.TEXTURE_3D,0,fJ,HJ.width,HJ.height,HJ.depth,0,kJ,aJ,HJ.data);else if(V.isFramebufferTexture){if(U0)if(iJ)Z.texStorage2D(J.TEXTURE_2D,$J,fJ,HJ.width,HJ.height);else{let{width:n,height:a}=HJ;for(let RJ=0;RJ<$J;RJ++)Z.texImage2D(J.TEXTURE_2D,RJ,fJ,n,a,0,kJ,aJ,null),n>>=1,a>>=1}}else if(uJ.length>0){if(iJ&&U0){let n=_J(uJ[0]);Z.texStorage2D(J.TEXTURE_2D,$J,fJ,n.width,n.height)}for(let n=0,a=uJ.length;n<a;n++)if(VJ=uJ[n],iJ){if(f)Z.texSubImage2D(J.TEXTURE_2D,n,0,0,kJ,aJ,VJ)}else Z.texImage2D(J.TEXTURE_2D,n,fJ,kJ,aJ,VJ);V.generateMipmaps=!1}else if(iJ){if(U0){let n=_J(HJ);Z.texStorage2D(J.TEXTURE_2D,$J,fJ,n.width,n.height)}if(f)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,kJ,aJ,HJ)}else Z.texImage2D(J.TEXTURE_2D,0,fJ,kJ,aJ,HJ);if(O(V))D(o);if(PJ.__version=u.version,V.onUpdate)V.onUpdate(V)}T.__version=V.version}function wJ(T,V,b){if(V.image.length!==6)return;let o=c(T,V),r=V.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,T.__webglTexture,J.TEXTURE0+b);let u=$.get(r);if(r.version!==u.__version||o===!0){Z.activeTexture(J.TEXTURE0+b);let PJ=rJ.getPrimaries(rJ.workingColorSpace),GJ=V.colorSpace===a8?null:rJ.getPrimaries(V.colorSpace),FJ=V.colorSpace===a8||PJ===GJ?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,V.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,V.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,FJ);let hJ=V.isCompressedTexture||V.image[0].isCompressedTexture,HJ=V.image[0]&&V.image[0].isDataTexture,kJ=[];for(let a=0;a<6;a++){if(!hJ&&!HJ)kJ[a]=F(V.image[a],!0,W.maxCubemapSize);else kJ[a]=HJ?V.image[a].image:V.image[a];kJ[a]=DJ(V,kJ[a])}let aJ=kJ[0],fJ=H.convert(V.format,V.colorSpace),VJ=H.convert(V.type),uJ=k(V.internalFormat,fJ,VJ,V.colorSpace),iJ=V.isVideoTexture!==!0,U0=u.__version===void 0||o===!0,f=r.dataReady,$J=P(V,aJ);sJ(J.TEXTURE_CUBE_MAP,V);let n;if(hJ){if(iJ&&U0)Z.texStorage2D(J.TEXTURE_CUBE_MAP,$J,uJ,aJ.width,aJ.height);for(let a=0;a<6;a++){n=kJ[a].mipmaps;for(let RJ=0;RJ<n.length;RJ++){let OJ=n[RJ];if(V.format!==N8){if(fJ!==null)if(iJ){if(f)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,RJ,0,0,OJ.width,OJ.height,fJ,OJ.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,RJ,uJ,OJ.width,OJ.height,0,OJ.data)}else if(iJ){if(f)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,RJ,0,0,OJ.width,OJ.height,fJ,VJ,OJ.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,RJ,uJ,OJ.width,OJ.height,0,fJ,VJ,OJ.data)}}}else{if(n=V.mipmaps,iJ&&U0){if(n.length>0)$J++;let a=_J(kJ[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,$J,uJ,a.width,a.height)}for(let a=0;a<6;a++)if(HJ){if(iJ){if(f)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,0,0,kJ[a].width,kJ[a].height,fJ,VJ,kJ[a].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,uJ,kJ[a].width,kJ[a].height,0,fJ,VJ,kJ[a].data);for(let RJ=0;RJ<n.length;RJ++){let nJ=n[RJ].image[a].image;if(iJ){if(f)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,RJ+1,0,0,nJ.width,nJ.height,fJ,VJ,nJ.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,RJ+1,uJ,nJ.width,nJ.height,0,fJ,VJ,nJ.data)}}else{if(iJ){if(f)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,0,0,fJ,VJ,kJ[a])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,uJ,fJ,VJ,kJ[a]);for(let RJ=0;RJ<n.length;RJ++){let OJ=n[RJ];if(iJ){if(f)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,RJ+1,0,0,fJ,VJ,OJ.image[a])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+a,RJ+1,uJ,fJ,VJ,OJ.image[a])}}}if(O(V))D(J.TEXTURE_CUBE_MAP);if(u.__version=r.version,V.onUpdate)V.onUpdate(V)}T.__version=V.version}function IJ(T,V,b,o,r,u){let PJ=H.convert(b.format,b.colorSpace),GJ=H.convert(b.type),FJ=k(b.internalFormat,PJ,GJ,b.colorSpace),hJ=$.get(V),HJ=$.get(b);if(HJ.__renderTarget=V,!hJ.__hasExternalTextures){let kJ=Math.max(1,V.width>>u),aJ=Math.max(1,V.height>>u);if(r===J.TEXTURE_3D||r===J.TEXTURE_2D_ARRAY)Z.texImage3D(r,u,FJ,kJ,aJ,V.depth,0,PJ,GJ,null);else Z.texImage2D(r,u,FJ,kJ,aJ,0,PJ,GJ,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,T),e(V))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,o,r,HJ.__webglTexture,0,CJ(V));else if(r===J.TEXTURE_2D||r>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,o,r,HJ.__webglTexture,u);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function YJ(T,V,b){if(J.bindRenderbuffer(J.RENDERBUFFER,T),V.depthBuffer){let o=V.depthTexture,r=o&&o.isDepthTexture?o.type:null,u=I(V.stencilBuffer,r),PJ=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,GJ=CJ(V);if(e(V))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,GJ,u,V.width,V.height);else if(b)J.renderbufferStorageMultisample(J.RENDERBUFFER,GJ,u,V.width,V.height);else J.renderbufferStorage(J.RENDERBUFFER,u,V.width,V.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,PJ,J.RENDERBUFFER,T)}else{let o=V.textures;for(let r=0;r<o.length;r++){let u=o[r],PJ=H.convert(u.format,u.colorSpace),GJ=H.convert(u.type),FJ=k(u.internalFormat,PJ,GJ,u.colorSpace),hJ=CJ(V);if(b&&e(V)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,hJ,FJ,V.width,V.height);else if(e(V))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,hJ,FJ,V.width,V.height);else J.renderbufferStorage(J.RENDERBUFFER,FJ,V.width,V.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function oJ(T,V){if(V&&V.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(Z.bindFramebuffer(J.FRAMEBUFFER,T),!(V.depthTexture&&V.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let o=$.get(V.depthTexture);if(o.__renderTarget=V,!o.__webglTexture||V.depthTexture.image.width!==V.width||V.depthTexture.image.height!==V.height)V.depthTexture.image.width=V.width,V.depthTexture.image.height=V.height,V.depthTexture.needsUpdate=!0;s(V.depthTexture,0);let r=o.__webglTexture,u=CJ(V);if(V.depthTexture.format===G6)if(e(V))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,r,0,u);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,r,0);else if(V.depthTexture.format===D7)if(e(V))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,r,0,u);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,r,0);else throw new Error("Unknown depthTexture format")}function yJ(T){let V=$.get(T),b=T.isWebGLCubeRenderTarget===!0;if(V.__boundDepthTexture!==T.depthTexture){let o=T.depthTexture;if(V.__depthDisposeCallback)V.__depthDisposeCallback();if(o){let r=()=>{delete V.__boundDepthTexture,delete V.__depthDisposeCallback,o.removeEventListener("dispose",r)};o.addEventListener("dispose",r),V.__depthDisposeCallback=r}V.__boundDepthTexture=o}if(T.depthTexture&&!V.__autoAllocateDepthBuffer){if(b)throw new Error("target.depthTexture not supported in Cube render targets");oJ(V.__webglFramebuffer,T)}else if(b){V.__webglDepthbuffer=[];for(let o=0;o<6;o++)if(Z.bindFramebuffer(J.FRAMEBUFFER,V.__webglFramebuffer[o]),V.__webglDepthbuffer[o]===void 0)V.__webglDepthbuffer[o]=J.createRenderbuffer(),YJ(V.__webglDepthbuffer[o],T,!1);else{let r=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,u=V.__webglDepthbuffer[o];J.bindRenderbuffer(J.RENDERBUFFER,u),J.framebufferRenderbuffer(J.FRAMEBUFFER,r,J.RENDERBUFFER,u)}}else if(Z.bindFramebuffer(J.FRAMEBUFFER,V.__webglFramebuffer),V.__webglDepthbuffer===void 0)V.__webglDepthbuffer=J.createRenderbuffer(),YJ(V.__webglDepthbuffer,T,!1);else{let o=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,r=V.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,r),J.framebufferRenderbuffer(J.FRAMEBUFFER,o,J.RENDERBUFFER,r)}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function mJ(T,V,b){let o=$.get(T);if(V!==void 0)IJ(o.__webglFramebuffer,T,T.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(b!==void 0)yJ(T)}function JJ(T){let V=T.texture,b=$.get(T),o=$.get(V);T.addEventListener("dispose",w);let r=T.textures,u=T.isWebGLCubeRenderTarget===!0,PJ=r.length>1;if(!PJ){if(o.__webglTexture===void 0)o.__webglTexture=J.createTexture();o.__version=V.version,K.memory.textures++}if(u){b.__webglFramebuffer=[];for(let GJ=0;GJ<6;GJ++)if(V.mipmaps&&V.mipmaps.length>0){b.__webglFramebuffer[GJ]=[];for(let FJ=0;FJ<V.mipmaps.length;FJ++)b.__webglFramebuffer[GJ][FJ]=J.createFramebuffer()}else b.__webglFramebuffer[GJ]=J.createFramebuffer()}else{if(V.mipmaps&&V.mipmaps.length>0){b.__webglFramebuffer=[];for(let GJ=0;GJ<V.mipmaps.length;GJ++)b.__webglFramebuffer[GJ]=J.createFramebuffer()}else b.__webglFramebuffer=J.createFramebuffer();if(PJ)for(let GJ=0,FJ=r.length;GJ<FJ;GJ++){let hJ=$.get(r[GJ]);if(hJ.__webglTexture===void 0)hJ.__webglTexture=J.createTexture(),K.memory.textures++}if(T.samples>0&&e(T)===!1){b.__webglMultisampledFramebuffer=J.createFramebuffer(),b.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let GJ=0;GJ<r.length;GJ++){let FJ=r[GJ];b.__webglColorRenderbuffer[GJ]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,b.__webglColorRenderbuffer[GJ]);let hJ=H.convert(FJ.format,FJ.colorSpace),HJ=H.convert(FJ.type),kJ=k(FJ.internalFormat,hJ,HJ,FJ.colorSpace,T.isXRRenderTarget===!0),aJ=CJ(T);J.renderbufferStorageMultisample(J.RENDERBUFFER,aJ,kJ,T.width,T.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+GJ,J.RENDERBUFFER,b.__webglColorRenderbuffer[GJ])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),T.depthBuffer)b.__webglDepthRenderbuffer=J.createRenderbuffer(),YJ(b.__webglDepthRenderbuffer,T,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(u){Z.bindTexture(J.TEXTURE_CUBE_MAP,o.__webglTexture),sJ(J.TEXTURE_CUBE_MAP,V);for(let GJ=0;GJ<6;GJ++)if(V.mipmaps&&V.mipmaps.length>0)for(let FJ=0;FJ<V.mipmaps.length;FJ++)IJ(b.__webglFramebuffer[GJ][FJ],T,V,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+GJ,FJ);else IJ(b.__webglFramebuffer[GJ],T,V,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+GJ,0);if(O(V))D(J.TEXTURE_CUBE_MAP);Z.unbindTexture()}else if(PJ){for(let GJ=0,FJ=r.length;GJ<FJ;GJ++){let hJ=r[GJ],HJ=$.get(hJ);if(Z.bindTexture(J.TEXTURE_2D,HJ.__webglTexture),sJ(J.TEXTURE_2D,hJ),IJ(b.__webglFramebuffer,T,hJ,J.COLOR_ATTACHMENT0+GJ,J.TEXTURE_2D,0),O(hJ))D(J.TEXTURE_2D)}Z.unbindTexture()}else{let GJ=J.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)GJ=T.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(GJ,o.__webglTexture),sJ(GJ,V),V.mipmaps&&V.mipmaps.length>0)for(let FJ=0;FJ<V.mipmaps.length;FJ++)IJ(b.__webglFramebuffer[FJ],T,V,J.COLOR_ATTACHMENT0,GJ,FJ);else IJ(b.__webglFramebuffer,T,V,J.COLOR_ATTACHMENT0,GJ,0);if(O(V))D(GJ);Z.unbindTexture()}if(T.depthBuffer)yJ(T)}function t(T){let V=T.textures;for(let b=0,o=V.length;b<o;b++){let r=V[b];if(O(r)){let u=M(T),PJ=$.get(r).__webglTexture;Z.bindTexture(u,PJ),D(u),Z.unbindTexture()}}}let C=[],zJ=[];function WJ(T){if(T.samples>0){if(e(T)===!1){let{textures:V,width:b,height:o}=T,r=J.COLOR_BUFFER_BIT,u=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,PJ=$.get(T),GJ=V.length>1;if(GJ)for(let FJ=0;FJ<V.length;FJ++)Z.bindFramebuffer(J.FRAMEBUFFER,PJ.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+FJ,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,PJ.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+FJ,J.TEXTURE_2D,null,0);Z.bindFramebuffer(J.READ_FRAMEBUFFER,PJ.__webglMultisampledFramebuffer),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,PJ.__webglFramebuffer);for(let FJ=0;FJ<V.length;FJ++){if(T.resolveDepthBuffer){if(T.depthBuffer)r|=J.DEPTH_BUFFER_BIT;if(T.stencilBuffer&&T.resolveStencilBuffer)r|=J.STENCIL_BUFFER_BIT}if(GJ){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,PJ.__webglColorRenderbuffer[FJ]);let hJ=$.get(V[FJ]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,hJ,0)}if(J.blitFramebuffer(0,0,b,o,0,0,b,o,r,J.NEAREST),X===!0){if(C.length=0,zJ.length=0,C.push(J.COLOR_ATTACHMENT0+FJ),T.depthBuffer&&T.resolveDepthBuffer===!1)C.push(u),zJ.push(u),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,zJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,C)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),GJ)for(let FJ=0;FJ<V.length;FJ++){Z.bindFramebuffer(J.FRAMEBUFFER,PJ.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+FJ,J.RENDERBUFFER,PJ.__webglColorRenderbuffer[FJ]);let hJ=$.get(V[FJ]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,PJ.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+FJ,J.TEXTURE_2D,hJ,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,PJ.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&X){let V=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[V])}}}function CJ(T){return Math.min(W.maxSamples,T.samples)}function e(T){let V=$.get(T);return T.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&V.__useRenderToTexture!==!1}function vJ(T){let V=K.render.frame;if(G.get(T)!==V)G.set(T,V),T.update()}function DJ(T,V){let{colorSpace:b,format:o,type:r}=T;if(T.isCompressedTexture===!0||T.isVideoTexture===!0)return V;if(b!==O7&&b!==a8){if(rJ.getTransfer(b)===Y0);}return V}function _J(T){if(typeof HTMLImageElement!=="undefined"&&T instanceof HTMLImageElement)U.width=T.naturalWidth||T.width,U.height=T.naturalHeight||T.height;else if(typeof VideoFrame!=="undefined"&&T instanceof VideoFrame)U.width=T.displayWidth,U.height=T.displayHeight;else U.width=T.width,U.height=T.height;return U}this.allocateTextureUnit=p,this.resetTextureUnits=g,this.setTexture2D=s,this.setTexture2DArray=d,this.setTexture3D=ZJ,this.setTextureCube=m,this.rebindTextures=mJ,this.setupRenderTarget=JJ,this.updateRenderTargetMipmap=t,this.updateMultisampleRenderTarget=WJ,this.setupDepthRenderbuffer=yJ,this.setupFrameBufferTexture=IJ,this.useMultisampledRTT=e}function GG(J,Q){function Z($,W=a8){let H,K=rJ.getTransfer(W);if($===y8)return J.UNSIGNED_BYTE;if($===rQ)return J.UNSIGNED_SHORT_4_4_4_4;if($===tQ)return J.UNSIGNED_SHORT_5_5_5_1;if($===YH)return J.UNSIGNED_INT_5_9_9_9_REV;if($===HH)return J.BYTE;if($===KH)return J.SHORT;if($===N7)return J.UNSIGNED_SHORT;if($===aQ)return J.INT;if($===C9)return J.UNSIGNED_INT;if($===v8)return J.FLOAT;if($===q7)return J.HALF_FLOAT;if($===XH)return J.ALPHA;if($===UH)return J.RGB;if($===N8)return J.RGBA;if($===GH)return J.LUMINANCE;if($===EH)return J.LUMINANCE_ALPHA;if($===G6)return J.DEPTH_COMPONENT;if($===D7)return J.DEPTH_STENCIL;if($===NH)return J.RED;if($===eQ)return J.RED_INTEGER;if($===qH)return J.RG;if($===JZ)return J.RG_INTEGER;if($===QZ)return J.RGBA_INTEGER;if($===E6||$===N6||$===q6||$===D6)if(K===Y0)if(H=Q.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if($===E6)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if($===N6)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if($===q6)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if($===D6)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=Q.get("WEBGL_compressed_texture_s3tc"),H!==null){if($===E6)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if($===N6)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if($===q6)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if($===D6)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if($===ZZ||$===$Z||$===WZ||$===HZ)if(H=Q.get("WEBGL_compressed_texture_pvrtc"),H!==null){if($===ZZ)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if($===$Z)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if($===WZ)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if($===HZ)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if($===KZ||$===YZ||$===XZ)if(H=Q.get("WEBGL_compressed_texture_etc"),H!==null){if($===KZ||$===YZ)return K===Y0?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if($===XZ)return K===Y0?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC}else return null;if($===UZ||$===GZ||$===EZ||$===NZ||$===qZ||$===DZ||$===OZ||$===RZ||$===FZ||$===kZ||$===MZ||$===VZ||$===LZ||$===BZ)if(H=Q.get("WEBGL_compressed_texture_astc"),H!==null){if($===UZ)return K===Y0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if($===GZ)return K===Y0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if($===EZ)return K===Y0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if($===NZ)return K===Y0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if($===qZ)return K===Y0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if($===DZ)return K===Y0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if($===OZ)return K===Y0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if($===RZ)return K===Y0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if($===FZ)return K===Y0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if($===kZ)return K===Y0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if($===MZ)return K===Y0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if($===VZ)return K===Y0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if($===LZ)return K===Y0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if($===BZ)return K===Y0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if($===O6||$===zZ||$===IZ)if(H=Q.get("EXT_texture_compression_bptc"),H!==null){if($===O6)return K===Y0?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if($===zZ)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if($===IZ)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if($===DH||$===_Z||$===CZ||$===wZ)if(H=Q.get("EXT_texture_compression_rgtc"),H!==null){if($===O6)return H.COMPRESSED_RED_RGTC1_EXT;if($===_Z)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if($===CZ)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if($===wZ)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if($===w9)return J.UNSIGNED_INT_24_8;return J[$]!==void 0?J[$]:null}return{convert:Z}}var j5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y5=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EG{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q,Z){if(this.texture===null){let $=new E0,W=J.properties.get($);if(W.__webglTexture=Q.texture,Q.depthNear!==Z.depthNear||Q.depthFar!==Z.depthFar)this.depthNear=Q.depthNear,this.depthFar=Q.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,Z=new i0({vertexShader:j5,fragmentShader:y5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new O0(new v9(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NG extends Q8{constructor(J,Q){super();let Z=this,$=null,W=1,H=null,K="local-floor",Y=1,X=null,U=null,G=null,E=null,N=null,q=null,R=new EG,F=Q.getContextAttributes(),O=null,D=null,M=[],k=[],I=new i,P=null,_=new M0;_.viewport=new eJ;let w=new M0;w.viewport=new eJ;let y=[_,w],L=new V$,z=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(c){let KJ=M[c];if(KJ===void 0)KJ=new V7,M[c]=KJ;return KJ.getTargetRaySpace()},this.getControllerGrip=function(c){let KJ=M[c];if(KJ===void 0)KJ=new V7,M[c]=KJ;return KJ.getGripSpace()},this.getHand=function(c){let KJ=M[c];if(KJ===void 0)KJ=new V7,M[c]=KJ;return KJ.getHandSpace()};function g(c){let KJ=k.indexOf(c.inputSource);if(KJ===-1)return;let wJ=M[KJ];if(wJ!==void 0)wJ.update(c.inputSource,c.frame,X||H),wJ.dispatchEvent({type:c.type,data:c.inputSource})}function p(){$.removeEventListener("select",g),$.removeEventListener("selectstart",g),$.removeEventListener("selectend",g),$.removeEventListener("squeeze",g),$.removeEventListener("squeezestart",g),$.removeEventListener("squeezeend",g),$.removeEventListener("end",p),$.removeEventListener("inputsourceschange",l);for(let c=0;c<M.length;c++){let KJ=k[c];if(KJ===null)continue;k[c]=null,M[c].disconnect(KJ)}z=null,S=null,R.reset(),J.setRenderTarget(O),N=null,E=null,G=null,$=null,D=null,sJ.stop(),Z.isPresenting=!1,J.setPixelRatio(P),J.setSize(I.width,I.height,!1),Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(c){if(W=c,Z.isPresenting===!0);},this.setReferenceSpaceType=function(c){if(K=c,Z.isPresenting===!0);},this.getReferenceSpace=function(){return X||H},this.setReferenceSpace=function(c){X=c},this.getBaseLayer=function(){return E!==null?E:N},this.getBinding=function(){return G},this.getFrame=function(){return q},this.getSession=function(){return $},this.setSession=async function(c){if($=c,$!==null){if(O=J.getRenderTarget(),$.addEventListener("select",g),$.addEventListener("selectstart",g),$.addEventListener("selectend",g),$.addEventListener("squeeze",g),$.addEventListener("squeezestart",g),$.addEventListener("squeezeend",g),$.addEventListener("end",p),$.addEventListener("inputsourceschange",l),F.xrCompatible!==!0)await Q.makeXRCompatible();if(P=J.getPixelRatio(),J.getSize(I),!(typeof XRWebGLBinding!=="undefined"&&("createProjectionLayer"in XRWebGLBinding.prototype))){let wJ={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:W};N=new XRWebGLLayer($,Q,wJ),$.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),D=new Z8(N.framebufferWidth,N.framebufferHeight,{format:N8,type:y8,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil})}else{let wJ=null,IJ=null,YJ=null;if(F.depth)YJ=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,wJ=F.stencil?D7:G6,IJ=F.stencil?w9:C9;let oJ={colorFormat:Q.RGBA8,depthFormat:YJ,scaleFactor:W};G=new XRWebGLBinding($,Q),E=G.createProjectionLayer(oJ),$.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),D=new Z8(E.textureWidth,E.textureHeight,{format:N8,type:y8,depthTexture:new I6(E.textureWidth,E.textureHeight,IJ,void 0,void 0,void 0,void 0,void 0,void 0,wJ),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(Y),X=null,H=await $.requestReferenceSpace(K),sJ.setContext($),sJ.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if($!==null)return $.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function l(c){for(let KJ=0;KJ<c.removed.length;KJ++){let wJ=c.removed[KJ],IJ=k.indexOf(wJ);if(IJ>=0)k[IJ]=null,M[IJ].disconnect(wJ)}for(let KJ=0;KJ<c.added.length;KJ++){let wJ=c.added[KJ],IJ=k.indexOf(wJ);if(IJ===-1){for(let oJ=0;oJ<M.length;oJ++)if(oJ>=k.length){k.push(wJ),IJ=oJ;break}else if(k[oJ]===null){k[oJ]=wJ,IJ=oJ;break}if(IJ===-1)break}let YJ=M[IJ];if(YJ)YJ.connect(wJ)}}let s=new A,d=new A;function ZJ(c,KJ,wJ){s.setFromMatrixPosition(KJ.matrixWorld),d.setFromMatrixPosition(wJ.matrixWorld);let IJ=s.distanceTo(d),YJ=KJ.projectionMatrix.elements,oJ=wJ.projectionMatrix.elements,yJ=YJ[14]/(YJ[10]-1),mJ=YJ[14]/(YJ[10]+1),JJ=(YJ[9]+1)/YJ[5],t=(YJ[9]-1)/YJ[5],C=(YJ[8]-1)/YJ[0],zJ=(oJ[8]+1)/oJ[0],WJ=yJ*C,CJ=yJ*zJ,e=IJ/(-C+zJ),vJ=e*-C;if(KJ.matrixWorld.decompose(c.position,c.quaternion,c.scale),c.translateX(vJ),c.translateZ(e),c.matrixWorld.compose(c.position,c.quaternion,c.scale),c.matrixWorldInverse.copy(c.matrixWorld).invert(),YJ[10]===-1)c.projectionMatrix.copy(KJ.projectionMatrix),c.projectionMatrixInverse.copy(KJ.projectionMatrixInverse);else{let DJ=yJ+e,_J=mJ+e,T=WJ-vJ,V=CJ+(IJ-vJ),b=JJ*mJ/_J*DJ,o=t*mJ/_J*DJ;c.projectionMatrix.makePerspective(T,V,b,o,DJ,_J),c.projectionMatrixInverse.copy(c.projectionMatrix).invert()}}function m(c,KJ){if(KJ===null)c.matrixWorld.copy(c.matrix);else c.matrixWorld.multiplyMatrices(KJ.matrixWorld,c.matrix);c.matrixWorldInverse.copy(c.matrixWorld).invert()}this.updateCamera=function(c){if($===null)return;let{near:KJ,far:wJ}=c;if(R.texture!==null){if(R.depthNear>0)KJ=R.depthNear;if(R.depthFar>0)wJ=R.depthFar}if(L.near=w.near=_.near=KJ,L.far=w.far=_.far=wJ,z!==L.near||S!==L.far)$.updateRenderState({depthNear:L.near,depthFar:L.far}),z=L.near,S=L.far;_.layers.mask=c.layers.mask|2,w.layers.mask=c.layers.mask|4,L.layers.mask=_.layers.mask|w.layers.mask;let IJ=c.parent,YJ=L.cameras;m(L,IJ);for(let oJ=0;oJ<YJ.length;oJ++)m(YJ[oJ],IJ);if(YJ.length===2)ZJ(L,_,w);else L.projectionMatrix.copy(_.projectionMatrix);EJ(c,L,IJ)};function EJ(c,KJ,wJ){if(wJ===null)c.matrix.copy(KJ.matrixWorld);else c.matrix.copy(wJ.matrixWorld),c.matrix.invert(),c.matrix.multiply(KJ.matrixWorld);if(c.matrix.decompose(c.position,c.quaternion,c.scale),c.updateMatrixWorld(!0),c.projectionMatrix.copy(KJ.projectionMatrix),c.projectionMatrixInverse.copy(KJ.projectionMatrixInverse),c.isPerspectiveCamera)c.fov=D9*2*Math.atan(1/c.projectionMatrix.elements[5]),c.zoom=1}this.getCamera=function(){return L},this.getFoveation=function(){if(E===null&&N===null)return;return Y},this.setFoveation=function(c){if(Y=c,E!==null)E.fixedFoveation=c;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=c},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(L)};let UJ=null;function SJ(c,KJ){if(U=KJ.getViewerPose(X||H),q=KJ,U!==null){let wJ=U.views;if(N!==null)J.setRenderTargetFramebuffer(D,N.framebuffer),J.setRenderTarget(D);let IJ=!1;if(wJ.length!==L.cameras.length)L.cameras.length=0,IJ=!0;for(let yJ=0;yJ<wJ.length;yJ++){let mJ=wJ[yJ],JJ=null;if(N!==null)JJ=N.getViewport(mJ);else{let C=G.getViewSubImage(E,mJ);if(JJ=C.viewport,yJ===0)J.setRenderTargetTextures(D,C.colorTexture,E.ignoreDepthValues?void 0:C.depthStencilTexture),J.setRenderTarget(D)}let t=y[yJ];if(t===void 0)t=new M0,t.layers.enable(yJ),t.viewport=new eJ,y[yJ]=t;if(t.matrix.fromArray(mJ.transform.matrix),t.matrix.decompose(t.position,t.quaternion,t.scale),t.projectionMatrix.fromArray(mJ.projectionMatrix),t.projectionMatrixInverse.copy(t.projectionMatrix).invert(),t.viewport.set(JJ.x,JJ.y,JJ.width,JJ.height),yJ===0)L.matrix.copy(t.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);if(IJ===!0)L.cameras.push(t)}let YJ=$.enabledFeatures;if(YJ&&YJ.includes("depth-sensing")&&$.depthUsage=="gpu-optimized"&&G){let yJ=G.getDepthInformation(wJ[0]);if(yJ&&yJ.isValid&&yJ.texture)R.init(J,yJ,$.renderState)}}for(let wJ=0;wJ<M.length;wJ++){let IJ=k[wJ],YJ=M[wJ];if(IJ!==null&&YJ!==void 0)YJ.update(IJ,KJ,X||H)}if(UJ)UJ(c,KJ);if(KJ.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:KJ});q=null}let sJ=new JG;sJ.setAnimationLoop(SJ),this.setAnimationLoop=function(c){UJ=c},this.dispose=function(){}}}var x9=/*@__PURE__*/new l0,v5=/*@__PURE__*/new jJ;function f5(J,Q){function Z(O,D){if(O.matrixAutoUpdate===!0)O.updateMatrix();D.value.copy(O.matrix)}function $(O,D){if(D.color.getRGB(O.fogColor.value,xH(J)),D.isFog)O.fogNear.value=D.near,O.fogFar.value=D.far;else if(D.isFogExp2)O.fogDensity.value=D.density}function W(O,D,M,k,I){if(D.isMeshBasicMaterial)H(O,D);else if(D.isMeshLambertMaterial)H(O,D);else if(D.isMeshToonMaterial)H(O,D),E(O,D);else if(D.isMeshPhongMaterial)H(O,D),G(O,D);else if(D.isMeshStandardMaterial){if(H(O,D),N(O,D),D.isMeshPhysicalMaterial)q(O,D,I)}else if(D.isMeshMatcapMaterial)H(O,D),R(O,D);else if(D.isMeshDepthMaterial)H(O,D);else if(D.isMeshDistanceMaterial)H(O,D),F(O,D);else if(D.isMeshNormalMaterial)H(O,D);else if(D.isLineBasicMaterial){if(K(O,D),D.isLineDashedMaterial)Y(O,D)}else if(D.isPointsMaterial)X(O,D,M,k);else if(D.isSpriteMaterial)U(O,D);else if(D.isShadowMaterial)O.color.value.copy(D.color),O.opacity.value=D.opacity;else if(D.isShaderMaterial)D.uniformsNeedUpdate=!1}function H(O,D){if(O.opacity.value=D.opacity,D.color)O.diffuse.value.copy(D.color);if(D.emissive)O.emissive.value.copy(D.emissive).multiplyScalar(D.emissiveIntensity);if(D.map)O.map.value=D.map,Z(D.map,O.mapTransform);if(D.alphaMap)O.alphaMap.value=D.alphaMap,Z(D.alphaMap,O.alphaMapTransform);if(D.bumpMap){if(O.bumpMap.value=D.bumpMap,Z(D.bumpMap,O.bumpMapTransform),O.bumpScale.value=D.bumpScale,D.side===d0)O.bumpScale.value*=-1}if(D.normalMap){if(O.normalMap.value=D.normalMap,Z(D.normalMap,O.normalMapTransform),O.normalScale.value.copy(D.normalScale),D.side===d0)O.normalScale.value.negate()}if(D.displacementMap)O.displacementMap.value=D.displacementMap,Z(D.displacementMap,O.displacementMapTransform),O.displacementScale.value=D.displacementScale,O.displacementBias.value=D.displacementBias;if(D.emissiveMap)O.emissiveMap.value=D.emissiveMap,Z(D.emissiveMap,O.emissiveMapTransform);if(D.specularMap)O.specularMap.value=D.specularMap,Z(D.specularMap,O.specularMapTransform);if(D.alphaTest>0)O.alphaTest.value=D.alphaTest;let M=Q.get(D),k=M.envMap,I=M.envMapRotation;if(k){if(O.envMap.value=k,x9.copy(I),x9.x*=-1,x9.y*=-1,x9.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1)x9.y*=-1,x9.z*=-1;O.envMapRotation.value.setFromMatrix4(v5.makeRotationFromEuler(x9)),O.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,O.reflectivity.value=D.reflectivity,O.ior.value=D.ior,O.refractionRatio.value=D.refractionRatio}if(D.lightMap)O.lightMap.value=D.lightMap,O.lightMapIntensity.value=D.lightMapIntensity,Z(D.lightMap,O.lightMapTransform);if(D.aoMap)O.aoMap.value=D.aoMap,O.aoMapIntensity.value=D.aoMapIntensity,Z(D.aoMap,O.aoMapTransform)}function K(O,D){if(O.diffuse.value.copy(D.color),O.opacity.value=D.opacity,D.map)O.map.value=D.map,Z(D.map,O.mapTransform)}function Y(O,D){O.dashSize.value=D.dashSize,O.totalSize.value=D.dashSize+D.gapSize,O.scale.value=D.scale}function X(O,D,M,k){if(O.diffuse.value.copy(D.color),O.opacity.value=D.opacity,O.size.value=D.size*M,O.scale.value=k*0.5,D.map)O.map.value=D.map,Z(D.map,O.uvTransform);if(D.alphaMap)O.alphaMap.value=D.alphaMap,Z(D.alphaMap,O.alphaMapTransform);if(D.alphaTest>0)O.alphaTest.value=D.alphaTest}function U(O,D){if(O.diffuse.value.copy(D.color),O.opacity.value=D.opacity,O.rotation.value=D.rotation,D.map)O.map.value=D.map,Z(D.map,O.mapTransform);if(D.alphaMap)O.alphaMap.value=D.alphaMap,Z(D.alphaMap,O.alphaMapTransform);if(D.alphaTest>0)O.alphaTest.value=D.alphaTest}function G(O,D){O.specular.value.copy(D.specular),O.shininess.value=Math.max(D.shininess,0.0001)}function E(O,D){if(D.gradientMap)O.gradientMap.value=D.gradientMap}function N(O,D){if(O.metalness.value=D.metalness,D.metalnessMap)O.metalnessMap.value=D.metalnessMap,Z(D.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=D.roughness,D.roughnessMap)O.roughnessMap.value=D.roughnessMap,Z(D.roughnessMap,O.roughnessMapTransform);if(D.envMap)O.envMapIntensity.value=D.envMapIntensity}function q(O,D,M){if(O.ior.value=D.ior,D.sheen>0){if(O.sheenColor.value.copy(D.sheenColor).multiplyScalar(D.sheen),O.sheenRoughness.value=D.sheenRoughness,D.sheenColorMap)O.sheenColorMap.value=D.sheenColorMap,Z(D.sheenColorMap,O.sheenColorMapTransform);if(D.sheenRoughnessMap)O.sheenRoughnessMap.value=D.sheenRoughnessMap,Z(D.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(D.clearcoat>0){if(O.clearcoat.value=D.clearcoat,O.clearcoatRoughness.value=D.clearcoatRoughness,D.clearcoatMap)O.clearcoatMap.value=D.clearcoatMap,Z(D.clearcoatMap,O.clearcoatMapTransform);if(D.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=D.clearcoatRoughnessMap,Z(D.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(D.clearcoatNormalMap){if(O.clearcoatNormalMap.value=D.clearcoatNormalMap,Z(D.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(D.clearcoatNormalScale),D.side===d0)O.clearcoatNormalScale.value.negate()}}if(D.dispersion>0)O.dispersion.value=D.dispersion;if(D.iridescence>0){if(O.iridescence.value=D.iridescence,O.iridescenceIOR.value=D.iridescenceIOR,O.iridescenceThicknessMinimum.value=D.iridescenceThicknessRange[0],O.iridescenceThicknessMaximum.value=D.iridescenceThicknessRange[1],D.iridescenceMap)O.iridescenceMap.value=D.iridescenceMap,Z(D.iridescenceMap,O.iridescenceMapTransform);if(D.iridescenceThicknessMap)O.iridescenceThicknessMap.value=D.iridescenceThicknessMap,Z(D.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(D.transmission>0){if(O.transmission.value=D.transmission,O.transmissionSamplerMap.value=M.texture,O.transmissionSamplerSize.value.set(M.width,M.height),D.transmissionMap)O.transmissionMap.value=D.transmissionMap,Z(D.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=D.thickness,D.thicknessMap)O.thicknessMap.value=D.thicknessMap,Z(D.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=D.attenuationDistance,O.attenuationColor.value.copy(D.attenuationColor)}if(D.anisotropy>0){if(O.anisotropyVector.value.set(D.anisotropy*Math.cos(D.anisotropyRotation),D.anisotropy*Math.sin(D.anisotropyRotation)),D.anisotropyMap)O.anisotropyMap.value=D.anisotropyMap,Z(D.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=D.specularIntensity,O.specularColor.value.copy(D.specularColor),D.specularColorMap)O.specularColorMap.value=D.specularColorMap,Z(D.specularColorMap,O.specularColorMapTransform);if(D.specularIntensityMap)O.specularIntensityMap.value=D.specularIntensityMap,Z(D.specularIntensityMap,O.specularIntensityMapTransform)}function R(O,D){if(D.matcap)O.matcap.value=D.matcap}function F(O,D){let M=Q.get(D).light;O.referencePosition.value.setFromMatrixPosition(M.matrixWorld),O.nearDistance.value=M.shadow.camera.near,O.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:$,refreshMaterialUniforms:W}}function b5(J,Q,Z,$){let W={},H={},K=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(M,k){let I=k.program;$.uniformBlockBinding(M,I)}function U(M,k){let I=W[M.id];if(I===void 0)R(M),I=G(M),W[M.id]=I,M.addEventListener("dispose",O);let P=k.program;$.updateUBOMapping(M,P);let _=Q.render.frame;if(H[M.id]!==_)N(M),H[M.id]=_}function G(M){let k=E();M.__bindingPointIndex=k;let I=J.createBuffer(),P=M.__size,_=M.usage;return J.bindBuffer(J.UNIFORM_BUFFER,I),J.bufferData(J.UNIFORM_BUFFER,P,_),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,k,I),I}function E(){for(let M=0;M<Y;M++)if(K.indexOf(M)===-1)return K.push(M),M;return 0}function N(M){let k=W[M.id],I=M.uniforms,P=M.__cache;J.bindBuffer(J.UNIFORM_BUFFER,k);for(let _=0,w=I.length;_<w;_++){let y=Array.isArray(I[_])?I[_]:[I[_]];for(let L=0,z=y.length;L<z;L++){let S=y[L];if(q(S,_,L,P)===!0){let g=S.__offset,p=Array.isArray(S.value)?S.value:[S.value],l=0;for(let s=0;s<p.length;s++){let d=p[s],ZJ=F(d);if(typeof d==="number"||typeof d==="boolean")S.__data[0]=d,J.bufferSubData(J.UNIFORM_BUFFER,g+l,S.__data);else if(d.isMatrix3)S.__data[0]=d.elements[0],S.__data[1]=d.elements[1],S.__data[2]=d.elements[2],S.__data[3]=0,S.__data[4]=d.elements[3],S.__data[5]=d.elements[4],S.__data[6]=d.elements[5],S.__data[7]=0,S.__data[8]=d.elements[6],S.__data[9]=d.elements[7],S.__data[10]=d.elements[8],S.__data[11]=0;else d.toArray(S.__data,l),l+=ZJ.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,g,S.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function q(M,k,I,P){let _=M.value,w=k+"_"+I;if(P[w]===void 0){if(typeof _==="number"||typeof _==="boolean")P[w]=_;else P[w]=_.clone();return!0}else{let y=P[w];if(typeof _==="number"||typeof _==="boolean"){if(y!==_)return P[w]=_,!0}else if(y.equals(_)===!1)return y.copy(_),!0}return!1}function R(M){let k=M.uniforms,I=0,P=16;for(let w=0,y=k.length;w<y;w++){let L=Array.isArray(k[w])?k[w]:[k[w]];for(let z=0,S=L.length;z<S;z++){let g=L[z],p=Array.isArray(g.value)?g.value:[g.value];for(let l=0,s=p.length;l<s;l++){let d=p[l],ZJ=F(d),m=I%P,EJ=m%ZJ.boundary,UJ=m+EJ;if(I+=EJ,UJ!==0&&P-UJ<ZJ.storage)I+=P-UJ;g.__data=new Float32Array(ZJ.storage/Float32Array.BYTES_PER_ELEMENT),g.__offset=I,I+=ZJ.storage}}}let _=I%P;if(_>0)I+=P-_;return M.__size=I,M.__cache={},this}function F(M){let k={boundary:0,storage:0};if(typeof M==="number"||typeof M==="boolean")k.boundary=4,k.storage=4;else if(M.isVector2)k.boundary=8,k.storage=8;else if(M.isVector3||M.isColor)k.boundary=16,k.storage=12;else if(M.isVector4)k.boundary=16,k.storage=16;else if(M.isMatrix3)k.boundary=48,k.storage=48;else if(M.isMatrix4)k.boundary=64,k.storage=64;else if(M.isTexture);return k}function O(M){let k=M.target;k.removeEventListener("dispose",O);let I=K.indexOf(k.__bindingPointIndex);K.splice(I,1),J.deleteBuffer(W[k.id]),delete W[k.id],delete H[k.id]}function D(){for(let M in W)J.deleteBuffer(W[M]);K=[],W={},H={}}return{bind:X,update:U,dispose:D}}class qG{constructor(J={}){let{canvas:Q=PH(),context:Z=null,depth:$=!0,stencil:W=!1,alpha:H=!1,antialias:K=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reverseDepthBuffer:E=!1}=J;this.isWebGLRenderer=!0;let N;if(Z!==null){if(typeof WebGLRenderingContext!=="undefined"&&Z instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");N=Z.getContextAttributes().alpha}else N=H;let q=new Uint32Array(4),R=new Int32Array(4),F=null,O=null,D=[],M=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kH,this.toneMapping=k8,this.toneMappingExposure=1;let k=this,I=!1,P=0,_=0,w=null,y=-1,L=null,z=new eJ,S=new eJ,g=null,p=new qJ(0),l=0,s=Q.width,d=Q.height,ZJ=1,m=null,EJ=null,UJ=new eJ(0,0,s,d),SJ=new eJ(0,0,s,d),sJ=!1,c=new j9,KJ=!1,wJ=!1;this.transmissionResolutionScale=1;let IJ=new jJ,YJ=new jJ,oJ=new A,yJ=new eJ,mJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},JJ=!1;function t(){return w===null?ZJ:1}let C=Z;function zJ(B,j){return Q.getContext(B,j)}try{let B={alpha:!0,depth:$,stencil:W,antialias:K,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${LW}`);if(Q.addEventListener("webglcontextlost",n,!1),Q.addEventListener("webglcontextrestored",a,!1),Q.addEventListener("webglcontextcreationerror",RJ,!1),C===null){if(C=zJ("webgl2",B),C===null)if(zJ("webgl2"))throw new Error("Error creating WebGL context with your selected attributes.");else throw new Error("Error creating WebGL context.")}}catch(B){throw B}let WJ,CJ,e,vJ,DJ,_J,T,V,b,o,r,u,PJ,GJ,FJ,hJ,HJ,kJ,aJ,fJ,VJ,uJ,iJ,U0;function f(){if(WJ=new QD(C),WJ.init(),uJ=new GG(C,WJ),CJ=new oq(C,WJ,J,uJ),e=new T5(C,WJ),CJ.reverseDepthBuffer&&E)e.buffers.depth.setReversed(!0);vJ=new WD(C),DJ=new F5,_J=new S5(C,WJ,e,DJ,CJ,uJ,vJ),T=new rq(k),V=new JD(k),b=new EN(C),iJ=new sq(C,b),o=new ZD(C,b,vJ,iJ),r=new KD(C,o,b,vJ),aJ=new HD(C,CJ,_J),hJ=new aq(DJ),u=new R5(k,T,V,WJ,CJ,iJ,hJ),PJ=new f5(k,DJ),GJ=new M5,FJ=new _5(WJ),kJ=new nq(k,T,V,e,r,N,Y),HJ=new A5(k,r,CJ),U0=new b5(C,vJ,CJ,e),fJ=new iq(C,WJ,vJ),VJ=new $D(C,WJ,vJ),vJ.programs=u.programs,k.capabilities=CJ,k.extensions=WJ,k.properties=DJ,k.renderLists=GJ,k.shadowMap=HJ,k.state=e,k.info=vJ}f();let $J=new NG(k,C);this.xr=$J,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let B=WJ.get("WEBGL_lose_context");if(B)B.loseContext()},this.forceContextRestore=function(){let B=WJ.get("WEBGL_lose_context");if(B)B.restoreContext()},this.getPixelRatio=function(){return ZJ},this.setPixelRatio=function(B){if(B===void 0)return;ZJ=B,this.setSize(s,d,!1)},this.getSize=function(B){return B.set(s,d)},this.setSize=function(B,j,h=!0){if($J.isPresenting)return;if(s=B,d=j,Q.width=Math.floor(B*ZJ),Q.height=Math.floor(j*ZJ),h===!0)Q.style.width=B+"px",Q.style.height=j+"px";this.setViewport(0,0,B,j)},this.getDrawingBufferSize=function(B){return B.set(s*ZJ,d*ZJ).floor()},this.setDrawingBufferSize=function(B,j,h){s=B,d=j,ZJ=h,Q.width=Math.floor(B*h),Q.height=Math.floor(j*h),this.setViewport(0,0,B,j)},this.getCurrentViewport=function(B){return B.copy(z)},this.getViewport=function(B){return B.copy(UJ)},this.setViewport=function(B,j,h,x){if(B.isVector4)UJ.set(B.x,B.y,B.z,B.w);else UJ.set(B,j,h,x);e.viewport(z.copy(UJ).multiplyScalar(ZJ).round())},this.getScissor=function(B){return B.copy(SJ)},this.setScissor=function(B,j,h,x){if(B.isVector4)SJ.set(B.x,B.y,B.z,B.w);else SJ.set(B,j,h,x);e.scissor(S.copy(SJ).multiplyScalar(ZJ).round())},this.getScissorTest=function(){return sJ},this.setScissorTest=function(B){e.setScissorTest(sJ=B)},this.setOpaqueSort=function(B){m=B},this.setTransparentSort=function(B){EJ=B},this.getClearColor=function(B){return B.copy(kJ.getClearColor())},this.setClearColor=function(){kJ.setClearColor.apply(kJ,arguments)},this.getClearAlpha=function(){return kJ.getClearAlpha()},this.setClearAlpha=function(){kJ.setClearAlpha.apply(kJ,arguments)},this.clear=function(B=!0,j=!0,h=!0){let x=0;if(B){let v=!1;if(w!==null){let QJ=w.texture.format;v=QJ===QZ||QJ===JZ||QJ===eQ}if(v){let QJ=w.texture.type,NJ=QJ===y8||QJ===C9||QJ===N7||QJ===w9||QJ===rQ||QJ===tQ,MJ=kJ.getClearColor(),LJ=kJ.getClearAlpha(),bJ=MJ.r,xJ=MJ.g,AJ=MJ.b;if(NJ)q[0]=bJ,q[1]=xJ,q[2]=AJ,q[3]=LJ,C.clearBufferuiv(C.COLOR,0,q);else R[0]=bJ,R[1]=xJ,R[2]=AJ,R[3]=LJ,C.clearBufferiv(C.COLOR,0,R)}else x|=C.COLOR_BUFFER_BIT}if(j)x|=C.DEPTH_BUFFER_BIT;if(h)x|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);C.clear(x)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",n,!1),Q.removeEventListener("webglcontextrestored",a,!1),Q.removeEventListener("webglcontextcreationerror",RJ,!1),kJ.dispose(),GJ.dispose(),FJ.dispose(),DJ.dispose(),T.dispose(),V.dispose(),r.dispose(),iJ.dispose(),U0.dispose(),u.dispose(),$J.dispose(),$J.removeEventListener("sessionstart",D8),$J.removeEventListener("sessionend",uK),e8.stop()};function n(B){B.preventDefault(),I=!0}function a(){I=!1;let B=vJ.autoReset,j=HJ.enabled,h=HJ.autoUpdate,x=HJ.needsUpdate,v=HJ.type;f(),vJ.autoReset=B,HJ.enabled=j,HJ.autoUpdate=h,HJ.needsUpdate=x,HJ.type=v}function RJ(B){}function OJ(B){let j=B.target;j.removeEventListener("dispose",OJ),nJ(j)}function nJ(B){N0(B),DJ.remove(B)}function N0(B){let j=DJ.get(B).programs;if(j!==void 0){if(j.forEach(function(h){u.releaseProgram(h)}),B.isShaderMaterial)u.releaseShaderCache(B)}}this.renderBufferDirect=function(B,j,h,x,v,QJ){if(j===null)j=mJ;let NJ=v.isMesh&&v.matrixWorld.determinant()<0,MJ=DG(B,j,h,x,v);e.setMaterial(x,NJ);let LJ=h.index,bJ=1;if(x.wireframe===!0){if(LJ=o.getWireframeAttribute(h),LJ===void 0)return;bJ=2}let xJ=h.drawRange,AJ=h.attributes.position,Q0=xJ.start*bJ,W0=(xJ.start+xJ.count)*bJ;if(QJ!==null)Q0=Math.max(Q0,QJ.start*bJ),W0=Math.min(W0,(QJ.start+QJ.count)*bJ);if(LJ!==null)Q0=Math.max(Q0,0),W0=Math.min(W0,LJ.count);else if(AJ!==void 0&&AJ!==null)Q0=Math.max(Q0,0),W0=Math.min(W0,AJ.count);let F0=W0-Q0;if(F0<0||F0===1/0)return;iJ.setup(v,x,MJ,h,LJ);let q0,Z0=fJ;if(LJ!==null)q0=b.get(LJ),Z0=VJ,Z0.setIndex(q0);if(v.isMesh)if(x.wireframe===!0)e.setLineWidth(x.wireframeLinewidth*t()),Z0.setMode(C.LINES);else Z0.setMode(C.TRIANGLES);else if(v.isLine){let TJ=x.linewidth;if(TJ===void 0)TJ=1;if(e.setLineWidth(TJ*t()),v.isLineSegments)Z0.setMode(C.LINES);else if(v.isLineLoop)Z0.setMode(C.LINE_LOOP);else Z0.setMode(C.LINE_STRIP)}else if(v.isPoints)Z0.setMode(C.POINTS);else if(v.isSprite)Z0.setMode(C.TRIANGLES);if(v.isBatchedMesh)if(v._multiDrawInstances!==null)Z0.renderMultiDrawInstances(v._multiDrawStarts,v._multiDrawCounts,v._multiDrawCount,v._multiDrawInstances);else if(!WJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:TJ,_multiDrawCounts:C0,_multiDrawCount:H0}=v,W8=LJ?b.get(LJ).bytesPerElement:1,p9=DJ.get(x).currentProgram.getUniforms();for(let u0=0;u0<H0;u0++)p9.setValue(C,"_gl_DrawID",u0),Z0.render(TJ[u0]/W8,C0[u0])}else Z0.renderMultiDraw(v._multiDrawStarts,v._multiDrawCounts,v._multiDrawCount);else if(v.isInstancedMesh)Z0.renderInstances(Q0,F0,v.count);else if(h.isInstancedBufferGeometry){let TJ=h._maxInstanceCount!==void 0?h._maxInstanceCount:1/0,C0=Math.min(h.instanceCount,TJ);Z0.renderInstances(Q0,F0,C0)}else Z0.render(Q0,F0)};function _0(B,j,h){if(B.transparent===!0&&B.side===E8&&B.forceSinglePass===!1)B.side=d0,B.needsUpdate=!0,e6(B,j,h),B.side=L9,B.needsUpdate=!0,e6(B,j,h),B.side=E8;else e6(B,j,h)}this.compile=function(B,j,h=null){if(h===null)h=B;if(O=FJ.get(h),O.init(j),M.push(O),h.traverseVisible(function(v){if(v.isLight&&v.layers.test(j.layers)){if(O.pushLight(v),v.castShadow)O.pushShadow(v)}}),B!==h)B.traverseVisible(function(v){if(v.isLight&&v.layers.test(j.layers)){if(O.pushLight(v),v.castShadow)O.pushShadow(v)}});O.setupLights();let x=/*@__PURE__*/new Set;return B.traverse(function(v){if(!(v.isMesh||v.isPoints||v.isLine||v.isSprite))return;let QJ=v.material;if(QJ)if(Array.isArray(QJ))for(let NJ=0;NJ<QJ.length;NJ++){let MJ=QJ[NJ];_0(MJ,h,v),x.add(MJ)}else _0(QJ,h,v),x.add(QJ)}),M.pop(),O=null,x},this.compileAsync=function(B,j,h=null){let x=this.compile(B,j,h);return new Promise((v)=>{function QJ(){if(x.forEach(function(NJ){if(DJ.get(NJ).currentProgram.isReady())x.delete(NJ)}),x.size===0){v(B);return}setTimeout(QJ,10)}if(WJ.get("KHR_parallel_shader_compile")!==null)QJ();else setTimeout(QJ,10)})};let $0=null;function L8(B){if($0)$0(B)}function D8(){e8.stop()}function uK(){e8.start()}let e8=new JG;if(e8.setAnimationLoop(L8),typeof self!=="undefined")e8.setContext(self);this.setAnimationLoop=function(B){$0=B,$J.setAnimationLoop(B),B===null?e8.stop():e8.start()},$J.addEventListener("sessionstart",D8),$J.addEventListener("sessionend",uK),this.render=function(B,j){if(j!==void 0&&j.isCamera!==!0)return;if(I===!0)return;if(B.matrixWorldAutoUpdate===!0)B.updateMatrixWorld();if(j.parent===null&&j.matrixWorldAutoUpdate===!0)j.updateMatrixWorld();if($J.enabled===!0&&$J.isPresenting===!0){if($J.cameraAutoUpdate===!0)$J.updateCamera(j);j=$J.getCamera()}if(B.isScene===!0)B.onBeforeRender(k,B,j,w);if(O=FJ.get(B,M.length),O.init(j),M.push(O),YJ.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),c.setFromProjectionMatrix(YJ),wJ=this.localClippingEnabled,KJ=hJ.init(this.clippingPlanes,wJ),F=GJ.get(B,D.length),F.init(),D.push(F),$J.enabled===!0&&$J.isPresenting===!0){let QJ=k.xr.getDepthSensingMesh();if(QJ!==null)y$(QJ,j,-1/0,k.sortObjects)}if(y$(B,j,0,k.sortObjects),F.finish(),k.sortObjects===!0)F.sort(m,EJ);if(JJ=$J.enabled===!1||$J.isPresenting===!1||$J.hasDepthSensing()===!1,JJ)kJ.addToRenderList(F,B);if(this.info.render.frame++,KJ===!0)hJ.beginShadows();let h=O.state.shadowsArray;if(HJ.render(h,B,j),KJ===!0)hJ.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:x,transmissive:v}=F;if(O.setupLights(),j.isArrayCamera){let QJ=j.cameras;if(v.length>0)for(let NJ=0,MJ=QJ.length;NJ<MJ;NJ++){let LJ=QJ[NJ];nK(x,v,B,LJ)}if(JJ)kJ.render(B);for(let NJ=0,MJ=QJ.length;NJ<MJ;NJ++){let LJ=QJ[NJ];cK(F,B,LJ,LJ.viewport)}}else{if(v.length>0)nK(x,v,B,j);if(JJ)kJ.render(B);cK(F,B,j)}if(w!==null&&_===0)_J.updateMultisampleRenderTarget(w),_J.updateRenderTargetMipmap(w);if(B.isScene===!0)B.onAfterRender(k,B,j);if(iJ.resetDefaultState(),y=-1,L=null,M.pop(),M.length>0){if(O=M[M.length-1],KJ===!0)hJ.setGlobalState(k.clippingPlanes,O.state.camera)}else O=null;if(D.pop(),D.length>0)F=D[D.length-1];else F=null};function y$(B,j,h,x){if(B.visible===!1)return;if(B.layers.test(j.layers)){if(B.isGroup)h=B.renderOrder;else if(B.isLOD){if(B.autoUpdate===!0)B.update(j)}else if(B.isLight){if(O.pushLight(B),B.castShadow)O.pushShadow(B)}else if(B.isSprite){if(!B.frustumCulled||c.intersectsSprite(B)){if(x)yJ.setFromMatrixPosition(B.matrixWorld).applyMatrix4(YJ);let NJ=r.update(B),MJ=B.material;if(MJ.visible)F.push(B,NJ,MJ,h,yJ.z,null)}}else if(B.isMesh||B.isLine||B.isPoints){if(!B.frustumCulled||c.intersectsObject(B)){let NJ=r.update(B),MJ=B.material;if(x){if(B.boundingSphere!==void 0){if(B.boundingSphere===null)B.computeBoundingSphere();yJ.copy(B.boundingSphere.center)}else{if(NJ.boundingSphere===null)NJ.computeBoundingSphere();yJ.copy(NJ.boundingSphere.center)}yJ.applyMatrix4(B.matrixWorld).applyMatrix4(YJ)}if(Array.isArray(MJ)){let LJ=NJ.groups;for(let bJ=0,xJ=LJ.length;bJ<xJ;bJ++){let AJ=LJ[bJ],Q0=MJ[AJ.materialIndex];if(Q0&&Q0.visible)F.push(B,NJ,Q0,h,yJ.z,AJ)}}else if(MJ.visible)F.push(B,NJ,MJ,h,yJ.z,null)}}}let QJ=B.children;for(let NJ=0,MJ=QJ.length;NJ<MJ;NJ++)y$(QJ[NJ],j,h,x)}function cK(B,j,h,x){let{opaque:v,transmissive:QJ,transparent:NJ}=B;if(O.setupLightsView(h),KJ===!0)hJ.setGlobalState(k.clippingPlanes,h);if(x)e.viewport(z.copy(x));if(v.length>0)t6(v,j,h);if(QJ.length>0)t6(QJ,j,h);if(NJ.length>0)t6(NJ,j,h);e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),e.setPolygonOffset(!1)}function nK(B,j,h,x){if((h.isScene===!0?h.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[x.id]===void 0)O.state.transmissionRenderTarget[x.id]=new Z8(1,1,{generateMipmaps:!0,type:WJ.has("EXT_color_buffer_half_float")||WJ.has("EXT_color_buffer_float")?q7:y8,minFilter:_9,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rJ.workingColorSpace});let QJ=O.state.transmissionRenderTarget[x.id],NJ=x.viewport||z;QJ.setSize(NJ.z*k.transmissionResolutionScale,NJ.w*k.transmissionResolutionScale);let MJ=k.getRenderTarget();if(k.setRenderTarget(QJ),k.getClearColor(p),l=k.getClearAlpha(),l<1)k.setClearColor(16777215,0.5);if(k.clear(),JJ)kJ.render(h);let LJ=k.toneMapping;k.toneMapping=k8;let bJ=x.viewport;if(x.viewport!==void 0)x.viewport=void 0;if(O.setupLightsView(x),KJ===!0)hJ.setGlobalState(k.clippingPlanes,x);if(t6(B,h,x),_J.updateMultisampleRenderTarget(QJ),_J.updateRenderTargetMipmap(QJ),WJ.has("WEBGL_multisampled_render_to_texture")===!1){let xJ=!1;for(let AJ=0,Q0=j.length;AJ<Q0;AJ++){let W0=j[AJ],F0=W0.object,q0=W0.geometry,Z0=W0.material,TJ=W0.group;if(Z0.side===E8&&F0.layers.test(x.layers)){let C0=Z0.side;Z0.side=d0,Z0.needsUpdate=!0,sK(F0,h,x,q0,Z0,TJ),Z0.side=C0,Z0.needsUpdate=!0,xJ=!0}}if(xJ===!0)_J.updateMultisampleRenderTarget(QJ),_J.updateRenderTargetMipmap(QJ)}if(k.setRenderTarget(MJ),k.setClearColor(p,l),bJ!==void 0)x.viewport=bJ;k.toneMapping=LJ}function t6(B,j,h){let x=j.isScene===!0?j.overrideMaterial:null;for(let v=0,QJ=B.length;v<QJ;v++){let NJ=B[v],MJ=NJ.object,LJ=NJ.geometry,bJ=x===null?NJ.material:x,xJ=NJ.group;if(MJ.layers.test(h.layers))sK(MJ,j,h,LJ,bJ,xJ)}}function sK(B,j,h,x,v,QJ){if(B.onBeforeRender(k,j,h,x,v,QJ),B.modelViewMatrix.multiplyMatrices(h.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),v.onBeforeRender(k,j,h,x,B,QJ),v.transparent===!0&&v.side===E8&&v.forceSinglePass===!1)v.side=d0,v.needsUpdate=!0,k.renderBufferDirect(h,j,x,v,B,QJ),v.side=L9,v.needsUpdate=!0,k.renderBufferDirect(h,j,x,v,B,QJ),v.side=E8;else k.renderBufferDirect(h,j,x,v,B,QJ);B.onAfterRender(k,j,h,x,v,QJ)}function e6(B,j,h){if(j.isScene!==!0)j=mJ;let x=DJ.get(B),v=O.state.lights,QJ=O.state.shadowsArray,NJ=v.state.version,MJ=u.getParameters(B,v.state,QJ,j,h),LJ=u.getProgramCacheKey(MJ),bJ=x.programs;if(x.environment=B.isMeshStandardMaterial?j.environment:null,x.fog=j.fog,x.envMap=(B.isMeshStandardMaterial?V:T).get(B.envMap||x.environment),x.envMapRotation=x.environment!==null&&B.envMap===null?j.environmentRotation:B.envMapRotation,bJ===void 0)B.addEventListener("dispose",OJ),bJ=/*@__PURE__*/new Map,x.programs=bJ;let xJ=bJ.get(LJ);if(xJ!==void 0){if(x.currentProgram===xJ&&x.lightsStateVersion===NJ)return oK(B,MJ),xJ}else MJ.uniforms=u.getUniforms(B),B.onBeforeCompile(MJ,k),xJ=u.acquireProgram(MJ,LJ),bJ.set(LJ,xJ),x.uniforms=MJ.uniforms;let AJ=x.uniforms;if(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)AJ.clippingPlanes=hJ.uniform;if(oK(B,MJ),x.needsLights=RG(B),x.lightsStateVersion=NJ,x.needsLights)AJ.ambientLightColor.value=v.state.ambient,AJ.lightProbe.value=v.state.probe,AJ.directionalLights.value=v.state.directional,AJ.directionalLightShadows.value=v.state.directionalShadow,AJ.spotLights.value=v.state.spot,AJ.spotLightShadows.value=v.state.spotShadow,AJ.rectAreaLights.value=v.state.rectArea,AJ.ltc_1.value=v.state.rectAreaLTC1,AJ.ltc_2.value=v.state.rectAreaLTC2,AJ.pointLights.value=v.state.point,AJ.pointLightShadows.value=v.state.pointShadow,AJ.hemisphereLights.value=v.state.hemi,AJ.directionalShadowMap.value=v.state.directionalShadowMap,AJ.directionalShadowMatrix.value=v.state.directionalShadowMatrix,AJ.spotShadowMap.value=v.state.spotShadowMap,AJ.spotLightMatrix.value=v.state.spotLightMatrix,AJ.spotLightMap.value=v.state.spotLightMap,AJ.pointShadowMap.value=v.state.pointShadowMap,AJ.pointShadowMatrix.value=v.state.pointShadowMatrix;return x.currentProgram=xJ,x.uniformsList=null,xJ}function iK(B){if(B.uniformsList===null){let j=B.currentProgram.getUniforms();B.uniformsList=r6.seqWithValue(j.seq,B.uniforms)}return B.uniformsList}function oK(B,j){let h=DJ.get(B);h.outputColorSpace=j.outputColorSpace,h.batching=j.batching,h.batchingColor=j.batchingColor,h.instancing=j.instancing,h.instancingColor=j.instancingColor,h.instancingMorph=j.instancingMorph,h.skinning=j.skinning,h.morphTargets=j.morphTargets,h.morphNormals=j.morphNormals,h.morphColors=j.morphColors,h.morphTargetsCount=j.morphTargetsCount,h.numClippingPlanes=j.numClippingPlanes,h.numIntersection=j.numClipIntersection,h.vertexAlphas=j.vertexAlphas,h.vertexTangents=j.vertexTangents,h.toneMapping=j.toneMapping}function DG(B,j,h,x,v){if(j.isScene!==!0)j=mJ;_J.resetTextureUnits();let QJ=j.fog,NJ=x.isMeshStandardMaterial?j.environment:null,MJ=w===null?k.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:O7,LJ=(x.isMeshStandardMaterial?V:T).get(x.envMap||NJ),bJ=x.vertexColors===!0&&!!h.attributes.color&&h.attributes.color.itemSize===4,xJ=!!h.attributes.tangent&&(!!x.normalMap||x.anisotropy>0),AJ=!!h.morphAttributes.position,Q0=!!h.morphAttributes.normal,W0=!!h.morphAttributes.color,F0=k8;if(x.toneMapped){if(w===null||w.isXRRenderTarget===!0)F0=k.toneMapping}let q0=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,Z0=q0!==void 0?q0.length:0,TJ=DJ.get(x),C0=O.state.lights;if(KJ===!0){if(wJ===!0||B!==L){let f0=B===L&&x.id===y;hJ.setState(x,B,f0)}}let H0=!1;if(x.version===TJ.__version){if(TJ.needsLights&&TJ.lightsStateVersion!==C0.state.version)H0=!0;else if(TJ.outputColorSpace!==MJ)H0=!0;else if(v.isBatchedMesh&&TJ.batching===!1)H0=!0;else if(!v.isBatchedMesh&&TJ.batching===!0)H0=!0;else if(v.isBatchedMesh&&TJ.batchingColor===!0&&v.colorTexture===null)H0=!0;else if(v.isBatchedMesh&&TJ.batchingColor===!1&&v.colorTexture!==null)H0=!0;else if(v.isInstancedMesh&&TJ.instancing===!1)H0=!0;else if(!v.isInstancedMesh&&TJ.instancing===!0)H0=!0;else if(v.isSkinnedMesh&&TJ.skinning===!1)H0=!0;else if(!v.isSkinnedMesh&&TJ.skinning===!0)H0=!0;else if(v.isInstancedMesh&&TJ.instancingColor===!0&&v.instanceColor===null)H0=!0;else if(v.isInstancedMesh&&TJ.instancingColor===!1&&v.instanceColor!==null)H0=!0;else if(v.isInstancedMesh&&TJ.instancingMorph===!0&&v.morphTexture===null)H0=!0;else if(v.isInstancedMesh&&TJ.instancingMorph===!1&&v.morphTexture!==null)H0=!0;else if(TJ.envMap!==LJ)H0=!0;else if(x.fog===!0&&TJ.fog!==QJ)H0=!0;else if(TJ.numClippingPlanes!==void 0&&(TJ.numClippingPlanes!==hJ.numPlanes||TJ.numIntersection!==hJ.numIntersection))H0=!0;else if(TJ.vertexAlphas!==bJ)H0=!0;else if(TJ.vertexTangents!==xJ)H0=!0;else if(TJ.morphTargets!==AJ)H0=!0;else if(TJ.morphNormals!==Q0)H0=!0;else if(TJ.morphColors!==W0)H0=!0;else if(TJ.toneMapping!==F0)H0=!0;else if(TJ.morphTargetsCount!==Z0)H0=!0}else H0=!0,TJ.__version=x.version;let W8=TJ.currentProgram;if(H0===!0)W8=e6(x,j,v);let p9=!1,u0=!1,j7=!1,X0=W8.getUniforms(),r0=TJ.uniforms;if(e.useProgram(W8.program))p9=!0,u0=!0,j7=!0;if(x.id!==y)y=x.id,u0=!0;if(p9||L!==B){if(e.buffers.depth.getReversed())IJ.copy(B.projectionMatrix),NU(IJ),qU(IJ),X0.setValue(C,"projectionMatrix",IJ);else X0.setValue(C,"projectionMatrix",B.projectionMatrix);X0.setValue(C,"viewMatrix",B.matrixWorldInverse);let g0=X0.map.cameraPosition;if(g0!==void 0)g0.setValue(C,oJ.setFromMatrixPosition(B.matrixWorld));if(CJ.logarithmicDepthBuffer)X0.setValue(C,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2));if(x.isMeshPhongMaterial||x.isMeshToonMaterial||x.isMeshLambertMaterial||x.isMeshBasicMaterial||x.isMeshStandardMaterial||x.isShaderMaterial)X0.setValue(C,"isOrthographic",B.isOrthographicCamera===!0);if(L!==B)L=B,u0=!0,j7=!0}if(v.isSkinnedMesh){X0.setOptional(C,v,"bindMatrix"),X0.setOptional(C,v,"bindMatrixInverse");let f0=v.skeleton;if(f0){if(f0.boneTexture===null)f0.computeBoneTexture();X0.setValue(C,"boneTexture",f0.boneTexture,_J)}}if(v.isBatchedMesh){if(X0.setOptional(C,v,"batchingTexture"),X0.setValue(C,"batchingTexture",v._matricesTexture,_J),X0.setOptional(C,v,"batchingIdTexture"),X0.setValue(C,"batchingIdTexture",v._indirectTexture,_J),X0.setOptional(C,v,"batchingColorTexture"),v._colorsTexture!==null)X0.setValue(C,"batchingColorTexture",v._colorsTexture,_J)}let t0=h.morphAttributes;if(t0.position!==void 0||t0.normal!==void 0||t0.color!==void 0)aJ.update(v,h,W8);if(u0||TJ.receiveShadow!==v.receiveShadow)TJ.receiveShadow=v.receiveShadow,X0.setValue(C,"receiveShadow",v.receiveShadow);if(x.isMeshGouraudMaterial&&x.envMap!==null)r0.envMap.value=LJ,r0.flipEnvMap.value=LJ.isCubeTexture&&LJ.isRenderTargetTexture===!1?-1:1;if(x.isMeshStandardMaterial&&x.envMap===null&&j.environment!==null)r0.envMapIntensity.value=j.environmentIntensity;if(u0){if(X0.setValue(C,"toneMappingExposure",k.toneMappingExposure),TJ.needsLights)OG(r0,j7);if(QJ&&x.fog===!0)PJ.refreshFogUniforms(r0,QJ);PJ.refreshMaterialUniforms(r0,x,ZJ,d,O.state.transmissionRenderTarget[B.id]),r6.upload(C,iK(TJ),r0,_J)}if(x.isShaderMaterial&&x.uniformsNeedUpdate===!0)r6.upload(C,iK(TJ),r0,_J),x.uniformsNeedUpdate=!1;if(x.isSpriteMaterial)X0.setValue(C,"center",v.center);if(X0.setValue(C,"modelViewMatrix",v.modelViewMatrix),X0.setValue(C,"normalMatrix",v.normalMatrix),X0.setValue(C,"modelMatrix",v.matrixWorld),x.isShaderMaterial||x.isRawShaderMaterial){let f0=x.uniformsGroups;for(let g0=0,v$=f0.length;g0<v$;g0++){let J9=f0[g0];U0.update(J9,W8),U0.bind(J9,W8)}}return W8}function OG(B,j){B.ambientLightColor.needsUpdate=j,B.lightProbe.needsUpdate=j,B.directionalLights.needsUpdate=j,B.directionalLightShadows.needsUpdate=j,B.pointLights.needsUpdate=j,B.pointLightShadows.needsUpdate=j,B.spotLights.needsUpdate=j,B.spotLightShadows.needsUpdate=j,B.rectAreaLights.needsUpdate=j,B.hemisphereLights.needsUpdate=j}function RG(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(B,j,h){DJ.get(B.texture).__webglTexture=j,DJ.get(B.depthTexture).__webglTexture=h;let x=DJ.get(B);if(x.__hasExternalTextures=!0,x.__autoAllocateDepthBuffer=h===void 0,!x.__autoAllocateDepthBuffer){if(WJ.has("WEBGL_multisampled_render_to_texture")===!0)x.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(B,j){let h=DJ.get(B);h.__webglFramebuffer=j,h.__useDefaultFramebuffer=j===void 0};let FG=C.createFramebuffer();this.setRenderTarget=function(B,j=0,h=0){w=B,P=j,_=h;let x=!0,v=null,QJ=!1,NJ=!1;if(B){let LJ=DJ.get(B);if(LJ.__useDefaultFramebuffer!==void 0)e.bindFramebuffer(C.FRAMEBUFFER,null),x=!1;else if(LJ.__webglFramebuffer===void 0)_J.setupRenderTarget(B);else if(LJ.__hasExternalTextures)_J.rebindTextures(B,DJ.get(B.texture).__webglTexture,DJ.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let AJ=B.depthTexture;if(LJ.__boundDepthTexture!==AJ){if(AJ!==null&&DJ.has(AJ)&&(B.width!==AJ.image.width||B.height!==AJ.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_J.setupDepthRenderbuffer(B)}}let bJ=B.texture;if(bJ.isData3DTexture||bJ.isDataArrayTexture||bJ.isCompressedArrayTexture)NJ=!0;let xJ=DJ.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget){if(Array.isArray(xJ[j]))v=xJ[j][h];else v=xJ[j];QJ=!0}else if(B.samples>0&&_J.useMultisampledRTT(B)===!1)v=DJ.get(B).__webglMultisampledFramebuffer;else if(Array.isArray(xJ))v=xJ[h];else v=xJ;z.copy(B.viewport),S.copy(B.scissor),g=B.scissorTest}else z.copy(UJ).multiplyScalar(ZJ).floor(),S.copy(SJ).multiplyScalar(ZJ).floor(),g=sJ;if(h!==0)v=FG;if(e.bindFramebuffer(C.FRAMEBUFFER,v)&&x)e.drawBuffers(B,v);if(e.viewport(z),e.scissor(S),e.setScissorTest(g),QJ){let LJ=DJ.get(B.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+j,LJ.__webglTexture,h)}else if(NJ){let LJ=DJ.get(B.texture),bJ=j;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,LJ.__webglTexture,h,bJ)}else if(B!==null&&h!==0){let LJ=DJ.get(B.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,LJ.__webglTexture,h)}y=-1},this.readRenderTargetPixels=function(B,j,h,x,v,QJ,NJ){if(!(B&&B.isWebGLRenderTarget))return;let MJ=DJ.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&NJ!==void 0)MJ=MJ[NJ];if(MJ){e.bindFramebuffer(C.FRAMEBUFFER,MJ);try{let LJ=B.texture,bJ=LJ.format,xJ=LJ.type;if(!CJ.textureFormatReadable(bJ))return;if(!CJ.textureTypeReadable(xJ))return;if(j>=0&&j<=B.width-x&&(h>=0&&h<=B.height-v))C.readPixels(j,h,x,v,uJ.convert(bJ),uJ.convert(xJ),QJ)}finally{let LJ=w!==null?DJ.get(w).__webglFramebuffer:null;e.bindFramebuffer(C.FRAMEBUFFER,LJ)}}},this.readRenderTargetPixelsAsync=async function(B,j,h,x,v,QJ,NJ){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let MJ=DJ.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&NJ!==void 0)MJ=MJ[NJ];if(MJ){let LJ=B.texture,bJ=LJ.format,xJ=LJ.type;if(!CJ.textureFormatReadable(bJ))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!CJ.textureTypeReadable(xJ))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=B.width-x&&(h>=0&&h<=B.height-v)){e.bindFramebuffer(C.FRAMEBUFFER,MJ);let AJ=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,AJ),C.bufferData(C.PIXEL_PACK_BUFFER,QJ.byteLength,C.STREAM_READ),C.readPixels(j,h,x,v,uJ.convert(bJ),uJ.convert(xJ),0);let Q0=w!==null?DJ.get(w).__webglFramebuffer:null;e.bindFramebuffer(C.FRAMEBUFFER,Q0);let W0=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await EU(C,W0,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,AJ),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,QJ),C.deleteBuffer(AJ),C.deleteSync(W0),QJ}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(B,j=null,h=0){if(B.isTexture!==!0)A9("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,B=arguments[1];let x=Math.pow(2,-h),v=Math.floor(B.image.width*x),QJ=Math.floor(B.image.height*x),NJ=j!==null?j.x:0,MJ=j!==null?j.y:0;_J.setTexture2D(B,0),C.copyTexSubImage2D(C.TEXTURE_2D,h,0,0,NJ,MJ,v,QJ),e.unbindTexture()};let kG=C.createFramebuffer(),MG=C.createFramebuffer();if(this.copyTextureToTexture=function(B,j,h=null,x=null,v=0,QJ=null){if(B.isTexture!==!0)A9("WebGLRenderer: copyTextureToTexture function signature has changed."),x=arguments[0]||null,B=arguments[1],j=arguments[2],QJ=arguments[3]||0,h=null;if(QJ===null)if(v!==0)A9("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),QJ=v,v=0;else QJ=0;let NJ,MJ,LJ,bJ,xJ,AJ,Q0,W0,F0,q0=B.isCompressedTexture?B.mipmaps[QJ]:B.image;if(h!==null)NJ=h.max.x-h.min.x,MJ=h.max.y-h.min.y,LJ=h.isBox3?h.max.z-h.min.z:1,bJ=h.min.x,xJ=h.min.y,AJ=h.isBox3?h.min.z:0;else{let t0=Math.pow(2,-v);if(NJ=Math.floor(q0.width*t0),MJ=Math.floor(q0.height*t0),B.isDataArrayTexture)LJ=q0.depth;else if(B.isData3DTexture)LJ=Math.floor(q0.depth*t0);else LJ=1;bJ=0,xJ=0,AJ=0}if(x!==null)Q0=x.x,W0=x.y,F0=x.z;else Q0=0,W0=0,F0=0;let Z0=uJ.convert(j.format),TJ=uJ.convert(j.type),C0;if(j.isData3DTexture)_J.setTexture3D(j,0),C0=C.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)_J.setTexture2DArray(j,0),C0=C.TEXTURE_2D_ARRAY;else _J.setTexture2D(j,0),C0=C.TEXTURE_2D;C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,j.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,j.unpackAlignment);let H0=C.getParameter(C.UNPACK_ROW_LENGTH),W8=C.getParameter(C.UNPACK_IMAGE_HEIGHT),p9=C.getParameter(C.UNPACK_SKIP_PIXELS),u0=C.getParameter(C.UNPACK_SKIP_ROWS),j7=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,q0.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,q0.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,bJ),C.pixelStorei(C.UNPACK_SKIP_ROWS,xJ),C.pixelStorei(C.UNPACK_SKIP_IMAGES,AJ);let X0=B.isDataArrayTexture||B.isData3DTexture,r0=j.isDataArrayTexture||j.isData3DTexture;if(B.isDepthTexture){let t0=DJ.get(B),f0=DJ.get(j),g0=DJ.get(t0.__renderTarget),v$=DJ.get(f0.__renderTarget);e.bindFramebuffer(C.READ_FRAMEBUFFER,g0.__webglFramebuffer),e.bindFramebuffer(C.DRAW_FRAMEBUFFER,v$.__webglFramebuffer);for(let J9=0;J9<LJ;J9++){if(X0)C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,DJ.get(B).__webglTexture,v,AJ+J9),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,DJ.get(j).__webglTexture,QJ,F0+J9);C.blitFramebuffer(bJ,xJ,NJ,MJ,Q0,W0,NJ,MJ,C.DEPTH_BUFFER_BIT,C.NEAREST)}e.bindFramebuffer(C.READ_FRAMEBUFFER,null),e.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(v!==0||B.isRenderTargetTexture||DJ.has(B)){let t0=DJ.get(B),f0=DJ.get(j);e.bindFramebuffer(C.READ_FRAMEBUFFER,kG),e.bindFramebuffer(C.DRAW_FRAMEBUFFER,MG);for(let g0=0;g0<LJ;g0++){if(X0)C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,t0.__webglTexture,v,AJ+g0);else C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,t0.__webglTexture,v);if(r0)C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,f0.__webglTexture,QJ,F0+g0);else C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,f0.__webglTexture,QJ);if(v!==0)C.blitFramebuffer(bJ,xJ,NJ,MJ,Q0,W0,NJ,MJ,C.COLOR_BUFFER_BIT,C.NEAREST);else if(r0)C.copyTexSubImage3D(C0,QJ,Q0,W0,F0+g0,bJ,xJ,NJ,MJ);else C.copyTexSubImage2D(C0,QJ,Q0,W0,bJ,xJ,NJ,MJ)}e.bindFramebuffer(C.READ_FRAMEBUFFER,null),e.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(r0)if(B.isDataTexture||B.isData3DTexture)C.texSubImage3D(C0,QJ,Q0,W0,F0,NJ,MJ,LJ,Z0,TJ,q0.data);else if(j.isCompressedArrayTexture)C.compressedTexSubImage3D(C0,QJ,Q0,W0,F0,NJ,MJ,LJ,Z0,q0.data);else C.texSubImage3D(C0,QJ,Q0,W0,F0,NJ,MJ,LJ,Z0,TJ,q0);else if(B.isDataTexture)C.texSubImage2D(C.TEXTURE_2D,QJ,Q0,W0,NJ,MJ,Z0,TJ,q0.data);else if(B.isCompressedTexture)C.compressedTexSubImage2D(C.TEXTURE_2D,QJ,Q0,W0,q0.width,q0.height,Z0,q0.data);else C.texSubImage2D(C.TEXTURE_2D,QJ,Q0,W0,NJ,MJ,Z0,TJ,q0);if(C.pixelStorei(C.UNPACK_ROW_LENGTH,H0),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,W8),C.pixelStorei(C.UNPACK_SKIP_PIXELS,p9),C.pixelStorei(C.UNPACK_SKIP_ROWS,u0),C.pixelStorei(C.UNPACK_SKIP_IMAGES,j7),QJ===0&&j.generateMipmaps)C.generateMipmap(C0);e.unbindTexture()},this.copyTextureToTexture3D=function(B,j,h=null,x=null,v=0){if(B.isTexture!==!0)A9("WebGLRenderer: copyTextureToTexture3D function signature has changed."),h=arguments[0]||null,x=arguments[1]||null,B=arguments[2],j=arguments[3],v=arguments[4]||0;return A9('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(B,j,h,x,v)},this.initRenderTarget=function(B){if(DJ.get(B).__webglFramebuffer===void 0)_J.setupRenderTarget(B)},this.initTexture=function(B){if(B.isCubeTexture)_J.setTextureCube(B,0);else if(B.isData3DTexture)_J.setTexture3D(B,0);else if(B.isDataArrayTexture||B.isCompressedArrayTexture)_J.setTexture2DArray(B,0);else _J.setTexture2D(B,0);e.unbindTexture()},this.resetState=function(){P=0,_=0,w=null,e.reset(),iJ.reset()},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return CH}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorspace=rJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=rJ._getUnpackColorSpace()}}var s5=dK;export{s5 as default};

//# debugId=74A09D9F85B855FF64756E2164756E21
