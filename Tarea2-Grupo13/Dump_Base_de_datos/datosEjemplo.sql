PGDMP     
                     {            aaa    15.2    15.2 ?    P           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            Q           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            R           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            S           1262    18712    aaa    DATABASE     v   CREATE DATABASE aaa WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE aaa;
                postgres    false            �            1259    18713    Defensas    TABLE     W   CREATE TABLE public."Defensas" (
    id integer NOT NULL,
    defensa text NOT NULL
);
    DROP TABLE public."Defensas";
       public         heap    postgres    false            �            1259    18718    Defensas_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Defensas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Defensas_id_seq";
       public          postgres    false    214            T           0    0    Defensas_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Defensas_id_seq" OWNED BY public."Defensas".id;
          public          postgres    false    215            �            1259    18719    Diplomacias    TABLE     �   CREATE TABLE public."Diplomacias" (
    id_reino1 integer NOT NULL,
    id_reino2 integer NOT NULL,
    es_aliado boolean NOT NULL
);
 !   DROP TABLE public."Diplomacias";
       public         heap    postgres    false            �            1259    18722    Karts    TABLE     �   CREATE TABLE public."Karts" (
    id integer NOT NULL,
    modelo text NOT NULL,
    color text NOT NULL,
    velocidad_maxima integer,
    id_personaje integer
);
    DROP TABLE public."Karts";
       public         heap    postgres    false            �            1259    18727    Karts_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Karts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Karts_id_seq";
       public          postgres    false    217            U           0    0    Karts_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Karts_id_seq" OWNED BY public."Karts".id;
          public          postgres    false    218            �            1259    18728    Personaje_habita_reino    TABLE     �   CREATE TABLE public."Personaje_habita_reino" (
    id_personaje integer NOT NULL,
    id_reino integer NOT NULL,
    fecha_registro timestamp without time zone NOT NULL,
    es_gobernante boolean NOT NULL
);
 ,   DROP TABLE public."Personaje_habita_reino";
       public         heap    postgres    false            �            1259    18731    Personaje_tiene_trabajo    TABLE     �   CREATE TABLE public."Personaje_tiene_trabajo" (
    id_trabajo integer NOT NULL,
    id_personaje integer NOT NULL,
    fecha_inicio date NOT NULL,
    fecha_termino date
);
 -   DROP TABLE public."Personaje_tiene_trabajo";
       public         heap    postgres    false            �            1259    18734 
   Personajes    TABLE     �   CREATE TABLE public."Personajes" (
    id integer NOT NULL,
    nombre text NOT NULL,
    fuerza integer NOT NULL,
    fecha_nacimiento date NOT NULL,
    objeto text
);
     DROP TABLE public."Personajes";
       public         heap    postgres    false            �            1259    18739    Personajes_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Personajes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Personajes_id_seq";
       public          postgres    false    221            V           0    0    Personajes_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Personajes_id_seq" OWNED BY public."Personajes".id;
          public          postgres    false    222            �            1259    18740    Reino_tiene_defensa    TABLE     n   CREATE TABLE public."Reino_tiene_defensa" (
    id_reino integer NOT NULL,
    id_defensa integer NOT NULL
);
 )   DROP TABLE public."Reino_tiene_defensa";
       public         heap    postgres    false            �            1259    18743    Reinos    TABLE     �   CREATE TABLE public."Reinos" (
    id integer NOT NULL,
    nombre text NOT NULL,
    ubicacion text NOT NULL,
    superficie integer NOT NULL
);
    DROP TABLE public."Reinos";
       public         heap    postgres    false            �            1259    18748    Reinos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Reinos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Reinos_id_seq";
       public          postgres    false    224            W           0    0    Reinos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Reinos_id_seq" OWNED BY public."Reinos".id;
          public          postgres    false    225            �            1259    18749    Trabajos    TABLE     o   CREATE TABLE public."Trabajos" (
    id integer NOT NULL,
    descripcion text,
    sueldo integer NOT NULL
);
    DROP TABLE public."Trabajos";
       public         heap    postgres    false            �            1259    18754    Trabajos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Trabajos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Trabajos_id_seq";
       public          postgres    false    226            X           0    0    Trabajos_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Trabajos_id_seq" OWNED BY public."Trabajos".id;
          public          postgres    false    227            �            1259    18755    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            �           2604    18762    Defensas id    DEFAULT     n   ALTER TABLE ONLY public."Defensas" ALTER COLUMN id SET DEFAULT nextval('public."Defensas_id_seq"'::regclass);
 <   ALTER TABLE public."Defensas" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214            �           2604    18763    Karts id    DEFAULT     h   ALTER TABLE ONLY public."Karts" ALTER COLUMN id SET DEFAULT nextval('public."Karts_id_seq"'::regclass);
 9   ALTER TABLE public."Karts" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            �           2604    18764    Personajes id    DEFAULT     r   ALTER TABLE ONLY public."Personajes" ALTER COLUMN id SET DEFAULT nextval('public."Personajes_id_seq"'::regclass);
 >   ALTER TABLE public."Personajes" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221            �           2604    18765 	   Reinos id    DEFAULT     j   ALTER TABLE ONLY public."Reinos" ALTER COLUMN id SET DEFAULT nextval('public."Reinos_id_seq"'::regclass);
 :   ALTER TABLE public."Reinos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224            �           2604    18766    Trabajos id    DEFAULT     n   ALTER TABLE ONLY public."Trabajos" ALTER COLUMN id SET DEFAULT nextval('public."Trabajos_id_seq"'::regclass);
 <   ALTER TABLE public."Trabajos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    226            ?          0    18713    Defensas 
   TABLE DATA           1   COPY public."Defensas" (id, defensa) FROM stdin;
    public          postgres    false    214   �M       A          0    18719    Diplomacias 
   TABLE DATA           H   COPY public."Diplomacias" (id_reino1, id_reino2, es_aliado) FROM stdin;
    public          postgres    false    216   �N       B          0    18722    Karts 
   TABLE DATA           T   COPY public."Karts" (id, modelo, color, velocidad_maxima, id_personaje) FROM stdin;
    public          postgres    false    217   �N       D          0    18728    Personaje_habita_reino 
   TABLE DATA           i   COPY public."Personaje_habita_reino" (id_personaje, id_reino, fecha_registro, es_gobernante) FROM stdin;
    public          postgres    false    219   ]P       E          0    18731    Personaje_tiene_trabajo 
   TABLE DATA           j   COPY public."Personaje_tiene_trabajo" (id_trabajo, id_personaje, fecha_inicio, fecha_termino) FROM stdin;
    public          postgres    false    220   AQ       F          0    18734 
   Personajes 
   TABLE DATA           T   COPY public."Personajes" (id, nombre, fuerza, fecha_nacimiento, objeto) FROM stdin;
    public          postgres    false    221   �Q       H          0    18740    Reino_tiene_defensa 
   TABLE DATA           E   COPY public."Reino_tiene_defensa" (id_reino, id_defensa) FROM stdin;
    public          postgres    false    223   $S       I          0    18743    Reinos 
   TABLE DATA           E   COPY public."Reinos" (id, nombre, ubicacion, superficie) FROM stdin;
    public          postgres    false    224   mS       K          0    18749    Trabajos 
   TABLE DATA           =   COPY public."Trabajos" (id, descripcion, sueldo) FROM stdin;
    public          postgres    false    226   �T       M          0    18755    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    228   9U       Y           0    0    Defensas_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Defensas_id_seq"', 15, true);
          public          postgres    false    215            Z           0    0    Karts_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Karts_id_seq"', 23, true);
          public          postgres    false    218            [           0    0    Personajes_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Personajes_id_seq"', 13, true);
          public          postgres    false    222            \           0    0    Reinos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Reinos_id_seq"', 9, true);
          public          postgres    false    225            ]           0    0    Trabajos_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Trabajos_id_seq"', 10, true);
          public          postgres    false    227            �           2606    18768    Defensas Defensas_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Defensas"
    ADD CONSTRAINT "Defensas_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Defensas" DROP CONSTRAINT "Defensas_pkey";
       public            postgres    false    214            �           2606    18770    Diplomacias Diplomacias_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_pkey" PRIMARY KEY (id_reino1, id_reino2);
 J   ALTER TABLE ONLY public."Diplomacias" DROP CONSTRAINT "Diplomacias_pkey";
       public            postgres    false    216    216            �           2606    18772    Karts Karts_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Karts"
    ADD CONSTRAINT "Karts_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Karts" DROP CONSTRAINT "Karts_pkey";
       public            postgres    false    217            �           2606    18774 2   Personaje_habita_reino Personaje_habita_reino_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_habita_reino"
    ADD CONSTRAINT "Personaje_habita_reino_pkey" PRIMARY KEY (id_personaje, id_reino);
 `   ALTER TABLE ONLY public."Personaje_habita_reino" DROP CONSTRAINT "Personaje_habita_reino_pkey";
       public            postgres    false    219    219            �           2606    18776 4   Personaje_tiene_trabajo Personaje_tiene_trabajo_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_tiene_trabajo"
    ADD CONSTRAINT "Personaje_tiene_trabajo_pkey" PRIMARY KEY (id_personaje, id_trabajo);
 b   ALTER TABLE ONLY public."Personaje_tiene_trabajo" DROP CONSTRAINT "Personaje_tiene_trabajo_pkey";
       public            postgres    false    220    220            �           2606    18778    Personajes Personajes_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Personajes"
    ADD CONSTRAINT "Personajes_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."Personajes" DROP CONSTRAINT "Personajes_pkey";
       public            postgres    false    221            �           2606    18780 ,   Reino_tiene_defensa Reino_tiene_defensa_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Reino_tiene_defensa"
    ADD CONSTRAINT "Reino_tiene_defensa_pkey" PRIMARY KEY (id_reino, id_defensa);
 Z   ALTER TABLE ONLY public."Reino_tiene_defensa" DROP CONSTRAINT "Reino_tiene_defensa_pkey";
       public            postgres    false    223    223            �           2606    18782    Reinos Reinos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Reinos"
    ADD CONSTRAINT "Reinos_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Reinos" DROP CONSTRAINT "Reinos_pkey";
       public            postgres    false    224            �           2606    18784    Trabajos Trabajos_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Trabajos"
    ADD CONSTRAINT "Trabajos_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Trabajos" DROP CONSTRAINT "Trabajos_pkey";
       public            postgres    false    226            �           2606    18786 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    228            �           2606    18787 &   Diplomacias Diplomacias_id_reino1_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_id_reino1_fkey" FOREIGN KEY (id_reino1) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 T   ALTER TABLE ONLY public."Diplomacias" DROP CONSTRAINT "Diplomacias_id_reino1_fkey";
       public          postgres    false    224    3235    216            �           2606    18792 &   Diplomacias Diplomacias_id_reino2_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_id_reino2_fkey" FOREIGN KEY (id_reino2) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 T   ALTER TABLE ONLY public."Diplomacias" DROP CONSTRAINT "Diplomacias_id_reino2_fkey";
       public          postgres    false    224    3235    216            �           2606    18797    Karts Karts_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Karts"
    ADD CONSTRAINT "Karts_id_personaje_fkey" FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public."Karts" DROP CONSTRAINT "Karts_id_personaje_fkey";
       public          postgres    false    217    3231    221            �           2606    18802 ?   Personaje_habita_reino Personaje_habita_reino_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_habita_reino"
    ADD CONSTRAINT "Personaje_habita_reino_id_personaje_fkey" FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 m   ALTER TABLE ONLY public."Personaje_habita_reino" DROP CONSTRAINT "Personaje_habita_reino_id_personaje_fkey";
       public          postgres    false    3231    219    221            �           2606    18807 ;   Personaje_habita_reino Personaje_habita_reino_id_reino_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_habita_reino"
    ADD CONSTRAINT "Personaje_habita_reino_id_reino_fkey" FOREIGN KEY (id_reino) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 i   ALTER TABLE ONLY public."Personaje_habita_reino" DROP CONSTRAINT "Personaje_habita_reino_id_reino_fkey";
       public          postgres    false    224    219    3235            �           2606    18812 A   Personaje_tiene_trabajo Personaje_tiene_trabajo_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_tiene_trabajo"
    ADD CONSTRAINT "Personaje_tiene_trabajo_id_personaje_fkey" FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 o   ALTER TABLE ONLY public."Personaje_tiene_trabajo" DROP CONSTRAINT "Personaje_tiene_trabajo_id_personaje_fkey";
       public          postgres    false    221    220    3231            �           2606    18817 ?   Personaje_tiene_trabajo Personaje_tiene_trabajo_id_trabajo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_tiene_trabajo"
    ADD CONSTRAINT "Personaje_tiene_trabajo_id_trabajo_fkey" FOREIGN KEY (id_trabajo) REFERENCES public."Trabajos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 m   ALTER TABLE ONLY public."Personaje_tiene_trabajo" DROP CONSTRAINT "Personaje_tiene_trabajo_id_trabajo_fkey";
       public          postgres    false    226    220    3237            �           2606    18822 7   Reino_tiene_defensa Reino_tiene_defensa_id_defensa_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Reino_tiene_defensa"
    ADD CONSTRAINT "Reino_tiene_defensa_id_defensa_fkey" FOREIGN KEY (id_defensa) REFERENCES public."Defensas"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 e   ALTER TABLE ONLY public."Reino_tiene_defensa" DROP CONSTRAINT "Reino_tiene_defensa_id_defensa_fkey";
       public          postgres    false    214    223    3221            �           2606    18827 5   Reino_tiene_defensa Reino_tiene_defensa_id_reino_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Reino_tiene_defensa"
    ADD CONSTRAINT "Reino_tiene_defensa_id_reino_fkey" FOREIGN KEY (id_reino) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 c   ALTER TABLE ONLY public."Reino_tiene_defensa" DROP CONSTRAINT "Reino_tiene_defensa_id_reino_fkey";
       public          postgres    false    224    3235    223            ?   �   x�M�MNA@�u�)��D��Hd!,�3-h�LU7ѹ���b�;��{�t%AS�R"�1L��C�a�z96�g���	%q��T�����gXj>�Ox���3���$v|�M�:�G�q���O�8�7i�"�wьqK��TM��	l�.4HhȊ��#�N�_k�h`/�i��qv��D�oE      A   -   x�3�4�,�2�4��`҈3���6� �F�f@#��=... �I      B   �  x�MQKn�0]?��h �e'N��(��d3���1�I(Q�s-�+e�nv��8��QX�^�c\��ky%b�h�r�~��R[3�2�)}]nI�����'V��(2�"�\���Q�H�cI[C��fK�ǜ��URQ����xh�K�FCE#Zⶫ�ѳe�_XP��
��F��� �� *��x��a9�~��|�1r
׾�Fw�|���L��H��`ﴵ$����ڻw�;B�|����p�C�*��ѶgwI�<�9~�`����u��*}�ݛ�L��4	��*Cػ��+�v?-)Th!½���KT,�KӚ�1U�7���*��ܴ��NM>%w�-;aWUx���L?�s���p�Q�@��.�~K���lX.x60OWB���u�      D   �   x�]���1�vn�)ٻkՒ�U��q�7��%�,,\��D'��Oe��	d�"��c��M�s�i4x���3;�q5�K*�:��=�13���,��G7%0Kr�!���蜍3�2���Љ��;��M���������rMO�����ōr��Ww
$�ݐ+�A-@Fo�PF�љ�������+5�e4�O��Mԫ�d{�G��6�L�      E   �   x�e���0D�v/� �_[A��c�JQ"���00H�"{	�$���V)� ^e�^�p�ăt����J�Hg}��"v'n91V����H�Hj�"�����
,.K����[=$��N�,ѕi�?�h�^�iݕ8��P��HN�X3��柯�|ק����B      F   "  x�U�MN�0���S�F�8N�%U��
!uc�&5����,\�q�Z�Yz���'�p5��C���+�P*�c�y
օ�K�FD�a}�\����n�LW�D%qKm�AT0���"(�:g��R����0ǎ��i����y%K�����(��z�Z-������~gE| ��L��g3����F杰��㻬������%��0�E�-�m�~��GJ[��cp>�J��c��l�I^�jx�C������q�;�~���U�����������b�q���z�!�Xn      H   9   x����0��7QLƔ�#���:"?����}��-)-�v;,��ɖG�M�=�4�      I     x�E�Mn�0���S� ��g��,[�EU�EY�J�X����F	RŎ#�p��&���$��L��~�᭬B����:T�?1���3��|1x;_�3�u�i�����PY8��1<S
����j&-S�%Ǉ5�:�� X�Ʒ��a;@�^Ќ�F�2J64di��)a����������7�6�f��ᥭ�|����\�%_�|ռ�0����IkaG�(�Ov��i��/��Ȥ�i?c:��Gd�,�e�^.��	�b�0~����s�3����)���������v��\��!����      K   �   x�M�1�0E�S�(i��E���iS���Gc�b�I<Y����3�H�	��F�؇(�Y���E��Rͮ�(�B]Q-.�v1:�0�HG���RHxm�:���Y���˭�8qN��B�����o��+i5�R?�04      M   �   x�m���0�Vi@�K��HR2�/!v��5��z�M̳b�Tƶj�[�@�ؖ�j���&͜s�4%�@�I����@�Cץ}�e��! UЛW��y�����VPPDh����ÿ��a�'j��K)_�-]     